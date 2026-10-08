# Ch.3 · Gleaning

**Mood board 3 of 8** — Ruth (Ruth 1–4)

| | |
| --- | --- |
| Data file | `../data/act3_gleaning.json` |
| SVG assets | `../assets/svg/act_03_gleaning/` |
| 3D scene | `ruth-gleaning` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Collect only grain left for gleaners. — gather-with-care |

> "When they arrived in Bethlehem, the barley harvest had just begun. Ruth spoke to Naomi with a plan."

## Director notes

Ruth gathers behind the reapers in the field of Boaz, and he lets her glean among the sheaves and drink from the water. Stage: a barley field at noon, a reaper's line, a young woman gathering, the owner watching from the shade; grain, kindness, the first meeting.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_gleaning/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_gleaning/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `ruth_act3_a_background.svg`, `ruth_act3_a_middle_ground.svg`, and `ruth_act3_a_foreground.svg`.
- `b_core_action/` contains `ruth_act3_b_background.svg`, `ruth_act3_b_middle_ground.svg`, and `ruth_act3_b_foreground.svg`.
- `c_resolve/` contains `ruth_act3_c_background.svg`, `ruth_act3_c_middle_ground.svg`, and `ruth_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a barley field at noon, a reaper's line, a young woman gathering, the owner watching from the shade |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#8a9a48` (mid) → `#2a3818` (dark)
- **Vignette:** radial gradient centred at 50% 25% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `ruth-gleaning`

- **File:** `../tools/shot-designer/scenes/ruth-gleaning.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a barley field at noon, a reaper's line, a young woman gathering, the owner watching from the shade
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `pastoral` `harvest`

