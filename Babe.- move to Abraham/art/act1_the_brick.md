# Ch.1 · The Brick

**Mood board 1 of 5** — Babel (Genesis 11:1–9)

| | |
| --- | --- |
| Data file | `../data/act1_the_brick.json` |
| SVG assets | `../assets/svg/act_01_the_brick/` |
| 3D scene | `babel-the-brick` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Mix clay and shape a brick for the tower. — interactive beat |

> "Mix clay and shape a brick for the tower."

## Director notes

The people of Shinar make brick and burn it thoroughly, building a city of fired clay on the plain. Stage: a brickfield at noon, kilns smoking, workers mixing straw and clay, moulds lining the ground; ochre dust, kiln orange, the first city rising.

## 2D SVG composition

The scene renders as three stacked SVG panels, one per beat of the
act, in `../assets/svg/act_01_the_brick/`:

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a brickfield at noon, kilns smoking, workers mixing straw and clay, moulds lining the ground |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `babel-the-brick`

- **File:** `../tools/shot-designer/scenes/babel-the-brick.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a brickfield at noon, kilns smoking, workers mixing straw and clay, moulds lining the ground
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`dusty` `urban`

