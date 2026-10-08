# Ch.7 · The Victory

**Mood board 7 of 7** — Gideon (Judges 6–8)

| | |
| --- | --- |
| Data file | `../data/act7_the_victory.json` |
| SVG assets | `../assets/svg/act_07_the_victory/` |
| 3D scene | `gideon-the-victory` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Pursue the kings, declare the Lord's rule. — assembly |

> "Gideon crosses the Jordan, faint but pursuing. He asks Succoth and Penuel for bread; both refuse him."

## Director notes

The Midianite kings are pursued to Karkor and captured, and Israel is freed for forty years; Gideon refuses the crown. Stage: a desert ford at dawn, the kings in purple caught by the river, the exhausted army triumphant; a man refusing a crown; long light over a quiet land.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_the_victory/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_the_victory/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `gideon_act7_a_background.svg`, `gideon_act7_a_middle_ground.svg`, and `gideon_act7_a_foreground.svg`.
- `b_core_action/` contains `gideon_act7_b_background.svg`, `gideon_act7_b_middle_ground.svg`, and `gideon_act7_b_foreground.svg`.
- `c_resolve/` contains `gideon_act7_c_background.svg`, `gideon_act7_c_middle_ground.svg`, and `gideon_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a desert ford at dawn, the kings in purple caught by the river, the exhausted army triumphant |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2010` (dark) → `#0a0502` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `gideon-the-victory`

- **File:** `../tools/shot-designer/scenes/gideon-the-victory.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a desert ford at dawn, the kings in purple caught by the river, the exhausted army triumphant
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`riverine` `first-light` `arid` `military`

