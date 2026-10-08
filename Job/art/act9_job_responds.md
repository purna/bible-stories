# Ch.9 · Job Responds

**Mood board 9 of 10** — Job (Job 1–42)

| | |
| --- | --- |
| Data file | `../data/act9_job_responds.json` |
| SVG assets | `../assets/svg/act_09_job_responds/` |
| 3D scene | `job-job-responds` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Release the demand to master every answer. — ordered rhythm |

> "Release the demand to master every answer."

## Director notes

Job answers the Lord: I had heard of you by the hearing of the ear, but now my eye sees you; therefore I repent in dust and ashes. Stage: a man kneeling as the storm breaks, his hand over his mouth, the whirlwind withdrawing; the first rain in years; a quiet, broken peace.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_09_job_responds/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_09_job_responds/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `job_act9_a_background.svg`, `job_act9_a_middle_ground.svg`, and `job_act9_a_foreground.svg`.
- `b_core_action/` contains `job_act9_b_background.svg`, `job_act9_b_middle_ground.svg`, and `job_act9_b_foreground.svg`.
- `c_resolve/` contains `job_act9_c_background.svg`, `job_act9_c_middle_ground.svg`, and `job_act9_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a man kneeling as the storm breaks, his hand over his mouth, the whirlwind withdrawing |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `job-job-responds`

- **File:** `../tools/shot-designer/scenes/job-job-responds.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a man kneeling as the storm breaks, his hand over his mouth, the whirlwind withdrawing
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`tempest` `soaked` `dusty`

