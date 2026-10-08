# The Garden

**Mood board 2 of 6** — Adam (Genesis 1–5)

| | |
| --- | --- |
| Data file | `../data/act2_garden.json` |
| SVG assets | `../assets/svg/act_02_garden/` |
| 3D scene | `adam-garden` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Tend the garden by planting seeds and pulling weeds before they spread. — tend-garden |

> "The Lord God formed a man from the dust of the ground, and breathed into his nostrils the breath of life. And the man became a living being."

## Director notes

God plants Eden in the east and sets the man among every tree pleasant to the eye, with the river dividing into four heads. Stage: a lush riverside garden, pomegranate and fig, gold and green; the man walking among the trees, lion and lamb at the water's edge; soft diffused light through leaves.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_garden/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_garden/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `adam_act2_a_background.svg`, `adam_act2_a_middle_ground.svg`, and `adam_act2_a_foreground.svg`.
- `b_core_action/` contains `adam_act2_b_background.svg`, `adam_act2_b_middle_ground.svg`, and `adam_act2_b_foreground.svg`.
- `c_resolve/` contains `adam_act2_c_background.svg`, `adam_act2_c_middle_ground.svg`, and `adam_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a lush riverside garden, pomegranate and fig, gold and green |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2b1d0c` (dark) → `#1a0e06` (dark) → `#0d0705` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `adam-garden`

- **File:** `../tools/shot-designer/scenes/adam-garden.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a lush riverside garden, pomegranate and fig, gold and green
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `riverine` `verdant` `numinous`

