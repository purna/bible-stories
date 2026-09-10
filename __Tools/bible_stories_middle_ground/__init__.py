bl_info = {
    "name": "Bible Stories Middle Ground",
    "author": "Bible Stories project",
    "version": (2, 0, 0),
    "blender": (4, 0, 0),
    "location": "3D Viewport > Sidebar > Bible Stories",
    "description": "Build, import, edit, and export animated middle-ground scenes as Adam pixel3d JSON",
    "category": "Import-Export",
}

import json
import math
from pathlib import Path

import bpy
from bpy.props import (
    BoolProperty,
    FloatProperty,
    FloatVectorProperty,
    IntProperty,
    StringProperty,
)
from bpy.types import Operator, Panel, PropertyGroup
from bpy_extras.io_utils import ExportHelper, ImportHelper
from mathutils import Vector


SCHEMA_VERSION = 2  # additive over version 1: timeline, settings.fog, per-object
                     # "animation", camera.track/target. Version-1 files still import fine.

COLLECTION_NAME = "BS_MiddleGround"
CAMERA_NAME = "BS_Camera"
CAMERA_RIG_NAME = "BS_CameraRig"
TARGET_NAME = "BS_CameraTarget"

# Roles that exist only to drive Blender-side motion/rigging and should not
# be emitted as their own JSON objects (their animation still propagates to
# whatever they parent/target via object_is_animated()).
SKIP_ROLES = {"orbit_pivot", "orbit_guide", "camera_rig", "camera_target", "planet_ring"}

DECORATION_NUMERIC_FIELDS = ("count", "spread", "color", "size", "opacity", "radius", "height")


def project_root_from_addon():
    path = Path(__file__).resolve()
    for parent in path.parents:
        if (parent / "Adam").is_dir() and (parent / "__shared").is_dir():
            return parent
    return Path.home()


def middle_ground_collection(create=True):
    collection = bpy.data.collections.get(COLLECTION_NAME)
    if collection is None and create:
        collection = bpy.data.collections.new(COLLECTION_NAME)
        bpy.context.scene.collection.children.link(collection)
    return collection


def remove_collection_objects(collection):
    if not collection:
        return
    for obj in list(collection.all_objects):
        bpy.data.objects.remove(obj, do_unlink=True)


def link_only_to(obj, collection):
    for owner in list(obj.users_collection):
        owner.objects.unlink(obj)
    collection.objects.link(obj)


def tag(obj, role, day=0):
    obj["bible_stories_role"] = role
    if day:
        obj["creation_day"] = day
    return obj


def make_material(name, color, emission=None, strength=0.0, metallic=0.0, roughness=0.72):
    material = bpy.data.materials.get(name) or bpy.data.materials.new(name)
    material.diffuse_color = (*color, 1.0)
    material.use_nodes = True
    principled = material.node_tree.nodes.get("Principled BSDF")
    principled.inputs["Base Color"].default_value = (*color, 1.0)
    principled.inputs["Metallic"].default_value = metallic
    principled.inputs["Roughness"].default_value = roughness
    if emission:
        emission_input = principled.inputs.get("Emission Color") or principled.inputs.get("Emission")
        if emission_input:
            emission_input.default_value = (*emission, 1.0)
        strength_input = principled.inputs.get("Emission Strength")
        if strength_input:
            strength_input.default_value = strength
    return material


def add_empty(name, collection, location=(0, 0, 0)):
    obj = bpy.data.objects.new(name, None)
    obj.empty_display_type = "PLAIN_AXES"
    obj.empty_display_size = 2.0
    obj.location = location
    collection.objects.link(obj)
    return obj


# ---------------------------------------------------------------------------
# Coordinate conversion. The web/JSON side is Three.js Y-up; Blender is Z-up.
# to_blender_* converts a JSON dict into Blender space (import direction).
# to_web_* converts Blender values back into a JSON-ready dict (export
# direction). These are exact inverses of each other.
# ---------------------------------------------------------------------------

def to_blender_position(value):
    return (value.get("x", 0), -value.get("z", 0), value.get("y", 0))


def to_blender_scale(value):
    return (value.get("x", 1), value.get("z", 1), value.get("y", 1))


