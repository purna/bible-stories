# Ch.8 · Dry Ground

**Mood board 8 of 10** — Noah (Genesis 6–9)

| | |
| --- | --- |
| Data file | `../data/act8_dryground.json` |
| SVG assets | `../assets/svg/act_08_dryground/` |
| 3D scene | `noah-dryground` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Release animals habitat by habitat. — gather-with-care |

> "The ramp came down. For the first time in over a year, Noah stepped onto solid ground."

## Director notes

The ark rests on the mountains of Ararat, and Noah opens the window and looks out on the new earth. Stage: a mountain peak at sunrise, the ark resting on the rock, the water gone from the valleys; a man stepping out onto the wet ground, the first day.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_08_dryground/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_08_dryground/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `noah_act8_a_background.svg`, `noah_act8_a_middle_ground.svg`, and `noah_act8_a_foreground.svg`.
- `b_core_action/` contains `noah_act8_b_background.svg`, `noah_act8_b_middle_ground.svg`, and `noah_act8_b_foreground.svg`.
- `c_resolve/` contains `noah_act8_c_background.svg`, `noah_act8_c_middle_ground.svg`, and `noah_act8_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a mountain peak at sunrise, the ark resting on the rock, the water gone from the valleys |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a3010` (dark) → `#0c1a08` (dark) → `#050a04` (dark)
- **Vignette:** radial gradient centred at 50% 40% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `noah-dryground`

- **File:** `../tools/shot-designer/scenes/noah-dryground.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a mountain peak at sunrise, the ark resting on the rock, the water gone from the valleys
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `first-light` `lofty` `craggy`

