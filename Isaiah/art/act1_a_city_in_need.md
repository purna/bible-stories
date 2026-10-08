# Ch.1 · A City in Need

**Mood board 1 of 9** — Isaiah (Isaiah 1–12, 36–40, 53, 65–66)

| | |
| --- | --- |
| Data file | `../data/act1_a_city_in_need.json` |
| SVG assets | `../assets/svg/act_01_a_city_in_need/` |
| 3D scene | `isaiah-a-city-in-need` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Identify worship separated from justice. — match-it-up |

> "Identify worship separated from justice."

## Director notes

The Lord indicts a city full of sacrifices but no justice; the hands are full of blood. Stage: a temple courtyard with a heap of offerings, a city behind its wall, a widow and an orphan in the street; a bright altar, a dark street; the same sun on both.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_a_city_in_need/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_a_city_in_need/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `isaiah_act1_a_background.svg`, `isaiah_act1_a_middle_ground.svg`, and `isaiah_act1_a_foreground.svg`.
- `b_core_action/` contains `isaiah_act1_b_background.svg`, `isaiah_act1_b_middle_ground.svg`, and `isaiah_act1_b_foreground.svg`.
- `c_resolve/` contains `isaiah_act1_c_background.svg`, `isaiah_act1_c_middle_ground.svg`, and `isaiah_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a temple courtyard with a heap of offerings, a city behind its wall, a widow and an orphan in the street |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `isaiah-a-city-in-need`

- **File:** `../tools/shot-designer/scenes/isaiah-a-city-in-need.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a temple courtyard with a heap of offerings, a city behind its wall, a widow and an orphan in the street
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`sacred` `fortified` `urban` `gory`