def to_blender_rotation(value):
    return (value.get("x", 0), -value.get("z", 0), value.get("y", 0))


def to_web_position(vec):
    return {"x": round(vec.x, 4), "y": round(vec.z, 4), "z": round(-vec.y, 4)}


def to_web_scale(vec):
    return {"x": round(vec.x, 4), "y": round(vec.z, 4), "z": round(vec.y, 4)}


def to_web_rotation(euler):
    return {"x": round(euler.x, 4), "y": round(euler.z, 4), "z": round(-euler.y, 4)}


def hex_color(value, fallback=(0.8, 0.8, 0.8)):
    if not isinstance(value, str) or not value.startswith("#"):
        return fallback
    value = value.lstrip("#")
    if len(value) == 3:
        value = "".join(character * 2 for character in value)
    try:
        return tuple(int(value[index:index + 2], 16) / 255 for index in (0, 2, 4))
    except (ValueError, IndexError):
        return fallback


def hex_from_rgb(rgb):
    def channel(c):
        return max(0, min(255, round(c * 255)))
    r, g, b = rgb[0], rgb[1], rgb[2]
    return "#{:02x}{:02x}{:02x}".format(channel(r), channel(g), channel(b))


def hex_from_world(world):
    if not world or not world.use_nodes:
        return "#000000"
    background = world.node_tree.nodes.get("Background")
    if not background:
        return "#000000"
    return hex_from_rgb(background.inputs["Color"].default_value[:3])


# ---------------------------------------------------------------------------
# Animation: keyframe helpers shared by import (write keys) and export
# (read/bake keys). Handles both the classic Action.fcurves API and the
# newer layered-Action API (Blender 4.4+ "Animation" data-block preview).
# ---------------------------------------------------------------------------

def iter_fcurves(action):
    if not action:
        return []
    if hasattr(action, "fcurves") and action.fcurves:
        return list(action.fcurves)
    curves = []
    if hasattr(action, "layers"):
        for layer in action.layers:
            for strip in layer.strips:
                for slot in action.slots:
                    channel_bag = strip.channelbag(slot)
                    if channel_bag:
                        curves.extend(channel_bag.fcurves)
    return curves


def set_looping_linear(obj):
    action = obj.animation_data.action if obj.animation_data else None
    for curve in iter_fcurves(action):
        for point in curve.keyframe_points:
            point.interpolation = "LINEAR"
        if not any(modifier.type == "CYCLES" for modifier in curve.modifiers):
            modifier = curve.modifiers.new("CYCLES")
            modifier.mode_before = "REPEAT"
            modifier.mode_after = "REPEAT"


def animate_rotation(obj, frame_start, frame_end, turns=1.0):
    obj.rotation_mode = "XYZ"
    obj.rotation_euler.z = 0
    obj.keyframe_insert("rotation_euler", index=2, frame=frame_start)
    obj.rotation_euler.z = math.tau * turns
    obj.keyframe_insert("rotation_euler", index=2, frame=frame_end)
    set_looping_linear(obj)


def apply_animation(obj, animation):
    """Recreate keyframes on obj from a v2 JSON {"keys": [...]} block."""
    keys = (animation or {}).get("keys") or []
    if not keys:
        return
    for key in keys:
        frame = key.get("frame", 1)
        if "position" in key:
            obj.location = to_blender_position(key["position"])
            obj.keyframe_insert("location", frame=frame)
        if "rotation" in key:
            obj.rotation_euler = to_blender_rotation(key["rotation"])
            obj.keyframe_insert("rotation_euler", frame=frame)
        if "scale" in key:
            obj.scale = to_blender_scale(key["scale"])
            obj.keyframe_insert("scale", frame=frame)
    set_looping_linear(obj)


def object_is_animated(obj, _seen=None):
    """True if obj (or anything it's parented/constrained to) has keys."""
    if obj is None:
        return False
    if _seen is None:
        _seen = set()
    if obj.name in _seen:
        return False
    _seen.add(obj.name)
    if obj.animation_data and obj.animation_data.action:
        return True
    if obj.parent and object_is_animated(obj.parent, _seen):
        return True
    for constraint in obj.constraints:
        target = getattr(constraint, "target", None)
        if target is not None and object_is_animated(target, _seen):
            return True
    return False


