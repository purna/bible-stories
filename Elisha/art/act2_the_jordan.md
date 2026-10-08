# Ch.2 · The Jordan

**Mood board 2 of 9** — Elisha (1 Kings 19; 2 Kings 2–7)

| | |
| --- | --- |
| Data file | `../data/act2_the_jordan.json` |
| SVG assets | `../assets/svg/act_02_the_jordan/` |
| 3D scene | `elisha-the-jordan` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Strike the water and cross. — pathfinding |

> "Strike the water and cross."

## Director notes

Elijah strikes the water with his mantle and the two cross on dry ground; Elisha inherits a double portion. Stage: the Jordan in flood, the river parting, two figures walking on the riverbed; churned water walls; early light.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_the_jordan/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_the_jordan/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `elisha_act2_a_background.svg`, `elisha_act2_a_middle_ground.svg`, and `elisha_act2_a_foreground.svg`.
- `b_core_action/` contains `elisha_act2_b_background.svg`, `elisha_act2_b_middle_ground.svg`, and `elisha_act2_b_foreground.svg`.
- `c_resolve/` contains `elisha_act2_c_background.svg`, `elisha_act2_c_middle_ground.svg`, and `elisha_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the Jordan in flood, the river parting, two figures walking on the riverbed |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `elisha-the-jordan`

- **File:** `../tools/shot-designer/scenes/elisha-the-jordan.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** the Jordan in flood, the river parting, two figures walking on the riverbed
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`deluge` `aquatic` `riverine`

