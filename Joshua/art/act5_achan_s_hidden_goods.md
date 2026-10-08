# Ch.5 · Achan’s Hidden Goods

**Mood board 5 of 10** — Joshua (Joshua 1–24)

| | |
| --- | --- |
| Data file | `../data/act5_achan_s_hidden_goods.json` |
| SVG assets | `../assets/svg/act_05_achan_s_hidden_goods/` |
| 3D scene | `joshua-achan-s-hidden-goods` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Trace the community’s loss to the buried objects. — match-it-up |

> "Trace the community’s loss to the buried objects."

## Director notes

Achan hides a Babylonian garment and silver from the spoil, and the loss at Ai is traced to him. Stage: a camp at dusk, a tent with a hidden seam, a man and his family among the stones; a search in the dark, a fire rising, a community's grief.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_achan_s_hidden_goods/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_achan_s_hidden_goods/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joshua_act5_a_background.svg`, `joshua_act5_a_middle_ground.svg`, and `joshua_act5_a_foreground.svg`.
- `b_core_action/` contains `joshua_act5_b_background.svg`, `joshua_act5_b_middle_ground.svg`, and `joshua_act5_b_foreground.svg`.
- `c_resolve/` contains `joshua_act5_c_background.svg`, `joshua_act5_c_middle_ground.svg`, and `joshua_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a camp at dusk, a tent with a hidden seam, a man and his family among the stones |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241810` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joshua-achan-s-hidden-goods`

- **File:** `../tools/shot-designer/scenes/joshua-achan-s-hidden-goods.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a camp at dusk, a tent with a hidden seam, a man and his family among the stones
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`firelight` `golden-hour` `nomadic` `military-camp`

