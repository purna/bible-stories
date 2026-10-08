# Ch.4 · The Storm

**Mood board 4 of 7** — Deborah (Judges 4–5)

| | |
| --- | --- |
| Data file | `../data/act4_the_storm.json` |
| SVG assets | `../assets/svg/act_04_the_storm/` |
| 3D scene | `deborah-the-storm` in `../tools/shot-designer/scenes/` |
| Particle mode | storm — wind-driven rain, cold grey-blue, lightning flicker |
| Game beat | Turn the tide — river |

> "Sisera brought his nine hundred iron chariots to the Kishon River, certain that strength would decide the day."

## Director notes

The Lord routs Sisera with a storm; the Kishon floods and the chariot wheels sink. Stage: a black sky over the plain, lightning, rain sheets, a river in spate swallowing iron wheels; Israelites pouring down the slope; thunderheads and flash-lit water.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_the_storm/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_the_storm/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `deborah_act4_a_background.svg`, `deborah_act4_a_middle_ground.svg`, and `deborah_act4_a_foreground.svg`.
- `b_core_action/` contains `deborah_act4_b_background.svg`, `deborah_act4_b_middle_ground.svg`, and `deborah_act4_b_foreground.svg`.
- `c_resolve/` contains `deborah_act4_c_background.svg`, `deborah_act4_c_middle_ground.svg`, and `deborah_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a black sky over the plain, lightning, rain sheets, a river in spate swallowing iron wheels |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#4a5568` (deep) → `#1a202c` (dark)
- **Vignette:** radial gradient centred at 50% 25% — the eye lands here first
- **Ambience:** storm particles drift across the panels (wind-driven rain, cold grey-blue, lightning flicker)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `deborah-the-storm`

- **File:** `../tools/shot-designer/scenes/deborah-the-storm.js`, registered in `scenes/manifest.json`
- **Lighting:** storm — wind-driven rain, cold grey-blue, lightning flicker; hemisphere + key light tuned to the 2D palette
- **Set:** a black sky over the plain, lightning, rain sheets, a river in spate swallowing iron wheels
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`tempest` `electric` `soaked` `aquatic` `riverine` `martial`

