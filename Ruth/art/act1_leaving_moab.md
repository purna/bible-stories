# Ch.1 · Leaving Moab

**Mood board 1 of 8** — Ruth (Ruth 1–4)

| | |
| --- | --- |
| Data file | `../data/act1_leaving_moab.json` |
| SVG assets | `../assets/svg/act_01_leaving_moab/` |
| 3D scene | `ruth-leaving-moab` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Pack lightly and choose whether to accompany Naomi. — gather-with-care |

> "In the days when the judges ruled, there was a famine in the land. A man from Bethlehem left his home to live in the country of Moab—his wife and two sons with him."

## Director notes

Naomi, with her daughters-in-law, leaves Moab for Bethlehem, and Orpah turns back; Ruth clings to Naomi and to her people. Stage: a road at dawn, a widow and her two daughters-in-law, the Moabite hills behind; one turning, one continuing; the road to a new land.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_leaving_moab/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_leaving_moab/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `ruth_act1_a_background.svg`, `ruth_act1_a_middle_ground.svg`, and `ruth_act1_a_foreground.svg`.
- `b_core_action/` contains `ruth_act1_b_background.svg`, `ruth_act1_b_middle_ground.svg`, and `ruth_act1_b_foreground.svg`.
- `c_resolve/` contains `ruth_act1_c_background.svg`, `ruth_act1_c_middle_ground.svg`, and `ruth_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a road at dawn, a widow and her two daughters-in-law, the Moabite hills behind |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#d4a86a` (light) → `#4a3520` (deep)
- **Vignette:** radial gradient centred at 50% 25% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `ruth-leaving-moab`

- **File:** `../tools/shot-designer/scenes/ruth-leaving-moab.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a road at dawn, a widow and her two daughters-in-law, the Moabite hills behind
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `peripatetic`

