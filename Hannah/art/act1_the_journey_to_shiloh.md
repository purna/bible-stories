# Ch.1 · The Journey to Shiloh

**Mood board 1 of 8** — Hannah (1 Samuel 1–2)

| | |
| --- | --- |
| Data file | `../data/act1_the_journey_to_shiloh.json` |
| SVG assets | `../assets/svg/act_01_the_journey_to_shiloh/` |
| 3D scene | `hannah-the-journey-to-shiloh` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Gather the household for the annual worship journey. — pathfinding |

> "Gather the household for the annual worship journey."

## Director notes

Elkanah's household travels the annual road to worship at Shiloh, where the ark and Eli's sons keep the tabernacle. Stage: a hill country road at dawn, a family with donkeys and provisions, the tabernacle rising on the horizon; morning light, the sound of a travelling household.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_the_journey_to_shiloh/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_the_journey_to_shiloh/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `hannah_act1_a_background.svg`, `hannah_act1_a_middle_ground.svg`, and `hannah_act1_a_foreground.svg`.
- `b_core_action/` contains `hannah_act1_b_background.svg`, `hannah_act1_b_middle_ground.svg`, and `hannah_act1_b_foreground.svg`.
- `c_resolve/` contains `hannah_act1_c_background.svg`, `hannah_act1_c_middle_ground.svg`, and `hannah_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a hill country road at dawn, a family with donkeys and provisions, the tabernacle rising on the horizon |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `hannah-the-journey-to-shiloh`

- **File:** `../tools/shot-designer/scenes/hannah-the-journey-to-shiloh.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a hill country road at dawn, a family with donkeys and provisions, the tabernacle rising on the horizon
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `rolling` `peripatetic`

