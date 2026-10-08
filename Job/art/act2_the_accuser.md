# Ch.2 · The Accuser

**Mood board 2 of 10** — Job (Job 1–42)

| | |
| --- | --- |
| Data file | `../data/act2_the_accuser.json` |
| SVG assets | `../assets/svg/act_02_the_accuser/` |
| 3D scene | `job-the-accuser` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Observe the heavenly challenge without controlling it. — ordered rhythm |

> "Observe the heavenly challenge without controlling it."

## Director notes

In the heavenly court the Lord asks Satan about Job; the adversary asks for permission to test him, and the hand of loss begins. Stage: a cosmic court, a throne of light and a figure in shadow, the earth in miniature below; a single day that will undo everything.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_the_accuser/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_the_accuser/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `job_act2_a_background.svg`, `job_act2_a_middle_ground.svg`, and `job_act2_a_foreground.svg`.
- `b_core_action/` contains `job_act2_b_background.svg`, `job_act2_b_middle_ground.svg`, and `job_act2_b_foreground.svg`.
- `c_resolve/` contains `job_act2_c_background.svg`, `job_act2_c_middle_ground.svg`, and `job_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a cosmic court, a throne of light and a figure in shadow, the earth in miniature below |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `job-the-accuser`

- **File:** `../tools/shot-designer/scenes/job-the-accuser.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a cosmic court, a throne of light and a figure in shadow, the earth in miniature below
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`regal`

