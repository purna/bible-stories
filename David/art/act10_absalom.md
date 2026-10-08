# Ch.10 · Absalom

**Mood board 10 of 12** — David (1 Samuel 16 – 1 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act10_absalom.json` |
| SVG assets | `../assets/svg/act_10_absalom/` |
| 3D scene | `david-absalom` in `../tools/shot-designer/scenes/` |
| Particle mode | storm — wind-driven rain, cold grey-blue, lightning flicker |
| Game beat | Navigate divided loyalties without celebrating loss. — pathfinding |

> "Absalom, David's son by Maacah, grew handsome and popular. He set a chariot and horses at his gate and took the side of the road for anyone with a grievance."

## Director notes

Absalom's long hair catches in the branches of a great tree as his rebellion breaks in the forest of Ephraim; Joab strikes him down. Stage: a dense oak wood in rain, a royal mule at bay, tangled hair in the branches, a spear flash; cold green light, the king waiting on the road.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_10_absalom/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_10_absalom/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `david_act10_a_background.svg`, `david_act10_a_middle_ground.svg`, and `david_act10_a_foreground.svg`.
- `b_core_action/` contains `david_act10_b_background.svg`, `david_act10_b_middle_ground.svg`, and `david_act10_b_foreground.svg`.
- `c_resolve/` contains `david_act10_c_background.svg`, `david_act10_c_middle_ground.svg`, and `david_act10_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a dense oak wood in rain, a royal mule at bay, tangled hair in the branches, a spear flash |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1420` (dark) → `#0a0610` (dark) → `#040208` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** storm particles drift across the panels (wind-driven rain, cold grey-blue, lightning flicker)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `david-absalom`

- **File:** `../tools/shot-designer/scenes/david-absalom.js`, registered in `scenes/manifest.json`
- **Lighting:** storm — wind-driven rain, cold grey-blue, lightning flicker; hemisphere + key light tuned to the 2D palette
- **Set:** a dense oak wood in rain, a royal mule at bay, tangled hair in the branches, a spear flash
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`soaked` `verdant` `martial` `regal` `peripatetic`

