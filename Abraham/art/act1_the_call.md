# Ch.1 · The Call

**Mood board 1 of 10** — Abraham (Genesis 12–22)

| | |
| --- | --- |
| Data file | `../data/act1_the_call.json` |
| SVG assets | `../assets/svg/act_01_the_call/` |
| 3D scene | `abraham-the-call` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Follow the road markers out of Haran. — pathfinding |

## Director notes

Abram stands at the edge of Haran as a divine voice summons him toward an unseen land. Stage: a crowded Chaldean crossroads at dawn, clay houses and caravan tracks; Abram, Sarai and their goods mid-departure; long shadows, dust in the air, the road opening empty toward the horizon.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_the_call/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_the_call/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `abraham_act1_a_background.svg`, `abraham_act1_a_middle_ground.svg`, and `abraham_act1_a_foreground.svg`.
- `b_core_action/` contains `abraham_act1_b_background.svg`, `abraham_act1_b_middle_ground.svg`, and `abraham_act1_b_foreground.svg`.
- `c_resolve/` contains `abraham_act1_c_background.svg`, `abraham_act1_c_middle_ground.svg`, and `abraham_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a crowded Chaldean crossroads at dawn, clay houses and caravan tracks |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** the story default palette
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `abraham-the-call`

- **File:** `../tools/shot-designer/scenes/abraham-the-call.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a crowded Chaldean crossroads at dawn, clay houses and caravan tracks
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `dusty` `peripatetic`

