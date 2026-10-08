# Ch.7 · Comfort My People

**Mood board 7 of 9** — Isaiah (Isaiah 1–12, 36–40, 53, 65–66)

| | |
| --- | --- |
| Data file | `../data/act7_comfort_my_people.json` |
| SVG assets | `../assets/svg/act_07_comfort_my_people/` |
| 3D scene | `isaiah-comfort-my-people` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Build a road of return through the wilderness. — assembly |

> "Build a road of return through the wilderness."

## Director notes

A voice cries: prepare the way of the Lord in the wilderness, every valley shall be exalted. Stage: a desert road being built at dawn, a voice in the waste land, the glory of the Lord to be revealed; a smooth highway rising over the sand.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_comfort_my_people/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_comfort_my_people/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `isaiah_act7_a_background.svg`, `isaiah_act7_a_middle_ground.svg`, and `isaiah_act7_a_foreground.svg`.
- `b_core_action/` contains `isaiah_act7_b_background.svg`, `isaiah_act7_b_middle_ground.svg`, and `isaiah_act7_b_foreground.svg`.
- `c_resolve/` contains `isaiah_act7_c_background.svg`, `isaiah_act7_c_middle_ground.svg`, and `isaiah_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a desert road being built at dawn, a voice in the waste land, the glory of the Lord to be revealed |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `isaiah-comfort-my-people`

- **File:** `../tools/shot-designer/scenes/isaiah-comfort-my-people.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a desert road being built at dawn, a voice in the waste land, the glory of the Lord to be revealed
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `arid` `barren` `peripatetic`