def sample_world(obj):
    """(position, rotation, scale) of obj's *current* evaluated world matrix,
    each already converted to the web/JSON coordinate convention."""
    loc, rot, scale = obj.matrix_world.decompose()
    return to_web_position(loc), to_web_rotation(rot.to_euler()), to_web_scale(scale)


# ---------------------------------------------------------------------------
# Import: Adam pixel3d JSON -> editable Blender scene
# ---------------------------------------------------------------------------

def import_adam_json(context, filepath):
    data = json.loads(Path(filepath).read_text(encoding="utf-8"))
    if data.get("version") not in (1, 2) or not isinstance(data.get("objects"), list):
        raise ValueError("Expected an Adam/pixel3d version 1 or 2 scene")

    scene = context.scene
    bsmg = scene.bsmg_settings

    timeline = data.get("timeline")
    if timeline:
        scene.frame_start = timeline.get("frameStart", scene.frame_start)
        scene.frame_end = timeline.get("frameEnd", scene.frame_end)
        scene.render.fps = timeline.get("fps", scene.render.fps)
        bsmg.frame_start = scene.frame_start
        bsmg.frame_end = scene.frame_end
        bsmg.fps = scene.render.fps
        bsmg.timeline_loop = timeline.get("loop", True)

    collection = middle_ground_collection()
    remove_collection_objects(collection)
    scene_name = data.get("name") or Path(filepath).stem
    bsmg.asset_name = scene_name.removeprefix(f"act{bsmg.act}_")

    for index, source in enumerate(data["objects"]):
        position = to_blender_position(source.get("position", {}))
        object_type = source.get("type")
        animation = source.get("animation")

        if object_type == "light":
            light_type = source.get("lightType") or source.get("userData", {}).get("lightType", "point")
            if light_type == "ambient":
                obj = tag(add_empty(source.get("name", f"Ambient_Light_{index:02d}"), collection, position), "ambient_light")
                obj["pixel3d_light_type"] = "ambient"
                obj["pixel3d_intensity"] = source.get("intensity", 1.0)
                obj["pixel3d_color"] = source.get("color", "#ffffff")
                if animation:
                    apply_animation(obj, animation)
                continue
            blender_type = {"directional": "SUN", "point": "POINT"}.get(light_type, "POINT")
            bpy.ops.object.light_add(type=blender_type, location=position)
            obj = bpy.context.object
            obj.name = source.get("name", f"Light_{index:02d}")
            obj.data.color = hex_color(source.get("color"), (1, 1, 1))
            intensity = source.get("intensity", 1.0)
            obj.data.energy = intensity if blender_type == "SUN" else intensity * 100
            link_only_to(obj, collection)
            tag(obj, "light")
            obj["pixel3d_light_type"] = light_type
            if animation:
                apply_animation(obj, animation)
            continue

        if object_type != "shape":
            decoration_type = source.get("decorationType", object_type or "item")
            obj = tag(add_empty(f"{decoration_type}_{index:02d}", collection, position), "decoration")
            obj["pixel3d_decoration_type"] = decoration_type
            for field in DECORATION_NUMERIC_FIELDS:
                if field in source:
                    obj[f"pixel3d_{field}"] = source[field]
            continue

        shape_type = source.get("shapeType") or source.get("userData", {}).get("shapeType", "box")
        if shape_type == "sphere":
            bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=2, radius=1, location=position)
        elif shape_type == "cylinder":
            bpy.ops.mesh.primitive_cylinder_add(vertices=16, radius=1, depth=2, location=position)
        elif shape_type == "plane":
            bpy.ops.mesh.primitive_plane_add(size=2, location=position)
        elif shape_type == "torus":
            bpy.ops.mesh.primitive_torus_add(major_radius=1, minor_radius=0.3, location=position)
        else:
            bpy.ops.mesh.primitive_cube_add(size=2, location=position)
        obj = bpy.context.object
        obj.name = source.get("name") or source.get("userData", {}).get("id") or f"{shape_type.title()}_{index:02d}"
        obj.scale = to_blender_scale(source.get("scale", {"x": 1, "y": 1, "z": 1}))
        obj.rotation_euler = to_blender_rotation(source.get("rotation", {}))
        color = hex_color(source.get("color"))
        material_spec = source.get("material", {})
        emission = color if material_spec.get("type") == "emissive" else None
        obj.data.materials.append(make_material(f"BS_{obj.name}_Material", color, emission=emission, strength=2.0 if emission else 0))
        link_only_to(obj, collection)
        tag(obj, "shape")
        obj["pixel3d_shape_type"] = shape_type
        obj["pixel3d_material_type"] = material_spec.get("type", "flat")
        if material_spec.get("outline") is not None:
            obj["pixel3d_outline"] = material_spec["outline"]
        if material_spec.get("opacity") is not None:
            obj["pixel3d_opacity"] = material_spec["opacity"]
        if animation:
            apply_animation(obj, animation)

    camera_data = data.get("camera", {})
    target = tag(add_empty(TARGET_NAME, collection, to_blender_position(camera_data.get("target", {}))), "camera_target")
    rig = tag(add_empty(CAMERA_RIG_NAME, collection), "camera_rig")
    distance = camera_data.get("distance", 80)
    height = camera_data.get("height", 15)
    bpy.ops.object.camera_add(location=(0, -distance, height))
    camera = bpy.context.object
    camera.name = CAMERA_NAME
    link_only_to(camera, collection)
    camera.parent = rig
    track_constraint = camera.constraints.new("TRACK_TO")
    track_constraint.target = target
    track_constraint.track_axis = "TRACK_NEGATIVE_Z"
    track_constraint.up_axis = "UP_Y"
    context.scene.camera = camera

    track = camera_data.get("track")
    if track and track.get("keys"):
        # Baked hand-animated (or previously-exported) camera movement:
        # keyframe camera + target positions directly, the TRACK_TO
        # constraint reproduces the look-direction each frame.
        for key in track["keys"]:
            frame = key.get("frame", 1)
            if "position" in key:
                camera.location = to_blender_position(key["position"])
                camera.keyframe_insert("location", frame=frame)
            if "target" in key:
                target.location = to_blender_position(key["target"])
                target.keyframe_insert("location", frame=frame)
        set_looping_linear(camera)
        set_looping_linear(target)
    else:
        # Legacy v1 procedural camera formula (thetaSpeed/distanceAmp/...):
        # not reproducible exactly, so give the rig a generic spin and stash
        # the original formula for reference.
        camera_animation = data.get("cameraAnimation") or data.get("animations", {}).get("camera")
        if camera_animation:
            animate_rotation(rig, context.scene.frame_start, context.scene.frame_end, 1.0)
            context.scene["bsmg_source_camera_animation"] = json.dumps(camera_animation, separators=(",", ":"))

    settings = data.get("settings", {})
    if settings.get("background"):
        world = context.scene.world or bpy.data.worlds.new("Bible Stories World")
        context.scene.world = world
        world.use_nodes = True
        world.node_tree.nodes["Background"].inputs["Color"].default_value = (*hex_color(settings["background"]), 1)

    fog = settings.get("fog")
    bsmg.fog_enabled = bool(fog)
    if fog:
        bsmg.fog_color = hex_color(fog.get("color"), (0, 0, 0))
        bsmg.fog_density = fog.get("density", bsmg.fog_density)

    return collection, data


