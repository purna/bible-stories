# Ch.5 · Threshing Floor

**Mood board 5 of 8** — Ruth (Ruth 1–4)

| | |
| --- | --- |
| Data file | `../data/act5_threshing_floor.json` |
| SVG assets | `../assets/svg/act_05_threshing_floor/` |
| 3D scene | `ruth-threshing-floor` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Follow Naomi’s plan with restraint and clarity. — pathfinding |

> "When Ruth returned home, Naomi had a plan. Boaz was winnowing barley at the threshing floor that night."

## Director notes

Ruth goes to the threshing floor at Naomi's word, uncovers Boaz's feet, and asks him to spread his cloak over her. Stage: a threshing floor at night, a heap of grain, a man sleeping in his cloak, a woman at his feet; the quietest, most careful scene of the book.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_threshing_floor/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_threshing_floor/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `ruth_act5_a_background.svg`, `ruth_act5_a_middle_ground.svg`, and `ruth_act5_a_foreground.svg`.
- `b_core_action/` contains `ruth_act5_b_background.svg`, `ruth_act5_b_middle_ground.svg`, and `ruth_act5_b_foreground.svg`.
- `c_resolve/` contains `ruth_act5_c_background.svg`, `ruth_act5_c_middle_ground.svg`, and `ruth_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a threshing floor at night, a heap of grain, a man sleeping in his cloak, a woman at his feet |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#6a5840` (deep) → `#2a2018` (dark)
- **Vignette:** radial gradient centred at 50% 25% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `ruth-threshing-floor`

- **File:** `../tools/shot-designer/scenes/ruth-threshing-floor.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a threshing floor at night, a heap of grain, a man sleeping in his cloak, a woman at his feet
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `harvest`

