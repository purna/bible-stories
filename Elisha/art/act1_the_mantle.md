# Ch.1 · The Mantle

**Mood board 1 of 9** — Elisha (1 Kings 19; 2 Kings 2–7)

| | |
| --- | --- |
| Data file | `../data/act1_the_mantle.json` |
| SVG assets | `../assets/svg/act_01_the_mantle/` |
| 3D scene | `elisha-the-mantle` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Leave the plough and follow Elijah. — pathfinding |

> "Leave the plough and follow Elijah."

## Director notes

Elijah finds Elisha ploughing with twelve yoke of oxen; Elisha slaughters his oxen and follows, leaving the plough behind. Stage: a wide field at dawn, twelve oxen, a ploughman pausing mid-furrow; the old prophet's mantle cast over him; golden stubble and long shadows.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_the_mantle/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_the_mantle/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `elisha_act1_a_background.svg`, `elisha_act1_a_middle_ground.svg`, and `elisha_act1_a_foreground.svg`.
- `b_core_action/` contains `elisha_act1_b_background.svg`, `elisha_act1_b_middle_ground.svg`, and `elisha_act1_b_foreground.svg`.
- `c_resolve/` contains `elisha_act1_c_background.svg`, `elisha_act1_c_middle_ground.svg`, and `elisha_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a wide field at dawn, twelve oxen, a ploughman pausing mid-furrow |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `elisha-the-mantle`

- **File:** `../tools/shot-designer/scenes/elisha-the-mantle.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a wide field at dawn, twelve oxen, a ploughman pausing mid-furrow
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `pastoral` `prophetic`

