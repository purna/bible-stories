# Helper Suitable

**Mood board 3 of 6** — Adam (Genesis 1–5)

| | |
| --- | --- |
| Data file | `../data/act3_helper.json` |
| SVG assets | `../assets/svg/act_03_helper/` |
| 3D scene | `adam-helper` in `../tools/shot-designer/scenes/` |
| Particle mode | dream — dream |
| Game beat | Build a shared shelter and tend one plot together. — assembly |

> "The Lord God said, 'It is not good for the man to be alone. I will make a helper suitable for him.'"

## Director notes

The animals are brought to Adam for naming, and from his side God forms the woman. Stage: a shaded clearing at dusk, creatures gathering in pairs, the man reaching toward the new companion; rose-gold evening light, a sense of completion.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_helper/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_helper/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `adam_act3_a_background.svg`, `adam_act3_a_middle_ground.svg`, and `adam_act3_a_foreground.svg`.
- `b_core_action/` contains `adam_act3_b_background.svg`, `adam_act3_b_middle_ground.svg`, and `adam_act3_b_foreground.svg`.
- `c_resolve/` contains `adam_act3_c_background.svg`, `adam_act3_c_middle_ground.svg`, and `adam_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a shaded clearing at dusk, creatures gathering in pairs, the man reaching toward the new companion |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2b1220` (dark) → `#160a14` (dark) → `#0d0709` (dark)
- **Vignette:** radial gradient centred at 50% 40% — the eye lands here first
- **Ambience:** dream particles drift across the panels (dream)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `adam-helper`

- **File:** `../tools/shot-designer/scenes/adam-helper.js`, registered in `scenes/manifest.json`
- **Lighting:** dream — dream; hemisphere + key light tuned to the 2D palette
- **Set:** a shaded clearing at dusk, creatures gathering in pairs, the man reaching toward the new companion
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`golden-hour` `lamplight` `numinous`

