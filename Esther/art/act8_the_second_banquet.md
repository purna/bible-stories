# Ch.8 · The Second Banquet

**Mood board 8 of 10** — Esther (Esther 1–9)

| | |
| --- | --- |
| Data file | `../data/act8_the_second_banquet.json` |
| SVG assets | `../assets/svg/act_08_the_second_banquet/` |
| 3D scene | `esther-the-second-banquet` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Name the threat clearly at the decisive moment. — ordered rhythm |

> "Name the threat clearly at the decisive moment."

## Director notes

Esther names her people and her enemy; Haman pleads on the couch and is hanged on the gallows he built for Mordecai. Stage: the banquet hall again, the queen risen, the king's face in shadow, Haman dragged from the couch; a garden visible through the columns, a gallows in the dark beyond.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_08_the_second_banquet/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_08_the_second_banquet/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `esther_act8_a_background.svg`, `esther_act8_a_middle_ground.svg`, and `esther_act8_a_foreground.svg`.
- `b_core_action/` contains `esther_act8_b_background.svg`, `esther_act8_b_middle_ground.svg`, and `esther_act8_b_foreground.svg`.
- `c_resolve/` contains `esther_act8_c_background.svg`, `esther_act8_c_middle_ground.svg`, and `esther_act8_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the banquet hall again, the queen risen, the king's face in shadow, Haman dragged from the couch |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241810` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `esther-the-second-banquet`

- **File:** `../tools/shot-designer/scenes/esther-the-second-banquet.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** the banquet hall again, the queen risen, the king's face in shadow, Haman dragged from the couch
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`verdant` `regal` `festive`

