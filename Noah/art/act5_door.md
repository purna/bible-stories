# Ch.5 · The Door Shuts

**Mood board 5 of 10** — Noah (Genesis 6–9)

| | |
| --- | --- |
| Data file | `../data/act5_door.json` |
| SVG assets | `../assets/svg/act_05_door/` |
| 3D scene | `noah-door` in `../tools/shot-designer/scenes/` |
| Particle mode | storm — wind-driven rain, cold grey-blue, lightning flicker |
| Game beat | Finish the final checks and surrender control. — ordered rhythm |

> "On the seventh day, the sky changed. The horizon turned the colour of a bruise."

## Director notes

The Lord shuts the door of the ark, and the fountains of the deep break up, and the windows of heaven are opened. Stage: the great door closing in a darkening sky, a family inside, the first rain beginning; a world shut in, a world washed out.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_door/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_door/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `noah_act5_a_background.svg`, `noah_act5_a_middle_ground.svg`, and `noah_act5_a_foreground.svg`.
- `b_core_action/` contains `noah_act5_b_background.svg`, `noah_act5_b_middle_ground.svg`, and `noah_act5_b_foreground.svg`.
- `c_resolve/` contains `noah_act5_c_background.svg`, `noah_act5_c_middle_ground.svg`, and `noah_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the great door closing in a darkening sky, a family inside, the first rain beginning |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#101828` (dark) → `#060c18` (dark) → `#020408` (dark)
- **Vignette:** radial gradient centred at 50% 20% — the eye lands here first
- **Ambience:** storm particles drift across the panels (wind-driven rain, cold grey-blue, lightning flicker)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `noah-door`

- **File:** `../tools/shot-designer/scenes/noah-door.js`, registered in `scenes/manifest.json`
- **Lighting:** storm — wind-driven rain, cold grey-blue, lightning flicker; hemisphere + key light tuned to the 2D palette
- **Set:** the great door closing in a darkening sky, a family inside, the first rain beginning
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`soaked`

