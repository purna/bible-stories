# Ch.9 · New Creation

**Mood board 9 of 9** — Isaiah (Isaiah 1–12, 36–40, 53, 65–66)

| | |
| --- | --- |
| Data file | `../data/act9_new_creation.json` |
| SVG assets | `../assets/svg/act_09_new_creation/` |
| 3D scene | `isaiah-new-creation` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Restore a city garden where all can flourish. — balance |

> "Restore a city garden where all can flourish."

## Director notes

The Lord promises new heavens and a new earth, where the wolf and lamb feed together and the city needs no sun. Stage: a rebuilt city on a hill, a lion and a lamb at its gate, children in the streets; warm, golden, endless light.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_09_new_creation/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_09_new_creation/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `isaiah_act9_a_background.svg`, `isaiah_act9_a_middle_ground.svg`, and `isaiah_act9_a_foreground.svg`.
- `b_core_action/` contains `isaiah_act9_b_background.svg`, `isaiah_act9_b_middle_ground.svg`, and `isaiah_act9_b_foreground.svg`.
- `c_resolve/` contains `isaiah_act9_c_background.svg`, `isaiah_act9_c_middle_ground.svg`, and `isaiah_act9_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a rebuilt city on a hill, a lion and a lamb at its gate, children in the streets |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `isaiah-new-creation`

- **File:** `../tools/shot-designer/scenes/isaiah-new-creation.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a rebuilt city on a hill, a lion and a lamb at its gate, children in the streets
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`rolling` `threshold` `urban`

