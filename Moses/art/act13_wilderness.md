# Act 13 · The Long Wilderness

**Mood board 13 of 15** — Moses (Exodus 1–40; Numbers; Deuteronomy 34)

| | |
| --- | --- |
| Data file | `../data/manifest.json` |
| SVG assets | `../assets/svg/act13_the_long_wilderness/` |
| 3D scene | `moses-wilderness` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Navigate a provision-and-trust journey map. — pathfinding |

> "Spies went up into Canaan — twelve of them, one from each tribe. After forty days they came back."

## Director notes

The people wander in the wilderness, and the Lord sends manna, water from the rock, and the bronze serpent to save. Stage: a desert of tents and wandering, a rock giving water, a serpent of bronze on a pole, a generation passing and a new one rising; the long road to the border.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act13_the_long_wilderness/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act13_the_long_wilderness/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `moses_act13_a_background.svg`, `moses_act13_a_middle_ground.svg`, and `moses_act13_a_foreground.svg`.
- `b_core_action/` contains `moses_act13_b_background.svg`, `moses_act13_b_middle_ground.svg`, and `moses_act13_b_foreground.svg`.
- `c_resolve/` contains `moses_act13_c_background.svg`, `moses_act13_c_middle_ground.svg`, and `moses_act13_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json`.

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a desert of tents and wandering, a rock giving water, a serpent of bronze on a pole, a generation passing and a new one rising |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#141008` (dark) → `#241c12` (dark) → `#080604` (dark)
- **Vignette:** radial gradient centred at 50% 40% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `moses-wilderness`

- **File:** `../tools/shot-designer/scenes/moses-wilderness.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a desert of tents and wandering, a rock giving water, a serpent of bronze on a pole, a generation passing and a new one rising
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `arid` `craggy` `barren` `peripatetic`

