# The King's Table

**Mood board 1 of 5** — Daniel (Daniel 1–12)

| | |
| --- | --- |
| Data file | `../data/act1_table.json` |
| SVG assets | `../assets/svg/act_01_table/` |
| 3D scene | `daniel-table` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Build a respectful ten-day food test. — assembly |

> "Babylon, 605 BCE. The young men of Judah had been taken far from home."

## Director notes

Daniel and his friends, carried to Babylon, refuse the king's food and ask for ten days of vegetables and water. Stage: a Babylonian court cafeteria in torchlight, trays of rich food beside a humble plate of pulses; four resolute youths; jewelled walls, shadowed arcades.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_table/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_table/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `daniel_act1_a_background.svg`, `daniel_act1_a_middle_ground.svg`, and `daniel_act1_a_foreground.svg`.
- `b_core_action/` contains `daniel_act1_b_background.svg`, `daniel_act1_b_middle_ground.svg`, and `daniel_act1_b_foreground.svg`.
- `c_resolve/` contains `daniel_act1_c_background.svg`, `daniel_act1_c_middle_ground.svg`, and `daniel_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a Babylonian court cafeteria in torchlight, trays of rich food beside a humble plate of pulses |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#5c4033` (deep) → `#2b1d0c` (dark) → `#1a0e06` (dark)
- **Vignette:** radial gradient centred at 30% 20% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `daniel-table`

- **File:** `../tools/shot-designer/scenes/daniel-table.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a Babylonian court cafeteria in torchlight, trays of rich food beside a humble plate of pulses
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `regal`

