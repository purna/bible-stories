# Art — Mood Boards

Visual direction for every scene in the **Joshua** story (Joshua 1–24).
Each mood board is named after its data file in `../data/`
(`act1_<scene>.md` ↔ `act1_<scene>.json`) and is the shared contract
between the two rendering pipelines:

```
art/
├── readme.md                    ← this file
├── act1_<scene>.md              ← mood board 1
├── act2_<scene>.md              ← mood board 2
└── ...                          ← one per scene
```

## Reading a mood board

Every board has four sections:

1. **Header table** — the data file, the SVG asset folder, the 3D scene id,
   the particle mode and the interactive game beat for the scene.
2. **Director notes** — the biblical account and staging direction
   (setting, characters, props, light, mood).
3. **2D SVG composition** — the three-panel layout, palette and vignette
   used by the comic panels.
4. **3D three.js composition** — the Shot Designer scene spec: lighting,
   set, camera and motion.

## 2D SVG pipeline

The comic scenes are staged in SVG layers under `../assets/svg/`, one folder per
act (`act_01_<scene>/`) with three panels:

- `a_establish` — wide establishing shot of the setting
- `b_core_action` — the central action of the scene
- `c_resolve` — the resolution beat

Each beat folder contains three independently editable SVG layers:

- `*_background.svg` — sky, distant setting, and base ground.
- `*_middle_ground.svg` — the act’s focal setting, props, and optional character staging.
- `*_foreground.svg` — transparent edge framing and close props.

`../assets/svg/scene-layer-manifest.json` and the act entry in `../data/manifest.json`
(or `../data/canon.json` where a runtime act manifest is not used) link each beat
to its three layer files and the act’s exported materials. The order is always
background → middle ground → foreground. The scene designer can export all
beats as a ZIP rooted at the story folder.

## 3D three.js pipeline

The 3D scenes live in `../tools/shot-designer/scenes/`, one ES module per
scene named `<story>-<scene>.js` (e.g. `joshua-be_strong.js`).
Each module exports `build(group)` and is registered in
`../tools/shot-designer/scenes/manifest.json`. Scenes are assembled from
the shared primitives in `scenes/lib/lowpoly.js` (terrain, water, figures,
flora, lighting) so every scene shares the same low-poly visual language.

The Shot Designer (`../tools/shot-designer/index.html`) frames camera shots
against each scene, animates them along timelines, and exports stills or
video. Scene notes for every board are in the comment at the top of that
file.

## Keeping 2D and 3D in sync

The mood board is the contract between the pipelines. When a scene changes:

1. Update the director notes here first.
2. Re-tune the SVG panels' palette and staging to match.
3. Re-tune the Shot Designer scene's lighting, set and camera to match.

Palette, props, light and mood must agree across both, so a frame from the
comic and a still from the 3D scene read as the same world.


---

**Navigation:** [← Source of Truth Overview](../SOURCE-OF-TRUTH-OVERVIEW.md) | [Joshua Design SOT](../__docs/joshua-design-source-of-truth.md)
