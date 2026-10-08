# Ch.1 · The Call

**Mood board 1 of 10** — Jeremiah (Jeremiah 1–39, 31–32)

| | |
| --- | --- |
| Data file | `../data/act1_the_call.json` |
| SVG assets | `../assets/svg/act_01_the_call/` |
| 3D scene | `jeremiah-the-call` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Touch the right words to the young prophet’s mouth. — call-and-response |

> "Touch the right words to the young prophet’s mouth."

## Director notes

The Lord touches the prophet's mouth and says: I have put my words in your mouth, to pluck up and to break down, to build and to plant. Stage: a young man at a village gate at dawn, a hand of light at his mouth, a branch of an almond tree nearby; a thin morning, a heavy commission.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_the_call/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_the_call/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jeremiah_act1_a_background.svg`, `jeremiah_act1_a_middle_ground.svg`, and `jeremiah_act1_a_foreground.svg`.
- `b_core_action/` contains `jeremiah_act1_b_background.svg`, `jeremiah_act1_b_middle_ground.svg`, and `jeremiah_act1_b_foreground.svg`.
- `c_resolve/` contains `jeremiah_act1_c_background.svg`, `jeremiah_act1_c_middle_ground.svg`, and `jeremiah_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a young man at a village gate at dawn, a hand of light at his mouth, a branch of an almond tree nearby |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jeremiah-the-call`

- **File:** `../tools/shot-designer/scenes/jeremiah-the-call.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a young man at a village gate at dawn, a hand of light at his mouth, a branch of an almond tree nearby
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `verdant` `prophetic` `threshold`

