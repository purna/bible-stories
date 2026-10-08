# Ch.10 · Purim

**Mood board 10 of 10** — Esther (Esther 1–9)

| | |
| --- | --- |
| Data file | `../data/act10_purim.json` |
| SVG assets | `../assets/svg/act_10_purim/` |
| 3D scene | `esther-purim` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Assemble gifts, food, and remembrance for every district. — assembly |

> "Assemble gifts, food, and remembrance for every district."

## Director notes

The Jews feast and send gifts, and the days of Purim are fixed — a feast of reversal. Stage: a city street in festival light, tables of food, children in costume, a scroll unrolled; warm lanterns, the sound of celebration.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_10_purim/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_10_purim/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `esther_act10_a_background.svg`, `esther_act10_a_middle_ground.svg`, and `esther_act10_a_foreground.svg`.
- `b_core_action/` contains `esther_act10_b_background.svg`, `esther_act10_b_middle_ground.svg`, and `esther_act10_b_foreground.svg`.
- `c_resolve/` contains `esther_act10_c_background.svg`, `esther_act10_c_middle_ground.svg`, and `esther_act10_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a city street in festival light, tables of food, children in costume, a scroll unrolled |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `esther-purim`

- **File:** `../tools/shot-designer/scenes/esther-purim.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a city street in festival light, tables of food, children in costume, a scroll unrolled
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`urban` `festive`

