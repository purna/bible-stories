# Ch.8 · Out of the Whirlwind

**Mood board 8 of 10** — Job (Job 1–42)

| | |
| --- | --- |
| Data file | `../data/act8_out_of_the_whirlwind.json` |
| SVG assets | `../assets/svg/act_08_out_of_the_whirlwind/` |
| 3D scene | `job-out-of-the-whirlwind` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Explore questions about creation. — ordered rhythm |

> "Explore questions about creation."

## Director notes

The Lord answers Job out of the whirlwind: where were you when I laid the earth's foundation? Stage: a storm on the horizon, a whirlwind forming, a figure in the dark at its centre; the heavens opening, the earth trembling; a question no one can answer.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_08_out_of_the_whirlwind/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_08_out_of_the_whirlwind/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `job_act8_a_background.svg`, `job_act8_a_middle_ground.svg`, and `job_act8_a_foreground.svg`.
- `b_core_action/` contains `job_act8_b_background.svg`, `job_act8_b_middle_ground.svg`, and `job_act8_b_foreground.svg`.
- `c_resolve/` contains `job_act8_c_background.svg`, `job_act8_c_middle_ground.svg`, and `job_act8_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a storm on the horizon, a whirlwind forming, a figure in the dark at its centre |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a0e08` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `job-out-of-the-whirlwind`

- **File:** `../tools/shot-designer/scenes/job-out-of-the-whirlwind.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a storm on the horizon, a whirlwind forming, a figure in the dark at its centre
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`tempest`