# ---------------------------------------------------------------------------
# Export: Blender scene -> Adam pixel3d JSON (baked animation included)
# ---------------------------------------------------------------------------

def decoration_to_json(obj):
    entry = {"type": "decoration", "decorationType": obj.get("pixel3d_decoration_type", "stars")}
    for field in DECORATION_NUMERIC_FIELDS:
        prop_key = f"pixel3d_{field}"
        if prop_key in obj:
            entry[field] = obj[prop_key]
    return entry


def object_to_json(obj, base_sample, track, loop):
    role = obj.get("bible_stories_role", "")
    if role in SKIP_ROLES:
        return None

    position, rotation, scale = base_sample
    entry = None

    if obj.type == "LIGHT":
        light_type = obj.get("pixel3d_light_type") or ("directional" if obj.data.type == "SUN" else "point")
        intensity = obj.data.energy if obj.data.type == "SUN" else round(obj.data.energy / 100, 4)
        entry = {
            "type": "light",
            "lightType": light_type,
            "color": hex_from_rgb(obj.data.color),
            "intensity": intensity,
            "position": position,
        }
    elif role == "ambient_light":
        entry = {
            "type": "light",
            "lightType": "ambient",
            "color": obj.get("pixel3d_color", "#ffffff"),
            "intensity": obj.get("pixel3d_intensity", 1.0),
        }
    elif role == "decoration":
        entry = decoration_to_json(obj)
    elif obj.type == "MESH" and obj.data.materials:
        material = obj.data.materials[0]
        entry = {
            "type": "shape",
            "shapeType": obj.get("pixel3d_shape_type", "sphere"),
            "position": position,
            "scale": scale,
            "color": hex_from_rgb(material.diffuse_color[:3]),
            "material": {"type": obj.get("pixel3d_material_type", "flat")},
        }
        outline = obj.get("pixel3d_outline")
        if outline:
            entry["material"]["outline"] = outline
        opacity = obj.get("pixel3d_opacity", 1.0)
        if opacity != 1.0:
            entry["material"]["opacity"] = opacity
        if any(abs(value) > 1e-4 for value in rotation.values()):
            entry["rotation"] = rotation
    else:
        return None

    if track:
        entry["animation"] = {"loop": loop, "keys": track}

    return entry


