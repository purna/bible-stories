# Ch.12 · Solomon

**Mood board 12 of 12** — David (1 Samuel 16 – 1 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act12_solomon.json` |
| SVG assets | `../assets/svg/act_12_solomon/` |
| 3D scene | `david-solomon` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Pass plans and wisdom to the next king. — balance |

> "David was old and full of days. The kingdom was at peace on every side, and the king gathered the leaders of Israel to his bedside."

## Director notes

David charges Solomon to build the house of the Lord and walks in wisdom; the old king dies and the son reigns. Stage: Jerusalem's hill with a temple site marked out, father and son on a terrace, the kingdom passing; cedar light, a quiet benediction.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_12_solomon/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_12_solomon/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `david_act12_a_background.svg`, `david_act12_a_middle_ground.svg`, and `david_act12_a_foreground.svg`.
- `b_core_action/` contains `david_act12_b_background.svg`, `david_act12_b_middle_ground.svg`, and `david_act12_b_foreground.svg`.
- `c_resolve/` contains `david_act12_c_background.svg`, `david_act12_c_middle_ground.svg`, and `david_act12_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: Jerusalem's hill with a temple site marked out, father and son on a terrace, the kingdom passing |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#0a1408` (dark) → `#040802` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `david-solomon`

- **File:** `../tools/shot-designer/scenes/david-solomon.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** Jerusalem's hill with a temple site marked out, father and son on a terrace, the kingdom passing
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`regal` `sacred` `rolling`

