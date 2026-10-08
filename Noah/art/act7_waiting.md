# Ch.7 · The Long Wait

**Mood board 7 of 10** — Noah (Genesis 6–9)

| | |
| --- | --- |
| Data file | `../data/act7_waiting.json` |
| SVG assets | `../assets/svg/act_07_waiting/` |
| 3D scene | `noah-waiting` in `../tools/shot-designer/scenes/` |
| Particle mode | flood — flood |
| Game beat | Send raven and doves at the right intervals. — ordered rhythm |

> "The ark came to rest on the mountains of Ararat. Still no land in sight."

## Director notes

Noah sends out a raven, then a dove; the dove returns with an olive leaf, and the waters are drying. Stage: the ark on a quiet sea at dawn, a dove returning to the window, a branch of olive in its beak; the first sign of the world coming back.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_waiting/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_waiting/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `noah_act7_a_background.svg`, `noah_act7_a_middle_ground.svg`, and `noah_act7_a_foreground.svg`.
- `b_core_action/` contains `noah_act7_b_background.svg`, `noah_act7_b_middle_ground.svg`, and `noah_act7_b_foreground.svg`.
- `c_resolve/` contains `noah_act7_c_background.svg`, `noah_act7_c_middle_ground.svg`, and `noah_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the ark on a quiet sea at dawn, a dove returning to the window, a branch of olive in its beak |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#0c1428` (dark) → `#060a18` (dark) → `#020408` (dark)
- **Vignette:** radial gradient centred at 50% 40% — the eye lands here first
- **Ambience:** flood particles drift across the panels (flood)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `noah-waiting`

- **File:** `../tools/shot-designer/scenes/noah-waiting.js`, registered in `scenes/manifest.json`
- **Lighting:** flood — flood; hemisphere + key light tuned to the 2D palette
- **Set:** the ark on a quiet sea at dawn, a dove returning to the window, a branch of olive in its beak
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nautical` `first-light`

