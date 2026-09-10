# v2 changes — JSON-native import/export

Export now writes the same Adam pixel3d JSON format the importer reads,
instead of GLB. Everything is additive — old v1 files still import fine,
and a v1 file re-exported from Blender becomes v2.

## New/changed top-level fields

- `"version"`: now `2` on export.
- `"timeline"`: `{ frameStart, frameEnd, fps, loop }` — drives Blender's
  playback range on import, written from the scene's actual frame range on export.
- `"settings.fog"`: `{ color, density }` — round-trips via new Fog controls
  in the panel (Blender's own mist/volumetrics aren't used, since they don't
  map cleanly to Three.js fog; fog is just stored as explicit settings).
- `"camera.target"`: the camera's look-at point.
- `"camera.track"`: present only if the camera (or its rig) is keyframed.
  `{ loop: true, keys: [ { frame, position, target }, ... ] }`, densely
  sampled every `Bake step` frames across the timeline. On import, this
  directly keyframes the camera + target's positions and lets Blender's
  existing TRACK_TO constraint reproduce the look direction — no formula
  is stored or replayed.

## Per-object `"animation"`

Any shape or light that's keyframed (directly, or via an animated parent —
e.g. a planet on a spinning orbit pivot) now exports:

```json
"animation": { "loop": true, "keys": [
  { "frame": 1, "position": {...}, "rotation": {...}, "scale": {...} },
  ...
]}
```

Keys are **world-space**, sampled every `Bake step` frames (default 1,
raise it for long timelines to shrink the file). `rotation`/`scale` are
included per key; a renderer that only cares about position can ignore
them. Static (non-animated) objects have no `"animation"` key at all, so
existing simple scenes stay just as small as before.

## Material round-trip

Shapes now tag `pixel3d_material_type` / `pixel3d_outline` / `pixel3d_opacity`
as custom properties on import, so export can write back the same
`material.type` / `outline` / `opacity` instead of guessing. Color always
comes from the object's material base color — edit that in Blender and it
round-trips automatically.

## New shape type

`"shapeType": "torus"` is now supported on import (maps to
`primitive_torus_add`) — added because Saturn's rings are a torus.  **The
browser-side pixel3d loader will need a torus case added too** if you want
that to render on the web; this only covers the Blender side.

## Known limitations (didn't try to solve, worth knowing)

- **Euler rotation conversion is a per-axis swap**, exact for single-axis
  rotations but not a mathematically general Y-up⇄Z-up conversion for
  compound rotations. Fine for spins/orbits; sanity-check anything with
  simultaneous multi-axis rotation.
- **Light intensity is a heuristic scale** (`energy / 100` for point-ish
  lights), not physically matched — expect to retune brightness by eye.
- **Decorations (`stars`/`rays`) aren't visually built** in Blender, only
  held as editable custom properties on a placeholder empty (count, spread,
  color, size, opacity, radius, height) — you can tweak the numbers in the
  Object Properties panel, but you won't see the actual star field/rays in
  the viewport.
- **`bake_step` > 1 uses linear interpolation between samples** in whatever
  plays the JSON back — fine for constant-speed motion (orbits), but any
  fast easing you sculpt on the F-Curve in Blender will get flattened if
  you raise the step too high. Keep it at 1 for anything with eased/keyed
  timing, and only raise it for long, simple loops.
