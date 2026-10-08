# Ch.10 · Lament and Hope

**Mood board 10 of 10** — Jeremiah (Jeremiah 1–39, 31–32)

| | |
| --- | --- |
| Data file | `../data/act10_lament_and_hope.json` |
| SVG assets | `../assets/svg/act_10_lament_and_hope/` |
| 3D scene | `jeremiah-lament-and-hope` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Pair grief lines with stubborn hope. — match-it-up |

> "Pair grief lines with stubborn hope."

## Director notes

The Lord promises a new covenant written on the heart, and a voice in Ramah is comforted: your work shall be rewarded. Stage: a woman weeping by a tent at dawn, the prophet pointing to a returning exodus, a green shoot in a ruined field; the first light of consolation.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_10_lament_and_hope/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_10_lament_and_hope/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jeremiah_act10_a_background.svg`, `jeremiah_act10_a_middle_ground.svg`, and `jeremiah_act10_a_foreground.svg`.
- `b_core_action/` contains `jeremiah_act10_b_background.svg`, `jeremiah_act10_b_middle_ground.svg`, and `jeremiah_act10_b_foreground.svg`.
- `c_resolve/` contains `jeremiah_act10_c_background.svg`, `jeremiah_act10_c_middle_ground.svg`, and `jeremiah_act10_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a woman weeping by a tent at dawn, the prophet pointing to a returning exodus, a green shoot in a ruined field |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jeremiah-lament-and-hope`

- **File:** `../tools/shot-designer/scenes/jeremiah-lament-and-hope.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a woman weeping by a tent at dawn, the prophet pointing to a returning exodus, a green shoot in a ruined field
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `pastoral` `nomadic` `prophetic` `aspirational` `solemn`

