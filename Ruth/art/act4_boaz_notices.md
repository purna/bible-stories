# Ch.4 · Boaz Notices

**Mood board 4 of 8** — Ruth (Ruth 1–4)

| | |
| --- | --- |
| Data file | `../data/act4_boaz_notices.json` |
| SVG assets | `../assets/svg/act_04_boaz_notices/` |
| 3D scene | `ruth-boaz-notices` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Deliver water and protection instructions to the workers. — gather-with-care |

> "Boaz arrived from Bethlehem and greeted the harvesters. His eyes fell upon the woman gleaning among the sheaves."

## Director notes

Boaz speaks to Ruth and tells her to stay with his servants, and praises her for all she has done for Naomi. Stage: a field at evening, a man in the shade of a wall, a woman at his feet; the kindness of a landowner, a blessing being spoken.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_boaz_notices/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_boaz_notices/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `ruth_act4_a_background.svg`, `ruth_act4_a_middle_ground.svg`, and `ruth_act4_a_foreground.svg`.
- `b_core_action/` contains `ruth_act4_b_background.svg`, `ruth_act4_b_middle_ground.svg`, and `ruth_act4_b_foreground.svg`.
- `c_resolve/` contains `ruth_act4_c_background.svg`, `ruth_act4_c_middle_ground.svg`, and `ruth_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a field at evening, a man in the shade of a wall, a woman at his feet |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#4a6888` (deep) → `#1a2838` (dark)
- **Vignette:** radial gradient centred at 50% 25% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `ruth-boaz-notices`

- **File:** `../tools/shot-designer/scenes/ruth-boaz-notices.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a field at evening, a man in the shade of a wall, a woman at his feet
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`lamplight` `pastoral` `fortified`

