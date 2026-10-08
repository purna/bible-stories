# Ch.2 · Your People

**Mood board 2 of 8** — Ruth (Ruth 1–4)

| | |
| --- | --- |
| Data file | `../data/act2_your_people.json` |
| SVG assets | `../assets/svg/act_02_your_people/` |
| 3D scene | `ruth-your-people` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Follow the road to Bethlehem together. — pathfinding |

> "Naomi and Ruth walked the long road from Moab toward Bethlehem—dusty, weary, but together. The hills rose and fell like waves of stone and dry grass."

## Director notes

Ruth says: your people shall be my people, and your God my God; they arrive in Bethlehem at the beginning of the barley harvest. Stage: a small town at the start of the harvest, two women at the gate, the fields green around them; the first light of a new life.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_your_people/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_your_people/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `ruth_act2_a_background.svg`, `ruth_act2_a_middle_ground.svg`, and `ruth_act2_a_foreground.svg`.
- `b_core_action/` contains `ruth_act2_b_background.svg`, `ruth_act2_b_middle_ground.svg`, and `ruth_act2_b_foreground.svg`.
- `c_resolve/` contains `ruth_act2_c_background.svg`, `ruth_act2_c_middle_ground.svg`, and `ruth_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a small town at the start of the harvest, two women at the gate, the fields green around them |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#c89860` (light) → `#5a4028` (deep)
- **Vignette:** radial gradient centred at 50% 25% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `ruth-your-people`

- **File:** `../tools/shot-designer/scenes/ruth-your-people.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a small town at the start of the harvest, two women at the gate, the fields green around them
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`numinous` `threshold` `abundant`

