# Ch.7 · Saul Chosen

**Mood board 7 of 10** — Samuel (1 Samuel 1–16)

| | |
| --- | --- |
| Data file | `../data/act7_saul_chosen.json` |
| SVG assets | `../assets/svg/act_07_saul_chosen/` |
| 3D scene | `samuel-saul-chosen` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Find Saul among the baggage. — ordered rhythm |

> "Find Saul among the baggage."

## Director notes

Saul is chosen by lot, and he is found hiding among the baggage, taller than any of the people. Stage: a town square at dawn, a great man being brought from the baggage, a crown of gold, a tall figure among a crowd; the first king of Israel.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_saul_chosen/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_saul_chosen/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `samuel_act7_a_background.svg`, `samuel_act7_a_middle_ground.svg`, and `samuel_act7_a_foreground.svg`.
- `b_core_action/` contains `samuel_act7_b_background.svg`, `samuel_act7_b_middle_ground.svg`, and `samuel_act7_b_foreground.svg`.
- `c_resolve/` contains `samuel_act7_c_background.svg`, `samuel_act7_c_middle_ground.svg`, and `samuel_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a town square at dawn, a great man being brought from the baggage, a crown of gold, a tall figure among a crowd |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `samuel-saul-chosen`

- **File:** `../tools/shot-designer/scenes/samuel-saul-chosen.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a town square at dawn, a great man being brought from the baggage, a crown of gold, a tall figure among a crowd
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `regal`

