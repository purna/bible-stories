# Ch.6 · At the Gate

**Mood board 6 of 8** — Ruth (Ruth 1–4)

| | |
| --- | --- |
| Data file | `../data/act6_at_the_gate.json` |
| SVG assets | `../assets/svg/act_06_at_the_gate/` |
| 3D scene | `ruth-at-the-gate` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Arrange witnesses and present the redemption choice. — observation |

> "Boaz went up to the town gate and sat down there. The guardian-redeemer whom Boaz had mentioned came along. Boaz called him to sit."

## Director notes

Boaz sits at the city gate with the elders, and the nearer kinsman is asked to redeem; he refuses, and Boaz takes Ruth. Stage: a city gate at noon, ten elders in a circle, a sandal passed, a woman at the edge of the meeting; the transaction of a life.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_at_the_gate/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_at_the_gate/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `ruth_act6_a_background.svg`, `ruth_act6_a_middle_ground.svg`, and `ruth_act6_a_foreground.svg`.
- `b_core_action/` contains `ruth_act6_b_background.svg`, `ruth_act6_b_middle_ground.svg`, and `ruth_act6_b_foreground.svg`.
- `c_resolve/` contains `ruth_act6_c_background.svg`, `ruth_act6_c_middle_ground.svg`, and `ruth_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a city gate at noon, ten elders in a circle, a sandal passed, a woman at the edge of the meeting |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#b89870` (mid) → `#4a3820` (deep)
- **Vignette:** radial gradient centred at 50% 25% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `ruth-at-the-gate`

- **File:** `../tools/shot-designer/scenes/ruth-at-the-gate.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a city gate at noon, ten elders in a circle, a sandal passed, a woman at the edge of the meeting
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`threshold` `urban`

