# Ch.7 · The Cistern

**Mood board 7 of 10** — Jeremiah (Jeremiah 1–39, 31–32)

| | |
| --- | --- |
| Data file | `../data/act7_the_cistern.json` |
| SVG assets | `../assets/svg/act_07_the_cistern/` |
| 3D scene | `jeremiah-the-cistern` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Coordinate Ebed-melech’s rope rescue. — watch-and-move |

> "Coordinate Ebed-melech’s rope rescue."

## Director notes

The officials cast Jeremiah into the cistern of Malchiah, in the court of the guard, and Ebed-melech the Cushite lifts him out with rags and ropes. Stage: a dark cistern with mud and water at the bottom, ropes and old clothes lowered from above; a rescuer's hand in the dark; the king's court in the light above.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_the_cistern/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_the_cistern/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jeremiah_act7_a_background.svg`, `jeremiah_act7_a_middle_ground.svg`, and `jeremiah_act7_a_foreground.svg`.
- `b_core_action/` contains `jeremiah_act7_b_background.svg`, `jeremiah_act7_b_middle_ground.svg`, and `jeremiah_act7_b_foreground.svg`.
- `c_resolve/` contains `jeremiah_act7_c_background.svg`, `jeremiah_act7_c_middle_ground.svg`, and `jeremiah_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a dark cistern with mud and water at the bottom, ropes and old clothes lowered from above |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jeremiah-the-cistern`

- **File:** `../tools/shot-designer/scenes/jeremiah-the-cistern.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a dark cistern with mud and water at the bottom, ropes and old clothes lowered from above
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `regal`

