# Ch.8 · Sodom and Gomorrah

**Mood board 8 of 10** — Abraham (Genesis 12–22)

| | |
| --- | --- |
| Data file | `../data/act8_sodom_and_gomorrah.json` |
| SVG assets | `../assets/svg/act_08_sodom_and_gomorrah/` |
| 3D scene | `abraham-sodom-and-gomorrah` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Guide Lot’s household away without looking back. — pathfinding |

## Director notes

Abram bargains for the cities and Lot escapes as fire and brimstone fall; Lot's wife looks back and becomes a pillar of salt. Stage: a smoking plain at first light, zoar in a valley below, a faint salt-white silhouette on the ridge; Abram on a height watching the smoke rise like a furnace.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_08_sodom_and_gomorrah/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_08_sodom_and_gomorrah/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `abraham_act8_a_background.svg`, `abraham_act8_a_middle_ground.svg`, and `abraham_act8_a_foreground.svg`.
- `b_core_action/` contains `abraham_act8_b_background.svg`, `abraham_act8_b_middle_ground.svg`, and `abraham_act8_b_foreground.svg`.
- `c_resolve/` contains `abraham_act8_c_background.svg`, `abraham_act8_c_middle_ground.svg`, and `abraham_act8_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a smoking plain at first light, zoar in a valley below, a faint salt-white silhouette on the ridge |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** the story default palette
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `abraham-sodom-and-gomorrah`

- **File:** `../tools/shot-designer/scenes/abraham-sodom-and-gomorrah.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a smoking plain at first light, zoar in a valley below, a faint salt-white silhouette on the ridge
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`firelight`

