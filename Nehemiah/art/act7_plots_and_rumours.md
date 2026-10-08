# Ch.7 · Plots and Rumours

**Mood board 7 of 10** — Nehemiah (Nehemiah 1–13)

| | |
| --- | --- |
| Data file | `../data/act7_plots_and_rumours.json` |
| SVG assets | `../assets/svg/act_07_plots_and_rumours/` |
| 3D scene | `nehemiah-plots-and-rumours` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Recognise distractions designed to stop the work. — match-it-up |

> "Recognise distractions designed to stop the work."

## Director notes

Sanballat and Geshem send messages to lure Nehemiah to the plain of Ono, and he answers: I am doing a great work. Stage: a wall at dusk, a servant with a letter, a governor refusing to come down; a false prophet shut into a room, a wall growing in the light.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_plots_and_rumours/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_plots_and_rumours/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `nehemiah_act7_a_background.svg`, `nehemiah_act7_a_middle_ground.svg`, and `nehemiah_act7_a_foreground.svg`.
- `b_core_action/` contains `nehemiah_act7_b_background.svg`, `nehemiah_act7_b_middle_ground.svg`, and `nehemiah_act7_b_foreground.svg`.
- `c_resolve/` contains `nehemiah_act7_c_background.svg`, `nehemiah_act7_c_middle_ground.svg`, and `nehemiah_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a wall at dusk, a servant with a letter, a governor refusing to come down |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `nehemiah-plots-and-rumours`

- **File:** `../tools/shot-designer/scenes/nehemiah-plots-and-rumours.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a wall at dusk, a servant with a letter, a governor refusing to come down
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`golden-hour` `prophetic` `fortified`

