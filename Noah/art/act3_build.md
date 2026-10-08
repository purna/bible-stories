# Ch.3 · The Long Build

**Mood board 3 of 10** — Noah (Genesis 6–9)

| | |
| --- | --- |
| Data file | `../data/act3_build.json` |
| SVG assets | `../assets/svg/act_03_build/` |
| 3D scene | `noah-build` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Gather timber, fit planks, and seal with pitch. — assembly |

> "Years passed. Ten. Twenty. The ribs of the ark rose above the treeline."

## Director notes

Noah and his sons gather timber, fit planks, and seal them with pitch, and the work goes on for a hundred and twenty years. Stage: a hillside workshop through the seasons, a hull rising, a family at work, the neighbours watching and mocking; a long, patient, quiet labour.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_build/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_build/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `noah_act3_a_background.svg`, `noah_act3_a_middle_ground.svg`, and `noah_act3_a_foreground.svg`.
- `b_core_action/` contains `noah_act3_b_background.svg`, `noah_act3_b_middle_ground.svg`, and `noah_act3_b_foreground.svg`.
- `c_resolve/` contains `noah_act3_c_background.svg`, `noah_act3_c_middle_ground.svg`, and `noah_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a hillside workshop through the seasons, a hull rising, a family at work, the neighbours watching and mocking |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#281808` (dark) → `#120c04` (dark) → `#080402` (dark)
- **Vignette:** radial gradient centred at 35% 50% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `noah-build`

- **File:** `../tools/shot-designer/scenes/noah-build.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a hillside workshop through the seasons, a hull rising, a family at work, the neighbours watching and mocking
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood



