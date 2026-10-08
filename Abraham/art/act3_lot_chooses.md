# Ch.3 · Lot Chooses

**Mood board 3 of 10** — Abraham (Genesis 12–22)

| | |
| --- | --- |
| Data file | `../data/act3_lot_chooses.json` |
| SVG assets | `../assets/svg/act_03_lot_chooses/` |
| 3D scene | `abraham-lot-chooses` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Survey the land and give Lot first choice. — watch-and-move |

## Director notes

Abram and Lot part ways as their herdsmen quarrel; Lot lifts his eyes to the well-watered Jordan plain and takes it. Stage: a wide hilltop overlooking the green Jordan valley and the distant soot of Sodom; Abram generous and calm, Lot eager; midday glare on the plain, shade on the heights.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_lot_chooses/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_lot_chooses/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `abraham_act3_a_background.svg`, `abraham_act3_a_middle_ground.svg`, and `abraham_act3_a_foreground.svg`.
- `b_core_action/` contains `abraham_act3_b_background.svg`, `abraham_act3_b_middle_ground.svg`, and `abraham_act3_b_foreground.svg`.
- `c_resolve/` contains `abraham_act3_c_background.svg`, `abraham_act3_c_middle_ground.svg`, and `abraham_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a wide hilltop overlooking the green Jordan valley and the distant soot of Sodom |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** the story default palette
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `abraham-lot-chooses`

- **File:** `../tools/shot-designer/scenes/abraham-lot-chooses.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a wide hilltop overlooking the green Jordan valley and the distant soot of Sodom
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`riverine`