def build_camera_json(base_samples, tracks, camera_obj, loop):
    if not camera_obj or camera_obj.name not in base_samples:
        return {"distance": 80, "height": 15}

    cam_pos, _, _ = base_samples[camera_obj.name]
    target_obj = bpy.data.objects.get(TARGET_NAME)
    if target_obj and target_obj.name in base_samples:
        target_pos, _, _ = base_samples[target_obj.name]
    else:
        target_pos = {"x": 0, "y": 0, "z": 0}

    horizontal = math.hypot(cam_pos["x"] - target_pos["x"], cam_pos["z"] - target_pos["z"])
    height = cam_pos["y"] - target_pos["y"]

    result = {
        "distance": round(horizontal, 4),
        "height": round(height, 4),
        "target": target_pos,
    }

    camera_track = tracks.get(camera_obj.name)
    if camera_track:
        target_track = tracks.get(target_obj.name) if target_obj else None
        keys = []
        for index, key in enumerate(camera_track):
            merged = {"frame": key["frame"], "position": key["position"]}
            merged["target"] = target_track[index]["position"] if target_track and index < len(target_track) else target_pos
            keys.append(merged)
        result["track"] = {"loop": loop, "keys": keys}

    return result


def bake_tracks(context, all_objects, frame_start, frame_end, step):
    """Sample every `step` frames (plus the exact final frame) for every
    object that is itself keyframed or hangs off something that is.
    Returns (base_samples, tracks): base_samples has one entry per object
    (its pose at frame_start), tracks has an entry per *animated* object
    only, each a list of {"frame","position","rotation","scale"} dicts."""
    scene = context.scene
    original_frame = scene.frame_current

    animated = [obj for obj in all_objects if object_is_animated(obj)]
    base_samples = {}
    tracks = {obj.name: [] for obj in animated}

    frame = frame_start
    last_sampled = None
    while frame <= frame_end:
        scene.frame_set(frame)
        context.view_layer.update()
        if frame == frame_start:
            for obj in all_objects:
                base_samples[obj.name] = sample_world(obj)
        for obj in animated:
            position, rotation, scale = sample_world(obj)
            tracks[obj.name].append({"frame": frame, "position": position, "rotation": rotation, "scale": scale})
        last_sampled = frame
        frame += step

    if animated and last_sampled != frame_end:
        scene.frame_set(frame_end)
        context.view_layer.update()
        for obj in animated:
            position, rotation, scale = sample_world(obj)
            tracks[obj.name].append({"frame": frame_end, "position": position, "rotation": rotation, "scale": scale})

    scene.frame_set(original_frame)
    context.view_layer.update()
    return base_samples, tracks


