# Act 1 · The Child in the River

**Mood board 1 of 15** — Moses (Exodus 1–40; Numbers; Deuteronomy 34)

| | |
| --- | --- |
| Data file | `../data/act1_basket.json` |
| SVG assets | `../assets/svg/act_01_basket/` |
| 3D scene | `moses-basket` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Guide the basket through reeds while Miriam keeps watch. — pathfinding |

> "Hebrew slaves filled Egypt. Pharaoh ordered every newborn boy thrown into the Nile."

## Director notes

The mother hides the child for three months, then sets him in a basket of bulrushes among the reeds, where Pharaoh's daughter finds him. Stage: a river bank at dawn, tall reeds, a floating basket, a woman and her sister watching from the distance; mist on the water, a child's cry.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_basket/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_basket/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `moses_act1_a_background.svg`, `moses_act1_a_middle_ground.svg`, and `moses_act1_a_foreground.svg`.
- `b_core_action/` contains `moses_act1_b_background.svg`, `moses_act1_b_middle_ground.svg`, and `moses_act1_b_foreground.svg`.
- `c_resolve/` contains `moses_act1_c_background.svg`, `moses_act1_c_middle_ground.svg`, and `moses_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a river bank at dawn, tall reeds, a floating basket, a woman and her sister watching from the distance |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#0e1a22` (dark) → `#061018` (dark) → `#020408` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `moses-basket`

- **File:** `../tools/shot-designer/scenes/moses-basket.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a river bank at dawn, tall reeds, a floating basket, a woman and her sister watching from the distance
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `riverine` `first-light` `tender` `maternal`

