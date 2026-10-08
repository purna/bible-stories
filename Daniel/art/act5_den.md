# The Den

**Mood board 5 of 5** — Daniel (Daniel 1–12)

| | |
| --- | --- |
| Data file | `../data/act5_den.json` |
| SVG assets | `../assets/svg/act_05_den/` |
| 3D scene | `daniel-den` in `../tools/shot-designer/scenes/` |
| Particle mode | stars — stars |
| Game beat | Match the mysterious words to their warning. — match-it-up |

> "Under King Darius the Mede, Daniel rose again to the highest rank. And the satraps hated him for it."

## Director notes

At Belshazzar's feast a hand writes on the plaster: mene, mene, tekel, upharsin — and Daniel reads the doom. Stage: a thousand-guest banquet hall, gold vessels looted from Jerusalem, candlelight and a ghostly disembodied hand tracing glowing letters on the wall; terror among the revellers.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_den/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_den/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `daniel_act5_a_background.svg`, `daniel_act5_a_middle_ground.svg`, and `daniel_act5_a_foreground.svg`.
- `b_core_action/` contains `daniel_act5_b_background.svg`, `daniel_act5_b_middle_ground.svg`, and `daniel_act5_b_foreground.svg`.
- `c_resolve/` contains `daniel_act5_c_background.svg`, `daniel_act5_c_middle_ground.svg`, and `daniel_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a thousand-guest banquet hall, gold vessels looted from Jerusalem, candlelight and a ghostly disembodied hand tracing glowing letters on the wall |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#0d1b2a` (dark) → `#061224` (dark) → `#030b18` (dark)
- **Vignette:** radial gradient centred at 50% 20% — the eye lands here first
- **Ambience:** stars particles drift across the panels (stars)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `daniel-den`

- **File:** `../tools/shot-designer/scenes/daniel-den.js`, registered in `scenes/manifest.json`
- **Lighting:** stars — stars; hemisphere + key light tuned to the 2D palette
- **Set:** a thousand-guest banquet hall, gold vessels looted from Jerusalem, candlelight and a ghostly disembodied hand tracing glowing letters on the wall
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`fortified` `festive`