def export_adam_json(context, filepath):
    scene = context.scene
    settings = scene.bsmg_settings
    collection = middle_ground_collection(False)
    if not collection or not collection.all_objects:
        raise ValueError("No BS_MiddleGround collection to export")

    frame_start = settings.frame_start
    frame_end = settings.frame_end
    step = max(1, settings.bake_step)

    all_objects = list(collection.all_objects)
    base_samples, tracks = bake_tracks(context, all_objects, frame_start, frame_end, step)

    loop = settings.timeline_loop
    camera_obj = scene.camera
    objects_json = []
    for obj in sorted(all_objects, key=lambda item: item.name):
        if camera_obj and obj is camera_obj:
            continue
        entry = object_to_json(obj, base_samples[obj.name], tracks.get(obj.name), loop)
        if entry:
            objects_json.append(entry)

    data = {
        "version": SCHEMA_VERSION,
        "name": settings.asset_name,
        "settings": {"background": hex_from_world(scene.world)},
        "camera": build_camera_json(base_samples, tracks, camera_obj, loop),
        "timeline": {
            "frameStart": frame_start,
            "frameEnd": frame_end,
            "fps": settings.fps,
            "loop": loop,
        },
        "objects": objects_json,
    }
    if settings.fog_enabled:
        data["settings"]["fog"] = {
            "color": hex_from_rgb(settings.fog_color),
            "density": round(settings.fog_density, 6),
        }

    path = Path(filepath)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")
    return data


def collect_manifest(scene, collection, glb_path):
    objects = []
    for obj in sorted(collection.all_objects, key=lambda item: item.name):
        objects.append({
            "name": obj.name,
            "type": obj.type,
            "role": obj.get("bible_stories_role", "editable"),
            "creationDay": obj.get("creation_day", 0),
        })
    return {
        "schemaVersion": 1,
        "story": scene.bsmg_settings.story,
        "act": scene.bsmg_settings.act,
        "layer": "middle-ground",
        "asset": glb_path.name,
        "collection": collection.name,
        "camera": scene.camera.name if scene.camera else None,
        "timeline": {
            "frameStart": scene.frame_start,
            "frameEnd": scene.frame_end,
            "fps": scene.render.fps,
            "loop": scene.bsmg_settings.timeline_loop,
        },
        "objects": objects,
    }


# ---------------------------------------------------------------------------
# Operators & panel
# ---------------------------------------------------------------------------

class BSMGSettings(PropertyGroup):
    story: StringProperty(name="Story", default="Adam")
    act: IntProperty(name="Act", default=1, min=1)
    asset_name: StringProperty(name="Asset", default="creation_cosmos")
    project_root: StringProperty(name="Project root", subtype="DIR_PATH", default=str(project_root_from_addon()))
    frame_start: IntProperty(name="Start", default=1, min=0)
    frame_end: IntProperty(name="End", default=240, min=1)
    fps: IntProperty(name="FPS", default=24, min=1, max=120)
    timeline_loop: BoolProperty(
        name="Loop", default=True,
        description="Whether the timeline plays back looping. Written to timeline.loop, "
                     "camera.track.loop, and every animated object's animation.loop on export",
    )
    bake_step: IntProperty(
        name="Bake step", default=1, min=1, max=30,
        description="Sample every Nth frame when baking animation to JSON. 1 = smoothest, higher = smaller file",
    )
    export_selected_only: BoolProperty(name="Selected objects only", default=False)
    fog_enabled: BoolProperty(name="Fog", default=False)
    fog_color: FloatVectorProperty(name="Fog color", subtype="COLOR", size=3, default=(0.0, 0.0, 0.0), min=0.0, max=1.0)
    fog_density: FloatProperty(name="Fog density", default=0.0025, min=0.0, max=1.0)


