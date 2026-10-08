# Ch.1 · Under the Palm

**Mood board 1 of 7** — Deborah (Judges 4–5)

| | |
| --- | --- |
| Data file | `../data/act1_under_the_palm.json` |
| SVG assets | `../assets/svg/act_01_under_the_palm/` |
| 3D scene | `deborah-under-the-palm` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Restore a fair path — listening and discernment |

> "For twenty years, King Jabin’s power and Sisera’s iron chariots pressed hard upon Israel."

## Director notes

Deborah, a prophetess and judge, sits beneath the Palm of Deborah between Ramah and Bethel, hearing the disputes of Israel. Stage: a broad palm casting dappled shade over limestone benches, Israelites climbing the hill country to seek judgment; warm late-morning light, olive-green and distant blue hills.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_under_the_palm/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_under_the_palm/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `deborah_act1_a_background.svg`, `deborah_act1_a_middle_ground.svg`, and `deborah_act1_a_foreground.svg`.
- `b_core_action/` contains `deborah_act1_b_background.svg`, `deborah_act1_b_middle_ground.svg`, and `deborah_act1_b_foreground.svg`.
- `c_resolve/` contains `deborah_act1_c_background.svg`, `deborah_act1_c_middle_ground.svg`, and `deborah_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a broad palm casting dappled shade over limestone benches, Israelites climbing the hill country to seek judgment |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#6db86a` (mid) → `#2d5f2d` (deep)
- **Vignette:** radial gradient centred at 50% 25% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `deborah-under-the-palm`

- **File:** `../tools/shot-designer/scenes/deborah-under-the-palm.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a broad palm casting dappled shade over limestone benches, Israelites climbing the hill country to seek judgment
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`verdant` `rolling`

