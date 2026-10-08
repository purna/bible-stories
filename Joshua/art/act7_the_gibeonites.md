# Ch.7 · The Gibeonites

**Mood board 7 of 10** — Joshua (Joshua 1–24)

| | |
| --- | --- |
| Data file | `../data/act7_the_gibeonites.json` |
| SVG assets | `../assets/svg/act_07_the_gibeonites/` |
| 3D scene | `joshua-the-gibeonites` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Inspect the worn supplies and face a rushed oath. — observation |

> "Inspect the worn supplies and face a rushed oath."

## Director notes

The Gibeonites come in worn clothes and dry bread, pretending to be from afar, and a covenant is made. Stage: a camp at noon, dusty travellers with patched sandals and dry bread, a treaty sealed; a leader's oath, a lesson in haste.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_the_gibeonites/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_the_gibeonites/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joshua_act7_a_background.svg`, `joshua_act7_a_middle_ground.svg`, and `joshua_act7_a_foreground.svg`.
- `b_core_action/` contains `joshua_act7_b_background.svg`, `joshua_act7_b_middle_ground.svg`, and `joshua_act7_b_foreground.svg`.
- `c_resolve/` contains `joshua_act7_c_background.svg`, `joshua_act7_c_middle_ground.svg`, and `joshua_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a camp at noon, dusty travellers with patched sandals and dry bread, a treaty sealed |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joshua-the-gibeonites`

- **File:** `../tools/shot-designer/scenes/joshua-the-gibeonites.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a camp at noon, dusty travellers with patched sandals and dry bread, a treaty sealed
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`humble` `military-camp` `solemn`

