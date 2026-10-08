# Ch.7 · Elihu

**Mood board 7 of 10** — Job (Job 1–42)

| | |
| --- | --- |
| Data file | `../data/act7_elihu.json` |
| SVG assets | `../assets/svg/act_07_elihu/` |
| 3D scene | `job-elihu` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Listen, test claims, and resist easy scoring. — call-and-response |

> "Listen, test claims, and resist easy scoring."

## Director notes

The young Elihu burns with anger at Job's self-justification and the friends' failure; he speaks of God speaking in dreams and in pain. Stage: a circle of listeners at noon, a young man rising, his cloak bright with indignation; the older men stilled; a still, hot air.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_elihu/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_elihu/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `job_act7_a_background.svg`, `job_act7_a_middle_ground.svg`, and `job_act7_a_foreground.svg`.
- `b_core_action/` contains `job_act7_b_background.svg`, `job_act7_b_middle_ground.svg`, and `job_act7_b_foreground.svg`.
- `c_resolve/` contains `job_act7_c_background.svg`, `job_act7_c_middle_ground.svg`, and `job_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a circle of listeners at noon, a young man rising, his cloak bright with indignation |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `job-elihu`

- **File:** `../tools/shot-designer/scenes/job-elihu.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a circle of listeners at noon, a young man rising, his cloak bright with indignation
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`numinous`

