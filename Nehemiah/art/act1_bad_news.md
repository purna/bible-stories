# Ch.1 · Bad News

**Mood board 1 of 10** — Nehemiah (Nehemiah 1–13)

| | |
| --- | --- |
| Data file | `../data/act1_bad_news.json` |
| SVG assets | `../assets/svg/act_01_bad_news/` |
| 3D scene | `nehemiah-bad-news` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Map Jerusalem’s broken gates while Nehemiah prays. — call-and-response |

> "Map Jerusalem’s broken gates while Nehemiah prays."

## Director notes

Hanani comes from Judah and tells Nehemiah that the wall of Jerusalem is broken and its people are in trouble. Stage: a palace court at Susa in winter, a cupbearer hearing a report, a map of a ruined city; a man turning to prayer, his face in the light.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_bad_news/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_bad_news/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `nehemiah_act1_a_background.svg`, `nehemiah_act1_a_middle_ground.svg`, and `nehemiah_act1_a_foreground.svg`.
- `b_core_action/` contains `nehemiah_act1_b_background.svg`, `nehemiah_act1_b_middle_ground.svg`, and `nehemiah_act1_b_foreground.svg`.
- `c_resolve/` contains `nehemiah_act1_c_background.svg`, `nehemiah_act1_c_middle_ground.svg`, and `nehemiah_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a palace court at Susa in winter, a cupbearer hearing a report, a map of a ruined city |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `nehemiah-bad-news`

- **File:** `../tools/shot-designer/scenes/nehemiah-bad-news.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a palace court at Susa in winter, a cupbearer hearing a report, a map of a ruined city
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`palatial` `devotional` `fortified` `urban`

