# Ch.3 · Crossing Jordan

**Mood board 3 of 10** — Joshua (Joshua 1–24)

| | |
| --- | --- |
| Data file | `../data/act3_crossing_jordan.json` |
| SVG assets | `../assets/svg/act_03_crossing_jordan/` |
| 3D scene | `joshua-crossing-jordan` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Carry twelve memorial stones from the riverbed. — pathfinding |

> "Carry twelve memorial stones from the riverbed."

## Director notes

The priests carry the ark into the Jordan, the waters stop, and the people cross on dry ground; twelve stones are taken from the riverbed. Stage: the river in flood, the ark in the water, the people crossing, the waters piled up; morning light, the first stones of a memorial.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_crossing_jordan/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_crossing_jordan/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joshua_act3_a_background.svg`, `joshua_act3_a_middle_ground.svg`, and `joshua_act3_a_foreground.svg`.
- `b_core_action/` contains `joshua_act3_b_background.svg`, `joshua_act3_b_middle_ground.svg`, and `joshua_act3_b_foreground.svg`.
- `c_resolve/` contains `joshua_act3_c_background.svg`, `joshua_act3_c_middle_ground.svg`, and `joshua_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the river in flood, the ark in the water, the people crossing, the waters piled up |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joshua-crossing-jordan`

- **File:** `../tools/shot-designer/scenes/joshua-crossing-jordan.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** the river in flood, the ark in the water, the people crossing, the waters piled up
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`deluge` `aquatic` `riverine`

