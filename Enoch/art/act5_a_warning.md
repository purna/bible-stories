# Ch.5 · A Warning

**Mood board 5 of 7** — Enoch (Genesis 5:21–24)

| | |
| --- | --- |
| Data file | `../data/act5_a_warning.json` |
| SVG assets | `../assets/svg/act_05_a_warning/` |
| 3D scene | `enoch-a-warning` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Deliver a hard truth without cruelty. — call-and-response |

> "Deliver a hard truth without cruelty."

## Director notes

Enoch prophesies: the Lord comes with ten thousands of his holy ones to judge all. Stage: a crowded market square at midday, a lone voice rising, the crowd turning; the sky darkening at the edges; a still point of dread.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_a_warning/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_a_warning/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `enoch_act5_a_background.svg`, `enoch_act5_a_middle_ground.svg`, and `enoch_act5_a_foreground.svg`.
- `b_core_action/` contains `enoch_act5_b_background.svg`, `enoch_act5_b_middle_ground.svg`, and `enoch_act5_b_foreground.svg`.
- `c_resolve/` contains `enoch_act5_c_background.svg`, `enoch_act5_c_middle_ground.svg`, and `enoch_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a crowded market square at midday, a lone voice rising, the crowd turning |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241810` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `enoch-a-warning`

- **File:** `../tools/shot-designer/scenes/enoch-a-warning.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a crowded market square at midday, a lone voice rising, the crowd turning
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood



