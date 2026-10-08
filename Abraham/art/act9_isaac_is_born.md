# Ch.9 · Isaac Is Born

**Mood board 9 of 10** — Abraham (Genesis 12–22)

| | |
| --- | --- |
| Data file | `../data/act9_isaac_is_born.json` |
| SVG assets | `../assets/svg/act_09_isaac_is_born/` |
| 3D scene | `abraham-isaac-is-born` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Assemble a celebration tent. — assembly |

## Director notes

In old age Sarah bears Isaac — laughter — and the household feasts at his weaning. Stage: a shaded tent interior with woven hangings, a sleeping infant, Sarah's astonished joy; warm lamp light, the sound of celebration carried outside.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_09_isaac_is_born/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_09_isaac_is_born/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `abraham_act9_a_background.svg`, `abraham_act9_a_middle_ground.svg`, and `abraham_act9_a_foreground.svg`.
- `b_core_action/` contains `abraham_act9_b_background.svg`, `abraham_act9_b_middle_ground.svg`, and `abraham_act9_b_foreground.svg`.
- `c_resolve/` contains `abraham_act9_c_background.svg`, `abraham_act9_c_middle_ground.svg`, and `abraham_act9_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a shaded tent interior with woven hangings, a sleeping infant, Sarah's astonished joy |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** the story default palette
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `abraham-isaac-is-born`

- **File:** `../tools/shot-designer/scenes/abraham-isaac-is-born.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a shaded tent interior with woven hangings, a sleeping infant, Sarah's astonished joy
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nomadic` `tender`

