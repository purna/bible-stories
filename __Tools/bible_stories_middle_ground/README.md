# Bible Stories Middle Ground Blender Add-on

This add-on creates and exchanges the editable 3D middle-ground layer used by Adam Act 1.

## Install

1. In Blender, open **Edit > Preferences > Add-ons**.
2. Choose **Install from Disk** and select `bible_stories_middle_ground.zip`.
3. Enable **Bible Stories Middle Ground**.
4. Open the 3D Viewport sidebar and choose **Bible Stories**.

## Workflow

1. Choose **Import Adam JSON** to open an existing
   `Adam/assets/3d/actN_scene_name.json` scene.
2. Edit meshes, materials, orbit-pivot keyframes, and the `BS_CameraRig` timeline.
3. Choose **Export Middle Ground**.

The default export follows Adam's existing asset naming convention:
`Adam/assets/3d/act1_creation_cosmos.glb`. A companion
`act1_creation_cosmos.scene.json` records the story, act, camera, timeline,
and object roles for the browser runtime.

**Import Middle Ground** accepts `.glb` and `.gltf` files and places imported
objects inside the `BS_MiddleGround` collection. Blender's glTF importer restores
compatible animation and camera tracks from the asset.

Adam's existing pixel3d JSON format can be imported directly. Its supported
primitive shapes, lights, background, and camera movement are converted to
editable Blender objects. Export remains GLB because the JSON format cannot
preserve arbitrary mesh edits or complete Blender animation tracks.

## Scene conventions

- Blender uses metres and Z-up; glTF export performs the web coordinate conversion.
- Exported content is limited to the `BS_MiddleGround` collection.
- Planet motion lives on `Orbit_*` empties and loops across frames 1–240.
- The camera is parented to `BS_CameraRig` and tracks `BS_CameraTarget`.
- Keep stable object names when browser code needs to find a specific object.
- The **Loop** checkbox in the Timeline panel controls the `loop` flag written
  to `timeline.loop`, `camera.track.loop`, and every animated object's
  `animation.loop` on export. It's read back from the JSON's `timeline.loop`
  on import (defaulting to on for files that don't set it).
