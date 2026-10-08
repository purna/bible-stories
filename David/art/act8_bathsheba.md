# Ch.8 · Bathsheba and Uriah

**Mood board 8 of 12** — David (1 Samuel 16 – 1 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act8_bathsheba.json` |
| SVG assets | `../assets/svg/act_08_bathsheba/` |
| 3D scene | `david-bathsheba` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Confront the irreversible harm rather than hiding it. — ordered rhythm |

> "In the spring, when kings go out to battle, David stayed in Jerusalem and walked on his roof. From there he saw a woman bathing, and he sent to learn who she was."

## Director notes

From his roof David sees Bathsheba bathing; the deed that follows brings Uriah to the front line and judgment on the house. Stage: a royal rooftop at evening, a distant figure at her bath below, a sealed letter passing between hands; purple dusk, a heavy stillness.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_08_bathsheba/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_08_bathsheba/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `david_act8_a_background.svg`, `david_act8_a_middle_ground.svg`, and `david_act8_a_foreground.svg`.
- `b_core_action/` contains `david_act8_b_background.svg`, `david_act8_b_middle_ground.svg`, and `david_act8_b_foreground.svg`.
- `c_resolve/` contains `david_act8_c_background.svg`, `david_act8_c_middle_ground.svg`, and `david_act8_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a royal rooftop at evening, a distant figure at her bath below, a sealed letter passing between hands |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a0e08` (dark) → `#0a0604` (dark) → `#040202` (dark)
- **Vignette:** radial gradient centred at 50% 60% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `david-bathsheba`

- **File:** `../tools/shot-designer/scenes/david-bathsheba.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a royal rooftop at evening, a distant figure at her bath below, a sealed letter passing between hands
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`golden-hour` `lamplight`

