# Ch.8 · Obed

**Mood board 8 of 8** — Ruth (Ruth 1–4)

| | |
| --- | --- |
| Data file | `../data/act8_obed.json` |
| SVG assets | `../assets/svg/act_08_obed/` |
| 3D scene | `ruth-obed` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Build the family line toward David. — assembly |

> "The women of the town blessed Naomi and blessed the child. They named him Obed."

## Director notes

The women say: a son has been born to Naomi, and they name him Obed, the father of Jesse, the father of David. Stage: a house at dawn, a newborn child, a grandmother holding him, the women of the neighbourhood at the door; a line beginning.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_08_obed/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_08_obed/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `ruth_act8_a_background.svg`, `ruth_act8_a_middle_ground.svg`, and `ruth_act8_a_foreground.svg`.
- `b_core_action/` contains `ruth_act8_b_background.svg`, `ruth_act8_b_middle_ground.svg`, and `ruth_act8_b_foreground.svg`.
- `c_resolve/` contains `ruth_act8_c_background.svg`, `ruth_act8_c_middle_ground.svg`, and `ruth_act8_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a house at dawn, a newborn child, a grandmother holding him, the women of the neighbourhood at the door |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#d8b888` (light) → `#2a1e10` (dark)
- **Vignette:** radial gradient centred at 50% 25% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `ruth-obed`

- **File:** `../tools/shot-designer/scenes/ruth-obed.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a house at dawn, a newborn child, a grandmother holding him, the women of the neighbourhood at the door
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `tender`

