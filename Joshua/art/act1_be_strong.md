# Ch.1 · Be Strong

**Mood board 1 of 10** — Joshua (Joshua 1–24)

| | |
| --- | --- |
| Data file | `../data/act1_be_strong.json` |
| SVG assets | `../assets/svg/act_01_be_strong/` |
| 3D scene | `joshua-be-strong` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Meditate on the instruction before crossing. — pathfinding |

> "Meditate on the instruction before crossing."

## Director notes

The Lord commissions Joshua: be strong and courageous, for the Lord your God is with you wherever you go. Stage: the plains of Moab at dawn, Moses gone, Joshua standing at the edge of the river, the people behind him; a new leader, a long road, the light coming up.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_be_strong/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_be_strong/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joshua_act1_a_background.svg`, `joshua_act1_a_middle_ground.svg`, and `joshua_act1_a_foreground.svg`.
- `b_core_action/` contains `joshua_act1_b_background.svg`, `joshua_act1_b_middle_ground.svg`, and `joshua_act1_b_foreground.svg`.
- `c_resolve/` contains `joshua_act1_c_background.svg`, `joshua_act1_c_middle_ground.svg`, and `joshua_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the plains of Moab at dawn, Moses gone, Joshua standing at the edge of the river, the people behind him |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joshua-be-strong`

- **File:** `../tools/shot-designer/scenes/joshua-be-strong.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** the plains of Moab at dawn, Moses gone, Joshua standing at the edge of the river, the people behind him
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`riverine` `first-light` `numinous` `peripatetic`

