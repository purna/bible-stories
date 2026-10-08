# The Widow of Zarephath

**Mood board 2 of 7** — Eiljah (1 Kings 17–19, 21; 2 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act2_widow.json` |
| SVG assets | `../assets/svg/act_02_widow/` |
| 3D scene | `eiljah-widow` in `../tools/shot-designer/scenes/` |
| Particle mode | dream — dream |
| Game beat | Measure flour and oil without exhausting either. — assembly |

> "At the town gate Elijah found a widow gathering sticks. She was preparing what she believed would be the last meal for herself and her son."

## Director notes

At Zarephath a widow shares her last flour and oil, and Elijah keeps her jar and bowl from emptying through the drought. Stage: a tiny Phoenician kitchen, a handful of flour, a cruse of oil, a boy gathering sticks; a miracle of measure in a windowless room, one lamp.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_widow/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_widow/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `elijah_act2_a_background.svg`, `elijah_act2_a_middle_ground.svg`, and `elijah_act2_a_foreground.svg`.
- `b_core_action/` contains `elijah_act2_b_background.svg`, `elijah_act2_b_middle_ground.svg`, and `elijah_act2_b_foreground.svg`.
- `c_resolve/` contains `elijah_act2_c_background.svg`, `elijah_act2_c_middle_ground.svg`, and `elijah_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a tiny Phoenician kitchen, a handful of flour, a cruse of oil, a boy gathering sticks |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#c6a776` (light) → `#8c6c4f` (mid) → `#594236` (deep)
- **Vignette:** radial gradient centred at 50% 20% — the eye lands here first
- **Ambience:** dream particles drift across the panels (dream)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `eiljah-widow`

- **File:** `../tools/shot-designer/scenes/eiljah-widow.js`, registered in `scenes/manifest.json`
- **Lighting:** dream — dream; hemisphere + key light tuned to the 2D palette
- **Set:** a tiny Phoenician kitchen, a handful of flour, a cruse of oil, a boy gathering sticks
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood



