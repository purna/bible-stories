# Ch.10 · Joseph’s Coats

**Mood board 10 of 10** — Jacob (Genesis 25–37)

| | |
| --- | --- |
| Data file | `../data/act10_joseph_s_coats.json` |
| SVG assets | `../assets/svg/act_10_joseph_s_coats/` |
| 3D scene | `jacob-joseph-s-coats` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Recognise favouritism forming in the household. — match-it-up |

> "Recognise favouritism forming in the household."

## Director notes

Joseph is seventeen and his father loves him; the coat of many colours and the dreams of sheaves and stars set the brothers against him. Stage: a sunlit field of wheat, a boy in a long coat among his brothers, a sheaf bowing in a dream; gold stubble, a cold wind of envy.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_10_joseph_s_coats/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_10_joseph_s_coats/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jacob_act10_a_background.svg`, `jacob_act10_a_middle_ground.svg`, and `jacob_act10_a_foreground.svg`.
- `b_core_action/` contains `jacob_act10_b_background.svg`, `jacob_act10_b_middle_ground.svg`, and `jacob_act10_b_foreground.svg`.
- `c_resolve/` contains `jacob_act10_c_background.svg`, `jacob_act10_c_middle_ground.svg`, and `jacob_act10_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a sunlit field of wheat, a boy in a long coat among his brothers, a sheaf bowing in a dream |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jacob-joseph-s-coats`

- **File:** `../tools/shot-designer/scenes/jacob-joseph-s-coats.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a sunlit field of wheat, a boy in a long coat among his brothers, a sheaf bowing in a dream
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`pastoral` `harvest` `dreamlike`

