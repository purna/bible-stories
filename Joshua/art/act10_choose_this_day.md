# Ch.10 · Choose This Day

**Mood board 10 of 10** — Joshua (Joshua 1–24)

| | |
| --- | --- |
| Data file | `../data/act10_choose_this_day.json` |
| SVG assets | `../assets/svg/act_10_choose_this_day/` |
| 3D scene | `joshua-choose-this-day` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Place household stones beside the covenant witness. — assembly |

> "Place household stones beside the covenant witness."

## Director notes

Joshua gathers the people at Shechem and says: choose this day whom you will serve, but as for me and my house, we will serve the Lord. Stage: a great stone under the oaks of Shechem, an old man speaking, the people answering; a covenant renewed, the sun setting on a lifetime.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_10_choose_this_day/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_10_choose_this_day/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joshua_act10_a_background.svg`, `joshua_act10_a_middle_ground.svg`, and `joshua_act10_a_foreground.svg`.
- `b_core_action/` contains `joshua_act10_b_background.svg`, `joshua_act10_b_middle_ground.svg`, and `joshua_act10_b_foreground.svg`.
- `c_resolve/` contains `joshua_act10_c_background.svg`, `joshua_act10_c_middle_ground.svg`, and `joshua_act10_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a great stone under the oaks of Shechem, an old man speaking, the people answering |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joshua-choose-this-day`

- **File:** `../tools/shot-designer/scenes/joshua-choose-this-day.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a great stone under the oaks of Shechem, an old man speaking, the people answering
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`megalithic` `solemn`

