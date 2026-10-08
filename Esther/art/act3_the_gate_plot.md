# Ch.3 · The Gate Plot

**Mood board 3 of 10** — Esther (Esther 1–9)

| | |
| --- | --- |
| Data file | `../data/act3_the_gate_plot.json` |
| SVG assets | `../assets/svg/act_03_the_gate_plot/` |
| 3D scene | `esther-the-gate-plot` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Carry Mordecai’s warning into the royal record. — pathfinding |

> "Carry Mordecai’s warning into the royal record."

## Director notes

Mordecai overhears two eunuchs plotting against the king and saves him; the deed is written in the royal record. Stage: the king's gate at midday, a figure in the shadow of a column, scribes at work; a whispered warning; a narrow, tense street.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_the_gate_plot/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_the_gate_plot/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `esther_act3_a_background.svg`, `esther_act3_a_middle_ground.svg`, and `esther_act3_a_foreground.svg`.
- `b_core_action/` contains `esther_act3_b_background.svg`, `esther_act3_b_middle_ground.svg`, and `esther_act3_b_foreground.svg`.
- `c_resolve/` contains `esther_act3_c_background.svg`, `esther_act3_c_middle_ground.svg`, and `esther_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the king's gate at midday, a figure in the shadow of a column, scribes at work |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `esther-the-gate-plot`

- **File:** `../tools/shot-designer/scenes/esther-the-gate-plot.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** the king's gate at midday, a figure in the shadow of a column, scribes at work
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`regal` `threshold`

