# Ch.10 · Reform

**Mood board 10 of 10** — Nehemiah (Nehemiah 1–13)

| | |
| --- | --- |
| Data file | `../data/act10_reform.json` |
| SVG assets | `../assets/svg/act_10_reform/` |
| 3D scene | `nehemiah-reform` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Inspect storerooms and restore shared commitments. — balance |

> "Inspect storerooms and restore shared commitments."

## Director notes

Nehemiah reforms the city: the Sabbath is kept, the tithes are brought in, and the people are counted. Stage: a city gate at the close of the day, a guard at the gate on the Sabbath, a storehouse for the tithes, a register of the people; the work of a city being made holy.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_10_reform/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_10_reform/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `nehemiah_act10_a_background.svg`, `nehemiah_act10_a_middle_ground.svg`, and `nehemiah_act10_a_foreground.svg`.
- `b_core_action/` contains `nehemiah_act10_b_background.svg`, `nehemiah_act10_b_middle_ground.svg`, and `nehemiah_act10_b_foreground.svg`.
- `c_resolve/` contains `nehemiah_act10_c_background.svg`, `nehemiah_act10_c_middle_ground.svg`, and `nehemiah_act10_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a city gate at the close of the day, a guard at the gate on the Sabbath, a storehouse for the tithes, a register of the people |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `nehemiah-reform`

- **File:** `../tools/shot-designer/scenes/nehemiah-reform.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a city gate at the close of the day, a guard at the gate on the Sabbath, a storehouse for the tithes, a register of the people
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`threshold` `urban`

