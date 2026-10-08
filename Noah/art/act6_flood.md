# Ch.6 · Forty Days

**Mood board 6 of 10** — Noah (Genesis 6–9)

| | |
| --- | --- |
| Data file | `../data/act6_flood.json` |
| SVG assets | `../assets/svg/act_06_flood/` |
| 3D scene | `noah-flood` in `../tools/shot-designer/scenes/` |
| Particle mode | flood — flood |
| Game beat | Feed, calm, and clean animal pens during the storm. — gather-with-care |

> "For forty days, the rain hammered the hull without stopping."

## Director notes

The rain falls forty days and forty nights, and the waters rise, and the ark floats on the face of the waters. Stage: the ark in a great sea of rain, the water over the hills, the animals in the dark below; a world of water, the rain never stopping, a lamp in the hold.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_flood/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_flood/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `noah_act6_a_background.svg`, `noah_act6_a_middle_ground.svg`, and `noah_act6_a_foreground.svg`.
- `b_core_action/` contains `noah_act6_b_background.svg`, `noah_act6_b_middle_ground.svg`, and `noah_act6_b_foreground.svg`.
- `c_resolve/` contains `noah_act6_c_background.svg`, `noah_act6_c_middle_ground.svg`, and `noah_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the ark in a great sea of rain, the water over the hills, the animals in the dark below |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#061430` (dark) → `#020810` (dark) → `#010306` (dark)
- **Vignette:** radial gradient centred at 50% 60% — the eye lands here first
- **Ambience:** flood particles drift across the panels (flood)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `noah-flood`

- **File:** `../tools/shot-designer/scenes/noah-flood.js`, registered in `scenes/manifest.json`
- **Lighting:** flood — flood; hemisphere + key light tuned to the 2D palette
- **Set:** the ark in a great sea of rain, the water over the hills, the animals in the dark below
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`soaked` `aquatic` `nautical`

