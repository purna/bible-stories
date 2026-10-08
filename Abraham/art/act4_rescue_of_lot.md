# Ch.4 · Rescue of Lot

**Mood board 4 of 10** — Abraham (Genesis 12–22)

| | |
| --- | --- |
| Data file | `../data/act4_rescue_of_lot.json` |
| SVG assets | `../assets/svg/act_04_rescue_of_lot/` |
| 3D scene | `abraham-rescue-of-lot` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Plan a fast night rescue without taking spoil. — watch-and-move |

## Director notes

Four eastern kings overrun Sodom and take Lot captive; Abram arms his trained servants and pursues by night, routing the invaders and refusing any spoil. Stage: torchlit desert march, dust and silhouettes, a swift dawn battle north of Damascus; Abram refusing the king of Sodom's offer on a moonlit plain.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_rescue_of_lot/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_rescue_of_lot/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `abraham_act4_a_background.svg`, `abraham_act4_a_middle_ground.svg`, and `abraham_act4_a_foreground.svg`.
- `b_core_action/` contains `abraham_act4_b_background.svg`, `abraham_act4_b_middle_ground.svg`, and `abraham_act4_b_foreground.svg`.
- `c_resolve/` contains `abraham_act4_c_background.svg`, `abraham_act4_c_middle_ground.svg`, and `abraham_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: torchlit desert march, dust and silhouettes, a swift dawn battle north of Damascus |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** the story default palette
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `abraham-rescue-of-lot`

- **File:** `../tools/shot-designer/scenes/abraham-rescue-of-lot.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** torchlit desert march, dust and silhouettes, a swift dawn battle north of Damascus
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `first-light` `arid` `dusty` `battlefield` `regal`