class BSMG_OT_import_glb(Operator, ImportHelper):
    bl_idname = "bsmg.import_glb"
    bl_label = "Import Middle Ground"
    bl_description = "Import a GLB or glTF and move its objects into the middle-ground collection"
    bl_options = {"REGISTER", "UNDO"}

    filename_ext = ".glb"
    filter_glob: StringProperty(default="*.glb;*.gltf", options={"HIDDEN"})

    def execute(self, context):
        before = set(bpy.data.objects)
        bpy.ops.import_scene.gltf(filepath=self.filepath)
        imported = [obj for obj in bpy.data.objects if obj not in before]
        collection = middle_ground_collection()
        for obj in imported:
            link_only_to(obj, collection)
            if "bible_stories_role" not in obj:
                tag(obj, "imported")
        cameras = [obj for obj in imported if obj.type == "CAMERA"]
        if cameras:
            context.scene.camera = cameras[0]
        self.report({"INFO"}, f"Imported {len(imported)} objects into {COLLECTION_NAME}")
        return {"FINISHED"}


class BSMG_OT_import_adam_json(Operator, ImportHelper):
    bl_idname = "bsmg.import_adam_json"
    bl_label = "Import Adam JSON"
    bl_description = "Import an existing Adam assets/3d pixel3d scene into Blender"
    bl_options = {"REGISTER", "UNDO"}

    filename_ext = ".json"
    filter_glob: StringProperty(default="*.json", options={"HIDDEN"})

    def invoke(self, context, event):
        settings = context.scene.bsmg_settings
        root = Path(bpy.path.abspath(settings.project_root))
        self.filepath = str(root / "Adam" / "assets" / "3d" / f"act{settings.act}_{settings.asset_name}.json")
        return super().invoke(context, event)

    def execute(self, context):
        try:
            collection, data = import_adam_json(context, self.filepath)
        except (OSError, ValueError, json.JSONDecodeError) as error:
            self.report({"ERROR"}, str(error))
            return {"CANCELLED"}
        self.report({"INFO"}, f"Imported {data.get('name', Path(self.filepath).stem)} with {len(collection.all_objects)} Blender objects")
        return {"FINISHED"}


class BSMG_OT_export_adam_json(Operator, ExportHelper):
    bl_idname = "bsmg.export_adam_json"
    bl_label = "Export Adam JSON"
    bl_description = "Bake shapes, lights, fog, and camera movement back into the Adam pixel3d JSON format"
    bl_options = {"REGISTER"}

    filename_ext = ".json"
    filter_glob: StringProperty(default="*.json", options={"HIDDEN"})

    def invoke(self, context, event):
        settings = context.scene.bsmg_settings
        root = Path(bpy.path.abspath(settings.project_root))
        self.filepath = str(root / "Adam" / "assets" / "3d" / f"act{settings.act}_{settings.asset_name}.json")
        return super().invoke(context, event)

    def execute(self, context):
        try:
            data = export_adam_json(context, self.filepath)
        except ValueError as error:
            self.report({"ERROR"}, str(error))
            return {"CANCELLED"}
        self.report({"INFO"}, f"Exported {len(data['objects'])} objects to {Path(self.filepath).name}")
        return {"FINISHED"}


