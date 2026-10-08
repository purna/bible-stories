# Ch.2 · The Blueprint

**Mood board 2 of 10** — Noah (Genesis 6–9)

| | |
| --- | --- |
| Data file | `../data/act2_blueprint.json` |
| SVG assets | `../assets/svg/act_02_blueprint/` |
| 3D scene | `noah-blueprint` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Measure the hull to the given proportions. — assembly |

> "Three hundred cubits is the length of three football fields. Built by hand, with no machinery."

## Director notes

The ark is to be three hundred cubits long, fifty wide, and thirty high, with a roof, a door, and three decks. Stage: a man marking out the great hull with a line and a cubit rod, the shape of the ark in the dust; the light of a late afternoon on a plan of wood.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_blueprint/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_blueprint/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `noah_act2_a_background.svg`, `noah_act2_a_middle_ground.svg`, and `noah_act2_a_foreground.svg`.
- `b_core_action/` contains `noah_act2_b_background.svg`, `noah_act2_b_middle_ground.svg`, and `noah_act2_b_foreground.svg`.
- `c_resolve/` contains `noah_act2_c_background.svg`, `noah_act2_c_middle_ground.svg`, and `noah_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a man marking out the great hull with a line and a cubit rod, the shape of the ark in the dust |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1e0c` (dark) → `#150e06` (dark) → `#080502` (dark)
- **Vignette:** radial gradient centred at 50% 40% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `noah-blueprint`

- **File:** `../tools/shot-designer/scenes/noah-blueprint.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a man marking out the great hull with a line and a cubit rod, the shape of the ark in the dust
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`dusty`

