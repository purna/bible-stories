# Ch.1 · A Blameless Life

**Mood board 1 of 10** — Job (Job 1–42)

| | |
| --- | --- |
| Data file | `../data/act1_a_blameless_life.json` |
| SVG assets | `../assets/svg/act_01_a_blameless_life/` |
| 3D scene | `job-a-blameless-life` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Tend Job’s household and practice generous justice. — balance |

> "Tend Job’s household and practice generous justice."

## Director notes

Job is blameless and upright, with seven sons, three daughters, and great flocks; he offers burnt offerings for his children. Stage: a rich household at sunrise in the land of Uz, sheep and camels and tents, a father praying for his children; a golden, ordered world.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_a_blameless_life/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_a_blameless_life/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `job_act1_a_background.svg`, `job_act1_a_middle_ground.svg`, and `job_act1_a_foreground.svg`.
- `b_core_action/` contains `job_act1_b_background.svg`, `job_act1_b_middle_ground.svg`, and `job_act1_b_foreground.svg`.
- `c_resolve/` contains `job_act1_c_background.svg`, `job_act1_c_middle_ground.svg`, and `job_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a rich household at sunrise in the land of Uz, sheep and camels and tents, a father praying for his children |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `job-a-blameless-life`

- **File:** `../tools/shot-designer/scenes/job-a-blameless-life.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a rich household at sunrise in the land of Uz, sheep and camels and tents, a father praying for his children
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `pastoral`

