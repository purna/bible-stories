# Ch.10 · David Anointed

**Mood board 10 of 10** — Samuel (1 Samuel 1–16)

| | |
| --- | --- |
| Data file | `../data/act10_david_anointed.json` |
| SVG assets | `../assets/svg/act_10_david_anointed/` |
| 3D scene | `samuel-david-anointed` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Look past height and choose the shepherd son. — observation |

> "Look past height and choose the shepherd son."

## Director notes

Samuel anoints David the youngest son of Jesse in Bethlehem, and the Spirit of the Lord comes upon him from that day. Stage: a Bethlehem hillside at golden hour, a boy among his brothers, a horn of oil, a shepherd's crook; the last son, the first light on a new king.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_10_david_anointed/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_10_david_anointed/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `samuel_act10_a_background.svg`, `samuel_act10_a_middle_ground.svg`, and `samuel_act10_a_foreground.svg`.
- `b_core_action/` contains `samuel_act10_b_background.svg`, `samuel_act10_b_middle_ground.svg`, and `samuel_act10_b_foreground.svg`.
- `c_resolve/` contains `samuel_act10_c_background.svg`, `samuel_act10_c_middle_ground.svg`, and `samuel_act10_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a Bethlehem hillside at golden hour, a boy among his brothers, a horn of oil, a shepherd's crook |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `samuel-david-anointed`

- **File:** `../tools/shot-designer/scenes/samuel-david-anointed.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a Bethlehem hillside at golden hour, a boy among his brothers, a horn of oil, a shepherd's crook
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`regal` `pastoral`

