# Ch.7 · The Floating Axe

**Mood board 7 of 9** — Elisha (1 Kings 19; 2 Kings 2–7)

| | |
| --- | --- |
| Data file | `../data/act7_the_floating_axe.json` |
| SVG assets | `../assets/svg/act_07_the_floating_axe/` |
| 3D scene | `elisha-the-floating-axe` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Mark where the borrowed iron fell. — ordered rhythm |

> "Mark where the borrowed iron fell."

## Director notes

A borrowed axe head sinks in the Jordan; Elisha cuts a stick, throws it in, and the iron swims. Stage: a river bend at dawn, an axe glinting on the bed, a stick tossed from the bank, the iron rising; cool water, a small miracle.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_the_floating_axe/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_the_floating_axe/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `elisha_act7_a_background.svg`, `elisha_act7_a_middle_ground.svg`, and `elisha_act7_a_foreground.svg`.
- `b_core_action/` contains `elisha_act7_b_background.svg`, `elisha_act7_b_middle_ground.svg`, and `elisha_act7_b_foreground.svg`.
- `c_resolve/` contains `elisha_act7_c_background.svg`, `elisha_act7_c_middle_ground.svg`, and `elisha_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a river bend at dawn, an axe glinting on the bed, a stick tossed from the bank, the iron rising |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `elisha-the-floating-axe`

- **File:** `../tools/shot-designer/scenes/elisha-the-floating-axe.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a river bend at dawn, an axe glinting on the bed, a stick tossed from the bank, the iron rising
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `riverine` `first-light`

