# Ch.4 · Rachel at the Well

**Mood board 4 of 10** — Jacob (Genesis 25–37)

| | |
| --- | --- |
| Data file | `../data/act4_rachel_at_the_well.json` |
| SVG assets | `../assets/svg/act_04_rachel_at_the_well/` |
| 3D scene | `jacob-rachel-at-the-well` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Move the stone and water the flock. — gather-with-care |

> "Move the stone and water the flock."

## Director notes

At Haran Jacob rolls the stone from the well and waters Laban's flock for Rachel, and kisses her and weeps. Stage: a well in a highland pasture at noon, a great stone rolled aside, a shepherdess watering her sheep; a sudden meeting, water and tears.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_rachel_at_the_well/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_rachel_at_the_well/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jacob_act4_a_background.svg`, `jacob_act4_a_middle_ground.svg`, and `jacob_act4_a_foreground.svg`.
- `b_core_action/` contains `jacob_act4_b_background.svg`, `jacob_act4_b_middle_ground.svg`, and `jacob_act4_b_foreground.svg`.
- `c_resolve/` contains `jacob_act4_c_background.svg`, `jacob_act4_c_middle_ground.svg`, and `jacob_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a well in a highland pasture at noon, a great stone rolled aside, a shepherdess watering her sheep |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1024` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jacob-rachel-at-the-well`

- **File:** `../tools/shot-designer/scenes/jacob-rachel-at-the-well.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a well in a highland pasture at noon, a great stone rolled aside, a shepherdess watering her sheep
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `pastoral` `megalithic`

