# Mount Carmel

**Mood board 3 of 7** — Eiljah (1 Kings 17–19, 21; 2 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act3_carmel.json` |
| SVG assets | `../assets/svg/act_03_carmel/` |
| 3D scene | `eiljah-carmel` in `../tools/shot-designer/scenes/` |
| Particle mode | wind_carmel — wind_carmel |
| Game beat | Repair the altar with twelve stones. — assembly |

> "After a long drought, the LORD told Elijah to show himself to Ahab. The time had come to announce that rain would return."

## Director notes

The widow's son falls ill and dies; Elijah carries him upstairs, stretches himself on the boy three times, and prays until life returns. Stage: a rooftop chamber at night, the prophet on the bed, the boy still, then stirring; a single oil lamp, deep shadow, held breath.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_carmel/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_carmel/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `elijah_act3_a_background.svg`, `elijah_act3_a_middle_ground.svg`, and `elijah_act3_a_foreground.svg`.
- `b_core_action/` contains `elijah_act3_b_background.svg`, `elijah_act3_b_middle_ground.svg`, and `elijah_act3_b_foreground.svg`.
- `c_resolve/` contains `elijah_act3_c_background.svg`, `elijah_act3_c_middle_ground.svg`, and `elijah_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a rooftop chamber at night, the prophet on the bed, the boy still, then stirring |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#8b2500` (deep) → `#3d1200` (dark) → `#1a0700` (dark)
- **Vignette:** radial gradient centred at 50% 80% — the eye lands here first
- **Ambience:** wind_carmel particles drift across the panels (wind_carmel)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `eiljah-carmel`

- **File:** `../tools/shot-designer/scenes/eiljah-carmel.js`, registered in `scenes/manifest.json`
- **Lighting:** wind_carmel — wind_carmel; hemisphere + key light tuned to the 2D palette
- **Set:** a rooftop chamber at night, the prophet on the bed, the boy still, then stirring
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `prophetic` `tender`

