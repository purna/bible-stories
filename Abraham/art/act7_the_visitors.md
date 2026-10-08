# Ch.7 · The Visitors

**Mood board 7 of 10** — Abraham (Genesis 12–22)

| | |
| --- | --- |
| Data file | `../data/act7_the_visitors.json` |
| SVG assets | `../assets/svg/act_07_the_visitors/` |
| 3D scene | `abraham-the-visitors` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Prepare hospitality before the guests depart. — gather-with-care |

## Director notes

Three men appear by the oaks of Mamre; Abram runs to offer water, bread, curds and a dressed calf, and hears the promise of a son. Stage: a great tent door in noon light, Abram hastening with a bowl, Sarah listening from inside; three figures under a scorched oak; hospitality rendered in clay and linen.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_the_visitors/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_the_visitors/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `abraham_act7_a_background.svg`, `abraham_act7_a_middle_ground.svg`, and `abraham_act7_a_foreground.svg`.
- `b_core_action/` contains `abraham_act7_b_background.svg`, `abraham_act7_b_middle_ground.svg`, and `abraham_act7_b_foreground.svg`.
- `c_resolve/` contains `abraham_act7_c_background.svg`, `abraham_act7_c_middle_ground.svg`, and `abraham_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a great tent door in noon light, Abram hastening with a bowl, Sarah listening from inside |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** the story default palette
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `abraham-the-visitors`

- **File:** `../tools/shot-designer/scenes/abraham-the-visitors.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a great tent door in noon light, Abram hastening with a bowl, Sarah listening from inside
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `humble` `nomadic` `aspirational`

