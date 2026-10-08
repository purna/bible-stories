# Ch.7 · The Sleepless Night

**Mood board 7 of 10** — Esther (Esther 1–9)

| | |
| --- | --- |
| Data file | `../data/act7_the_sleepless_night.json` |
| SVG assets | `../assets/svg/act_07_the_sleepless_night/` |
| 3D scene | `esther-the-sleepless-night` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Find Mordecai’s forgotten service in the chronicles. — ordered rhythm |

> "Find Mordecai’s forgotten service in the chronicles."

## Director notes

The king cannot sleep, and the record of Mordecai's saved life is read aloud — the night turns. Stage: a sleepless king in a dim throne room, a scribe reading the chronicle; a rooster crowing in the dark; a single lamp turning the room.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_the_sleepless_night/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_the_sleepless_night/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `esther_act7_a_background.svg`, `esther_act7_a_middle_ground.svg`, and `esther_act7_a_foreground.svg`.
- `b_core_action/` contains `esther_act7_b_background.svg`, `esther_act7_b_middle_ground.svg`, and `esther_act7_b_foreground.svg`.
- `c_resolve/` contains `esther_act7_c_background.svg`, `esther_act7_c_middle_ground.svg`, and `esther_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a sleepless king in a dim throne room, a scribe reading the chronicle |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1024` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `esther-the-sleepless-night`

- **File:** `../tools/shot-designer/scenes/esther-the-sleepless-night.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a sleepless king in a dim throne room, a scribe reading the chronicle
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `regal`

