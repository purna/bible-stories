# Ch.10 · Moriah

**Mood board 10 of 10** — Abraham (Genesis 12–22)

| | |
| --- | --- |
| Data file | `../data/act10_moriah.json` |
| SVG assets | `../assets/svg/act_10_moriah/` |
| 3D scene | `abraham-moriah` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Climb, gather wood, and respond to the provided ram. — pathfinding |

## Director notes

God tests Abraham: take Isaac to Moriah and offer him as a burnt offering; at the last moment a ram is caught in the thicket. Stage: a bare stone mountain at dawn, wood stacked on Isaac's back, the altar of unhewn stone, the angel's hand staying the knife; a ram in a nearby thorn bush, cold gold light.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_10_moriah/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_10_moriah/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `abraham_act10_a_background.svg`, `abraham_act10_a_middle_ground.svg`, and `abraham_act10_a_foreground.svg`.
- `b_core_action/` contains `abraham_act10_b_background.svg`, `abraham_act10_b_middle_ground.svg`, and `abraham_act10_b_foreground.svg`.
- `c_resolve/` contains `abraham_act10_c_background.svg`, `abraham_act10_c_middle_ground.svg`, and `abraham_act10_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a bare stone mountain at dawn, wood stacked on Isaac's back, the altar of unhewn stone, the angel's hand staying the knife |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** the story default palette
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `abraham-moriah`

- **File:** `../tools/shot-designer/scenes/abraham-moriah.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a bare stone mountain at dawn, wood stacked on Isaac's back, the altar of unhewn stone, the angel's hand staying the knife
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `sacred` `numinous` `lofty` `megalithic`

