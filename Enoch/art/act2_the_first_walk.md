# Ch.2 · The First Walk

**Mood board 2 of 7** — Enoch (Genesis 5:21–24)

| | |
| --- | --- |
| Data file | `../data/act2_the_first_walk.json` |
| SVG assets | `../assets/svg/act_02_the_first_walk/` |
| 3D scene | `enoch-the-first-walk` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Choose a daily route that serves neighbours. — pathfinding |

> "Choose a daily route that serves neighbours."

## Director notes

Enoch begins a daily walk — a habit of quiet steps that makes room for the presence of God. Stage: a dawn road through early fields, a lone figure walking, the city behind; cool morning light, birds lifting.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_the_first_walk/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_the_first_walk/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `enoch_act2_a_background.svg`, `enoch_act2_a_middle_ground.svg`, and `enoch_act2_a_foreground.svg`.
- `b_core_action/` contains `enoch_act2_b_background.svg`, `enoch_act2_b_middle_ground.svg`, and `enoch_act2_b_foreground.svg`.
- `c_resolve/` contains `enoch_act2_c_background.svg`, `enoch_act2_c_middle_ground.svg`, and `enoch_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a dawn road through early fields, a lone figure walking, the city behind |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `enoch-the-first-walk`

- **File:** `../tools/shot-designer/scenes/enoch-the-first-walk.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a dawn road through early fields, a lone figure walking, the city behind
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `numinous` `urban` `peripatetic`

