# Ch.4 · Misunderstood

**Mood board 4 of 8** — Hannah (1 Samuel 1–2)

| | |
| --- | --- |
| Data file | `../data/act4_misunderstood.json` |
| SVG assets | `../assets/svg/act_04_misunderstood/` |
| 3D scene | `hannah-misunderstood` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Explain quiet prayer to Eli. — call-and-response |

> "Explain quiet prayer to Eli."

## Director notes

Eli watches her and thinks she is drunk; she answers, 'No, my lord, I am a woman troubled in spirit.' Stage: the old priest at the entrance, hand on the doorpost, the woman defending her prayer; a narrow doorway, lamplight on two faces.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_misunderstood/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_misunderstood/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `hannah_act4_a_background.svg`, `hannah_act4_a_middle_ground.svg`, and `hannah_act4_a_foreground.svg`.
- `b_core_action/` contains `hannah_act4_b_background.svg`, `hannah_act4_b_middle_ground.svg`, and `hannah_act4_b_foreground.svg`.
- `c_resolve/` contains `hannah_act4_c_background.svg`, `hannah_act4_c_middle_ground.svg`, and `hannah_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the old priest at the entrance, hand on the doorpost, the woman defending her prayer |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1024` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `hannah-misunderstood`

- **File:** `../tools/shot-designer/scenes/hannah-misunderstood.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** the old priest at the entrance, hand on the doorpost, the woman defending her prayer
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`devotional`

