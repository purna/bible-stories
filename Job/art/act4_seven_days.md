# Ch.4 · Seven Days

**Mood board 4 of 10** — Job (Job 1–42)

| | |
| --- | --- |
| Data file | `../data/act4_seven_days.json` |
| SVG assets | `../assets/svg/act_04_seven_days/` |
| 3D scene | `job-seven-days` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Keep vigil without offering explanations. — balance |

> "Keep vigil without offering explanations."

## Director notes

Job's three friends sit with him seven days and nights, and no one speaks, for his grief is very great. Stage: a heap of ashes outside a city, four figures seated in silence, the sun crossing the sky above them; a week measured in light and shadow.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_seven_days/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_seven_days/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `job_act4_a_background.svg`, `job_act4_a_middle_ground.svg`, and `job_act4_a_foreground.svg`.
- `b_core_action/` contains `job_act4_b_background.svg`, `job_act4_b_middle_ground.svg`, and `job_act4_b_foreground.svg`.
- `c_resolve/` contains `job_act4_c_background.svg`, `job_act4_c_middle_ground.svg`, and `job_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a heap of ashes outside a city, four figures seated in silence, the sun crossing the sky above them |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1024` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `job-seven-days`

- **File:** `../tools/shot-designer/scenes/job-seven-days.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a heap of ashes outside a city, four figures seated in silence, the sun crossing the sky above them
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`urban`

