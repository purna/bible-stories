# The Temptation

**Mood board 4 of 6** — Adam (Genesis 1–5)

| | |
| --- | --- |
| Data file | `../data/act4_temptation.json` |
| SVG assets | `../assets/svg/act_04_temptation/` |
| 3D scene | `adam-temptation` in `../tools/shot-designer/scenes/` |
| Particle mode | fire — fire |
| Game beat | Navigate abundance while leaving one tree untouched. — pathfinding |

> "The fruit was good for food and pleasing to the eye. It promised wisdom — the one thing God had withheld."

## Director notes

The man and woman dwell freely in the garden, permitted every fruit except the tree of the knowledge of good and evil. Stage: the garden's heart, one broad tree set apart in a circle of light; the couple walking away from it; abundance everywhere, one still point of restraint.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_temptation/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_temptation/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `adam_act4_a_background.svg`, `adam_act4_a_middle_ground.svg`, and `adam_act4_a_foreground.svg`.
- `b_core_action/` contains `adam_act4_b_background.svg`, `adam_act4_b_middle_ground.svg`, and `adam_act4_b_foreground.svg`.
- `c_resolve/` contains `adam_act4_c_background.svg`, `adam_act4_c_middle_ground.svg`, and `adam_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the garden's heart, one broad tree set apart in a circle of light |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#8b2500` (deep) → `#3d1200` (dark) → `#1a0700` (dark)
- **Vignette:** radial gradient centred at 50% 60% — the eye lands here first
- **Ambience:** fire particles drift across the panels (fire)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `adam-temptation`

- **File:** `../tools/shot-designer/scenes/adam-temptation.js`, registered in `scenes/manifest.json`
- **Lighting:** fire — fire; hemisphere + key light tuned to the 2D palette
- **Set:** the garden's heart, one broad tree set apart in a circle of light
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`verdant`

