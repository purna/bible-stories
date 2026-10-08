# Ch.1 · The Birthright

**Mood board 1 of 10** — Jacob (Genesis 25–37)

| | |
| --- | --- |
| Data file | `../data/act1_the_birthright.json` |
| SVG assets | `../assets/svg/act_01_the_birthright/` |
| 3D scene | `jacob-the-birthright` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Weigh hunger against a lasting inheritance. — observation |

> "Weigh hunger against a lasting inheritance."

## Director notes

Esau comes in exhausted from the field and sells his birthright for a single bowl of lentil stew. Stage: a camp kitchen at midday, a hunter gasping at the door, a pot of red stew steaming, two brothers bargaining; a bright, ordinary moment with a heavy price.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_the_birthright/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_the_birthright/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jacob_act1_a_background.svg`, `jacob_act1_a_middle_ground.svg`, and `jacob_act1_a_foreground.svg`.
- `b_core_action/` contains `jacob_act1_b_background.svg`, `jacob_act1_b_middle_ground.svg`, and `jacob_act1_b_foreground.svg`.
- `c_resolve/` contains `jacob_act1_c_background.svg`, `jacob_act1_c_middle_ground.svg`, and `jacob_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a camp kitchen at midday, a hunter gasping at the door, a pot of red stew steaming, two brothers bargaining |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jacob-the-birthright`

- **File:** `../tools/shot-designer/scenes/jacob-the-birthright.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a camp kitchen at midday, a hunter gasping at the door, a pot of red stew steaming, two brothers bargaining
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`pastoral` `military-camp`

