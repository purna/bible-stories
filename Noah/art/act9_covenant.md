# Ch.9 · The Altar & the Covenant

**Mood board 9 of 10** — Noah (Genesis 6–9)

| | |
| --- | --- |
| Data file | `../data/act9_covenant.json` |
| SVG assets | `../assets/svg/act_09_covenant/` |
| 3D scene | `noah-covenant` in `../tools/shot-designer/scenes/` |
| Particle mode | rainbow — rainbow |
| Game beat | Build the altar and reveal the rainbow. — assembly |

> "The first thing Noah did on dry land was not rebuild a house. It was build an altar."

## Director notes

Noah builds an altar, offers burnt offerings, and the Lord sets the rainbow in the cloud as a sign of the covenant. Stage: an altar of stone on a mountain, the smoke rising, the sky clearing, a rainbow across the whole earth; a promise being made in colour and light.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_09_covenant/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_09_covenant/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `noah_act9_a_background.svg`, `noah_act9_a_middle_ground.svg`, and `noah_act9_a_foreground.svg`.
- `b_core_action/` contains `noah_act9_b_background.svg`, `noah_act9_b_middle_ground.svg`, and `noah_act9_b_foreground.svg`.
- `c_resolve/` contains `noah_act9_c_background.svg`, `noah_act9_c_middle_ground.svg`, and `noah_act9_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: an altar of stone on a mountain, the smoke rising, the sky clearing, a rainbow across the whole earth |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#141e2e` (dark) → `#081018` (dark) → `#020508` (dark)
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** rainbow particles drift across the panels (rainbow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `noah-covenant`

- **File:** `../tools/shot-designer/scenes/noah-covenant.js`, registered in `scenes/manifest.json`
- **Lighting:** rainbow — rainbow; hemisphere + key light tuned to the 2D palette
- **Set:** an altar of stone on a mountain, the smoke rising, the sky clearing, a rainbow across the whole earth
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`sacred` `lofty` `megalithic` `solemn` `aspirational`

