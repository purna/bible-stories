# Ch.5 · Remembered

**Mood board 5 of 8** — Hannah (1 Samuel 1–2)

| | |
| --- | --- |
| Data file | `../data/act5_remembered.json` |
| SVG assets | `../assets/svg/act_05_remembered/` |
| 3D scene | `hannah-remembered` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Prepare for Samuel’s birth. — gather-with-care |

> "Prepare for Samuel’s birth."

## Director notes

The family returns home, and Hannah's prayer is remembered; a child is conceived. Stage: a house in the hill country at sunrise, a doorway, a hopeful morning; the road behind and the road ahead; a quiet room being prepared.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_remembered/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_remembered/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `hannah_act5_a_background.svg`, `hannah_act5_a_middle_ground.svg`, and `hannah_act5_a_foreground.svg`.
- `b_core_action/` contains `hannah_act5_b_background.svg`, `hannah_act5_b_middle_ground.svg`, and `hannah_act5_b_foreground.svg`.
- `c_resolve/` contains `hannah_act5_c_background.svg`, `hannah_act5_c_middle_ground.svg`, and `hannah_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a house in the hill country at sunrise, a doorway, a hopeful morning |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241810` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `hannah-remembered`

- **File:** `../tools/shot-designer/scenes/hannah-remembered.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a house in the hill country at sunrise, a doorway, a hopeful morning
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `devotional` `tender` `rolling` `peripatetic`

