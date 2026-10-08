# Ch.2 · At the Table

**Mood board 2 of 8** — Hannah (1 Samuel 1–2)

| | |
| --- | --- |
| Data file | `../data/act2_at_the_table.json` |
| SVG assets | `../assets/svg/act_02_at_the_table/` |
| 3D scene | `hannah-at-the-table` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Navigate hurt without retaliating. — pathfinding |

> "Navigate hurt without retaliating."

## Director notes

At the feast Elkanah gives Hannah a double portion, while Peninnah provokes her for her barrenness. Stage: a long table in the temple court, food and drink, two wives opposite each other; a double portion of meat, a heavy silence; firelight and grief.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_at_the_table/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_at_the_table/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `hannah_act2_a_background.svg`, `hannah_act2_a_middle_ground.svg`, and `hannah_act2_a_foreground.svg`.
- `b_core_action/` contains `hannah_act2_b_background.svg`, `hannah_act2_b_middle_ground.svg`, and `hannah_act2_b_foreground.svg`.
- `c_resolve/` contains `hannah_act2_c_background.svg`, `hannah_act2_c_middle_ground.svg`, and `hannah_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a long table in the temple court, food and drink, two wives opposite each other |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `hannah-at-the-table`

- **File:** `../tools/shot-designer/scenes/hannah-at-the-table.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a long table in the temple court, food and drink, two wives opposite each other
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`sacred` `festive`

