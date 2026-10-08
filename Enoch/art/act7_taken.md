# Ch.7 · Taken

**Mood board 7 of 7** — Enoch (Genesis 5:21–24)

| | |
| --- | --- |
| Data file | `../data/act7_taken.json` |
| SVG assets | `../assets/svg/act_07_taken/` |
| 3D scene | `enoch-taken` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Let go of the route and enter the final light. — pathfinding |

> "Let go of the route and enter the final light."

## Director notes

Enoch is not, for God takes him — no grave, no death, only the road that ends in light. Stage: a hilltop road at sunrise, the figure fading into a shining mist; the city below stirring awake; a doorway of light at the horizon.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_taken/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_taken/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `enoch_act7_a_background.svg`, `enoch_act7_a_middle_ground.svg`, and `enoch_act7_a_foreground.svg`.
- `b_core_action/` contains `enoch_act7_b_background.svg`, `enoch_act7_b_middle_ground.svg`, and `enoch_act7_b_foreground.svg`.
- `c_resolve/` contains `enoch_act7_c_background.svg`, `enoch_act7_c_middle_ground.svg`, and `enoch_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a hilltop road at sunrise, the figure fading into a shining mist |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `enoch-taken`

- **File:** `../tools/shot-designer/scenes/enoch-taken.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a hilltop road at sunrise, the figure fading into a shining mist
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `numinous` `urban` `mortal` `funereal` `peripatetic`

