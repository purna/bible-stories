# Ch.4 · Jericho

**Mood board 4 of 10** — Joshua (Joshua 1–24)

| | |
| --- | --- |
| Data file | `../data/act4_jericho.json` |
| SVG assets | `../assets/svg/act_04_jericho/` |
| 3D scene | `joshua-jericho` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | March the pattern, sound the trumpets, protect Rahab. — ready-then-act |

> "March the pattern, sound the trumpets, protect Rahab."

## Director notes

The people march around the city once a day for six days, and seven times on the seventh, and the walls fall. Stage: a walled city at dawn, a silent people marching, priests with rams' horns, the walls crumbling; dust, a shout, a city laid open.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_jericho/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_jericho/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joshua_act4_a_background.svg`, `joshua_act4_a_middle_ground.svg`, and `joshua_act4_a_foreground.svg`.
- `b_core_action/` contains `joshua_act4_b_background.svg`, `joshua_act4_b_middle_ground.svg`, and `joshua_act4_b_foreground.svg`.
- `c_resolve/` contains `joshua_act4_c_background.svg`, `joshua_act4_c_middle_ground.svg`, and `joshua_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a walled city at dawn, a silent people marching, priests with rams' horns, the walls crumbling |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1024` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joshua-jericho`

- **File:** `../tools/shot-designer/scenes/joshua-jericho.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a walled city at dawn, a silent people marching, priests with rams' horns, the walls crumbling
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `dusty` `urban`

