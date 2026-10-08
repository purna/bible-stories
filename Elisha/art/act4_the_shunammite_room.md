# Ch.4 · The Shunammite Room

**Mood board 4 of 9** — Elisha (1 Kings 19; 2 Kings 2–7)

| | |
| --- | --- |
| Data file | `../data/act4_the_shunammite_room.json` |
| SVG assets | `../assets/svg/act_04_the_shunammite_room/` |
| 3D scene | `elisha-the-shunammite-room` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Arrange a simple guest room. — ordered rhythm |

> "Arrange a simple guest room."

## Director notes

A great woman of Shunhem builds a chamber for Elisha with a bed, table, stool and lampstand. Stage: a rooftop guest chamber, whitewashed walls, a simple bed and lamp, the woman looking up as the prophet arrives; noon light through a lattice.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_the_shunammite_room/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_the_shunammite_room/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `elisha_act4_a_background.svg`, `elisha_act4_a_middle_ground.svg`, and `elisha_act4_a_foreground.svg`.
- `b_core_action/` contains `elisha_act4_b_background.svg`, `elisha_act4_b_middle_ground.svg`, and `elisha_act4_b_foreground.svg`.
- `c_resolve/` contains `elisha_act4_c_background.svg`, `elisha_act4_c_middle_ground.svg`, and `elisha_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a rooftop guest chamber, whitewashed walls, a simple bed and lamp, the woman looking up as the prophet arrives |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1024` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `elisha-the-shunammite-room`

- **File:** `../tools/shot-designer/scenes/elisha-the-shunammite-room.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a rooftop guest chamber, whitewashed walls, a simple bed and lamp, the woman looking up as the prophet arrives
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`prophetic`