class BSMG_OT_export_glb(Operator, ExportHelper):
    bl_idname = "bsmg.export_glb"
    bl_label = "Export GLB (mesh only)"
    bl_description = "Optional: export the middle-ground collection as a GLB + manifest, for mesh interchange with other tools"

    filename_ext = ".glb"
    filter_glob: StringProperty(default="*.glb", options={"HIDDEN"})

    def invoke(self, context, event):
        settings = context.scene.bsmg_settings
        root = Path(bpy.path.abspath(settings.project_root))
        self.filepath = str(root / "Adam" / "assets" / "3d" / f"act{settings.act}_{settings.asset_name}.glb")
        return super().invoke(context, event)

    def execute(self, context):
        collection = middle_ground_collection(False)
        if not collection or not collection.all_objects:
            self.report({"ERROR"}, "No BS_MiddleGround collection to export")
            return {"CANCELLED"}

        path = Path(self.filepath)
        path.parent.mkdir(parents=True, exist_ok=True)
        previous_selection = list(context.selected_objects)
        previous_active = context.view_layer.objects.active
        bpy.ops.object.select_all(action="DESELECT")
        for obj in collection.all_objects:
            obj.select_set(True)
        context.view_layer.objects.active = next(iter(collection.all_objects), None)

        try:
            bpy.ops.export_scene.gltf(
                filepath=str(path),
                export_format="GLB",
                use_selection=True,
                export_animations=True,
                export_cameras=True,
                export_lights=True,
                export_apply=False,
            )
            manifest = collect_manifest(context.scene, collection, path)
            path.with_suffix(".scene.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
        finally:
            bpy.ops.object.select_all(action="DESELECT")
            for obj in previous_selection:
                if obj.name in bpy.data.objects:
                    obj.select_set(True)
            if previous_active and previous_active.name in bpy.data.objects:
                context.view_layer.objects.active = previous_active

        self.report({"INFO"}, f"Exported {path.name} with animation and camera")
        return {"FINISHED"}


class BSMG_PT_panel(Panel):
    bl_label = "Middle Ground"
    bl_idname = "BSMG_PT_panel"
    bl_space_type = "VIEW_3D"
    bl_region_type = "UI"
    bl_category = "Bible Stories"

    def draw(self, context):
        layout = self.layout
        settings = context.scene.bsmg_settings
        row = layout.row(align=True)
        row.prop(settings, "story")
        row.prop(settings, "act")
        layout.prop(settings, "asset_name")
        layout.separator()

        layout.label(text="Scene exchange")
        row = layout.row(align=True)
        row.operator("bsmg.import_glb", icon="IMPORT")
        row.operator("bsmg.export_glb", icon="EXPORT")
        layout.operator("bsmg.import_adam_json", icon="FILE_SCRIPT")
        layout.operator("bsmg.export_adam_json", icon="EXPORT")
        layout.prop(settings, "project_root")
        layout.separator()

        layout.label(text="Timeline")
        row = layout.row(align=True)
        row.prop(settings, "frame_start")
        row.prop(settings, "frame_end")
        row.prop(settings, "fps")
        layout.prop(settings, "timeline_loop")
        layout.prop(settings, "bake_step")
        if context.scene.camera:
            layout.label(text=f"Camera: {context.scene.camera.name}", icon="CAMERA_DATA")
        layout.separator()

        layout.label(text="Fog")
        layout.prop(settings, "fog_enabled")
        sub = layout.column(align=True)
        sub.enabled = settings.fog_enabled
        sub.prop(settings, "fog_color")
        sub.prop(settings, "fog_density")


CLASSES = (
    BSMGSettings,
    BSMG_OT_import_glb,
    BSMG_OT_import_adam_json,
    BSMG_OT_export_adam_json,
    BSMG_OT_export_glb,
    BSMG_PT_panel,
)


def menu_func_import_json(self, context):
    self.layout.operator(BSMG_OT_import_adam_json.bl_idname, text="Adam Middle Ground (.json)")


def menu_func_export_json(self, context):
    self.layout.operator(BSMG_OT_export_adam_json.bl_idname, text="Adam Middle Ground (.json)")


def menu_func_import_glb(self, context):
    self.layout.operator(BSMG_OT_import_glb.bl_idname, text="Adam Middle Ground (.glb/.gltf)")


def menu_func_export_glb(self, context):
    self.layout.operator(BSMG_OT_export_glb.bl_idname, text="Adam Middle Ground (.glb, mesh only)")


def register():
    for cls in CLASSES:
        bpy.utils.register_class(cls)
    bpy.types.Scene.bsmg_settings = bpy.props.PointerProperty(type=BSMGSettings)
    bpy.types.TOPBAR_MT_file_import.append(menu_func_import_json)
    bpy.types.TOPBAR_MT_file_export.append(menu_func_export_json)
    bpy.types.TOPBAR_MT_file_import.append(menu_func_import_glb)
    bpy.types.TOPBAR_MT_file_export.append(menu_func_export_glb)


def unregister():
    bpy.types.TOPBAR_MT_file_import.remove(menu_func_import_json)
    bpy.types.TOPBAR_MT_file_export.remove(menu_func_export_json)
    bpy.types.TOPBAR_MT_file_import.remove(menu_func_import_glb)
    bpy.types.TOPBAR_MT_file_export.remove(menu_func_export_glb)
    del bpy.types.Scene.bsmg_settings
    for cls in reversed(CLASSES):
        bpy.utils.unregister_class(cls)


if __name__ == "__main__":
    register()
