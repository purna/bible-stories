# Ch.1 · Anointed

**Mood board 1 of 12** — David (1 Samuel 16 – 1 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act1_anointed.json` |
| SVG assets | `../assets/svg/act_01_anointed/` |
| 3D scene | `david-anointed` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Identify the overlooked shepherd among Jesse’s sons. — match-it-up |

> "In the hill country of Judah, a man named Jesse had eight sons. The eldest were tall and broad-shouldered — the kind of men the people expected a king to be."

## Director notes

Samuel anoints the youngest son of Jesse, a shepherd boy of Bethlehem, while his elder brothers watch in surprise. Stage: a Bethlehem hillside at golden hour, sheep around, oil poured on a ruddy boy's head; a horn of oil, distant town rooftops; warm ochre light.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_anointed/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_anointed/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `david_act1_a_background.svg`, `david_act1_a_middle_ground.svg`, and `david_act1_a_foreground.svg`.
- `b_core_action/` contains `david_act1_b_background.svg`, `david_act1_b_middle_ground.svg`, and `david_act1_b_foreground.svg`.
- `c_resolve/` contains `david_act1_c_background.svg`, `david_act1_c_middle_ground.svg`, and `david_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a Bethlehem hillside at golden hour, sheep around, oil poured on a ruddy boy's head |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a3a1a` (dark) → `#0e1a08` (dark) → `#060804` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `david-anointed`

- **File:** `../tools/shot-designer/scenes/david-anointed.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a Bethlehem hillside at golden hour, sheep around, oil poured on a ruddy boy's head
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`pastoral`

