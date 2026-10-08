# Ch.4 · The Gathering

**Mood board 4 of 10** — Noah (Genesis 6–9)

| | |
| --- | --- |
| Data file | `../data/act4_gathering.json` |
| SVG assets | `../assets/svg/act_04_gathering/` |
| 3D scene | `noah-gathering` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Pair animals and stock each pen. — gather-with-care |

> "And then something impossible happened. The animals came to Noah."

## Director notes

The animals come to Noah two by two, clean and unclean, and he brings them into the ark. Stage: the ark door at dawn, a line of creatures coming up the ramp, birds and beasts, a man and his sons guiding them; the world's parade, arriving.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_gathering/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_gathering/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `noah_act4_a_background.svg`, `noah_act4_a_middle_ground.svg`, and `noah_act4_a_foreground.svg`.
- `b_core_action/` contains `noah_act4_b_background.svg`, `noah_act4_b_middle_ground.svg`, and `noah_act4_b_foreground.svg`.
- `c_resolve/` contains `noah_act4_c_background.svg`, `noah_act4_c_middle_ground.svg`, and `noah_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the ark door at dawn, a line of creatures coming up the ramp, birds and beasts, a man and his sons guiding them |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2e10` (dark) → `#0d1808` (dark) → `#060a04` (dark)
- **Vignette:** radial gradient centred at 60% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `noah-gathering`

- **File:** `../tools/shot-designer/scenes/noah-gathering.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** the ark door at dawn, a line of creatures coming up the ramp, birds and beasts, a man and his sons guiding them
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light`

