# Ch.7 · Given Back

**Mood board 7 of 8** — Hannah (1 Samuel 1–2)

| | |
| --- | --- |
| Data file | `../data/act7_given_back.json` |
| SVG assets | `../assets/svg/act_07_given_back/` |
| 3D scene | `hannah-given-back` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Bring Samuel to serve at Shiloh. — ordered rhythm |

> "Bring Samuel to serve at Shiloh."

## Director notes

Hannah and Elkanah bring the weaned child to the temple and lend him to the Lord for life. Stage: the tabernacle courtyard at midday, the small boy with his mother, Eli receiving him; a child walking into the holy shadow; a vow made visible.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_given_back/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_given_back/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `hannah_act7_a_background.svg`, `hannah_act7_a_middle_ground.svg`, and `hannah_act7_a_foreground.svg`.
- `b_core_action/` contains `hannah_act7_b_background.svg`, `hannah_act7_b_middle_ground.svg`, and `hannah_act7_b_foreground.svg`.
- `c_resolve/` contains `hannah_act7_c_background.svg`, `hannah_act7_c_middle_ground.svg`, and `hannah_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the tabernacle courtyard at midday, the small boy with his mother, Eli receiving him |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `hannah-given-back`

- **File:** `../tools/shot-designer/scenes/hannah-given-back.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** the tabernacle courtyard at midday, the small boy with his mother, Eli receiving him
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`sacred` `tender` `maternal`

