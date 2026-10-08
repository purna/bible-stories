# Ch.4 · Rise and Build

**Mood board 4 of 10** — Nehemiah (Nehemiah 1–13)

| | |
| --- | --- |
| Data file | `../data/act4_rise_and_build.json` |
| SVG assets | `../assets/svg/act_04_rise_and_build/` |
| 3D scene | `nehemiah-rise-and-build` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Assign families to adjacent wall sections. — assembly |

> "Assign families to adjacent wall sections."

## Director notes

The people build, each family by its own gate, from the sheep gate to the tower of the ovens. Stage: a city of builders at dawn, a wall rising stone by stone, each family by its section; the sound of hammers, a woman, a goldsmith, a priest, all building.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_rise_and_build/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_rise_and_build/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `nehemiah_act4_a_background.svg`, `nehemiah_act4_a_middle_ground.svg`, and `nehemiah_act4_a_foreground.svg`.
- `b_core_action/` contains `nehemiah_act4_b_background.svg`, `nehemiah_act4_b_middle_ground.svg`, and `nehemiah_act4_b_foreground.svg`.
- `c_resolve/` contains `nehemiah_act4_c_background.svg`, `nehemiah_act4_c_middle_ground.svg`, and `nehemiah_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a city of builders at dawn, a wall rising stone by stone, each family by its section |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1024` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `nehemiah-rise-and-build`

- **File:** `../tools/shot-designer/scenes/nehemiah-rise-and-build.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a city of builders at dawn, a wall rising stone by stone, each family by its section
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `pastoral` `megalithic` `fortified` `threshold` `urban`

