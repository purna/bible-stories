# Ch.5 · Job Speaks

**Mood board 5 of 10** — Job (Job 1–42)

| | |
| --- | --- |
| Data file | `../data/act5_job_speaks.json` |
| SVG assets | `../assets/svg/act_05_job_speaks/` |
| 3D scene | `job-job-speaks` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Build an honest lament from grief and protest. — assembly |

> "Build an honest lament from grief and protest."

## Director notes

Job opens his mouth and curses the day of his birth, and calls for the grave to come. Stage: a man on a dunghill at midnight, his body scarred, the first words of a long lament; the stars wheeling overhead; a voice rising into the dark.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_job_speaks/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_job_speaks/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `job_act5_a_background.svg`, `job_act5_a_middle_ground.svg`, and `job_act5_a_foreground.svg`.
- `b_core_action/` contains `job_act5_b_background.svg`, `job_act5_b_middle_ground.svg`, and `job_act5_b_foreground.svg`.
- `c_resolve/` contains `job_act5_c_background.svg`, `job_act5_c_middle_ground.svg`, and `job_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a man on a dunghill at midnight, his body scarred, the first words of a long lament |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241810` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `job-job-speaks`

- **File:** `../tools/shot-designer/scenes/job-job-speaks.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a man on a dunghill at midnight, his body scarred, the first words of a long lament
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `funereal`

