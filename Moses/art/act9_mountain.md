# Act 9 · Thunder on Sinai

**Mood board 9 of 15** — Moses (Exodus 1–40; Numbers; Deuteronomy 34)

| | |
| --- | --- |
| Data file | `../data/act9_mountain.json` |
| SVG assets | `../assets/svg/act_09_mountain/` |
| 3D scene | `moses-mountain` in `../tools/shot-designer/scenes/` |
| Particle mode | storm — wind-driven rain, cold grey-blue, lightning flicker |
| Game beat | Arrange the camp and carry the covenant words. — call-and-response |

> "In the third month after the Israelites left Egypt, they came to the desert of Sinai. They camped at the foot of the mountain."

## Director notes

The Lord comes down on Mount Sinai in fire, the mountain smokes, and the people stand at the foot, hearing the voice of the trumpet. Stage: a mountain wrapped in smoke and fire, the people at its foot, the covenant being spoken; thunder, lightning, a trumpet's long call.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_09_mountain/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_09_mountain/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `moses_act9_a_background.svg`, `moses_act9_a_middle_ground.svg`, and `moses_act9_a_foreground.svg`.
- `b_core_action/` contains `moses_act9_b_background.svg`, `moses_act9_b_middle_ground.svg`, and `moses_act9_b_foreground.svg`.
- `c_resolve/` contains `moses_act9_c_background.svg`, `moses_act9_c_middle_ground.svg`, and `moses_act9_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a mountain wrapped in smoke and fire, the people at its foot, the covenant being spoken |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1440` (dark) → `#0a0818` (dark) → `#020208` (dark)
- **Vignette:** radial gradient centred at 50% 0% — the eye lands here first
- **Ambience:** storm particles drift across the panels (wind-driven rain, cold grey-blue, lightning flicker)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `moses-mountain`

- **File:** `../tools/shot-designer/scenes/moses-mountain.js`, registered in `scenes/manifest.json`
- **Lighting:** storm — wind-driven rain, cold grey-blue, lightning flicker; hemisphere + key light tuned to the 2D palette
- **Set:** a mountain wrapped in smoke and fire, the people at its foot, the covenant being spoken
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`firelight` `electric` `ominous` `lofty` `solemn`

