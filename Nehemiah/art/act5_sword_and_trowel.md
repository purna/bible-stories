# Ch.5 · Sword and Trowel

**Mood board 5 of 10** — Nehemiah (Nehemiah 1–13)

| | |
| --- | --- |
| Data file | `../data/act5_sword_and_trowel.json` |
| SVG assets | `../assets/svg/act_05_sword_and_trowel/` |
| 3D scene | `nehemiah-sword-and-trowel` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Balance guarding with construction. — balance |

> "Balance guarding with construction."

## Director notes

The builders work with one hand and hold a sword in the other, and the work is done with the sound of the trumpet. Stage: a wall under construction at noon, a man with a trowel in one hand and a sword in the other, a trumpet on the wall; the work going on under arms.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_sword_and_trowel/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_sword_and_trowel/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `nehemiah_act5_a_background.svg`, `nehemiah_act5_a_middle_ground.svg`, and `nehemiah_act5_a_foreground.svg`.
- `b_core_action/` contains `nehemiah_act5_b_background.svg`, `nehemiah_act5_b_middle_ground.svg`, and `nehemiah_act5_b_foreground.svg`.
- `c_resolve/` contains `nehemiah_act5_c_background.svg`, `nehemiah_act5_c_middle_ground.svg`, and `nehemiah_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a wall under construction at noon, a man with a trowel in one hand and a sword in the other, a trumpet on the wall |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241810` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `nehemiah-sword-and-trowel`

- **File:** `../tools/shot-designer/scenes/nehemiah-sword-and-trowel.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a wall under construction at noon, a man with a trowel in one hand and a sword in the other, a trumpet on the wall
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`martial` `fortified`

