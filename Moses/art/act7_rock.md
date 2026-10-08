# Act 7 · Water from Rock and Victory

**Mood board 7 of 15** — Moses (Exodus 1–40; Numbers; Deuteronomy 34)

| | |
| --- | --- |
| Data file | `../data/act7_rock.json` |
| SVG assets | `../assets/svg/act_07_rock/` |
| 3D scene | `moses-rock` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Find water in the desert and prevail over attackers. — pathfinding |

> "Manna covered the ground each morning, and quail came in the evening. The people gathered only what the day required."

## Director notes

At Marah a tree thrown into the water makes it sweet; at Rephidim Moses strikes the rock and water flows, and while Joshua fights Amalek, Moses holds up his hands until Aaron and Hur steady them. Stage: a dry wadi at dusk, a bitter pool and dead reed beds, a rock split open and running with water, a ridge where a man with raised arms is held up by two others; the clang of battle below, the sound of water in dry ground.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_rock/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_rock/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `moses_act7_a_background.svg`, `moses_act7_a_middle_ground.svg`, and `moses_act7_a_foreground.svg`.
- `b_core_action/` contains `moses_act7_b_background.svg`, `moses_act7_b_middle_ground.svg`, and `moses_act7_b_foreground.svg`.
- `c_resolve/` contains `moses_act7_c_background.svg`, `moses_act7_c_middle_ground.svg`, and `moses_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a dry wadi at dusk, a bitter pool and dead reed beds, a rock split open and running with water, a ridge where a man with raised arms is held up by two others |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#0c121a` (dark) → `#18222c` (dark) → `#06080c` (dark)
- **Vignette:** radial gradient centred at 50% 45% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `moses-rock`

- **File:** `../tools/shot-designer/scenes/moses-rock.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a dry wadi at dusk, a bitter pool and dead reed beds, a rock split open and running with water, a ridge where a man with raised arms is held up by two others
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`arid` `craggy` `aquatic` `military-camp` `barren`
