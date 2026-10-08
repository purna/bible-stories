# Ch.4 · Years of Faithfulness

**Mood board 4 of 7** — Enoch (Genesis 5:21–24)

| | |
| --- | --- |
| Data file | `../data/act4_years_of_faithfulness.json` |
| SVG assets | `../assets/svg/act_04_years_of_faithfulness/` |
| 3D scene | `enoch-years-of-faithfulness` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Complete repeated small acts without a fame meter. — ordered rhythm |

> "Complete repeated small acts without a fame meter."

## Director notes

Three hundred years of small, repeated acts — teaching, tending, giving — with no fanfare. Stage: the changing seasons of a single street: sowing, harvest, rain, repair; the same figure walking the road; light shifting from spring gold to autumn amber.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_years_of_faithfulness/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_years_of_faithfulness/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `enoch_act4_a_background.svg`, `enoch_act4_a_middle_ground.svg`, and `enoch_act4_a_foreground.svg`.
- `b_core_action/` contains `enoch_act4_b_background.svg`, `enoch_act4_b_middle_ground.svg`, and `enoch_act4_b_foreground.svg`.
- `c_resolve/` contains `enoch_act4_c_background.svg`, `enoch_act4_c_middle_ground.svg`, and `enoch_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the changing seasons of a single street: sowing, harvest, rain, repair |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1024` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `enoch-years-of-faithfulness`

- **File:** `../tools/shot-designer/scenes/enoch-years-of-faithfulness.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** the changing seasons of a single street: sowing, harvest, rain, repair
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`soaked` `abundant` `peripatetic`

