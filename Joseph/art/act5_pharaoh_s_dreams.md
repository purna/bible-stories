# Ch.5 · Pharaoh’s Dreams

**Mood board 5 of 10** — Joseph (Genesis 37–47)

| | |
| --- | --- |
| Data file | `../data/act5_pharaoh_s_dreams.json` |
| SVG assets | `../assets/svg/act_05_pharaoh_s_dreams/` |
| 3D scene | `joseph-pharaoh-s-dreams` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Pair cows and grain with seven-year cycles. — gather-with-care |

> "Pair cows and grain with seven-year cycles."

## Director notes

Pharaoh dreams of seven fat cows and seven lean, seven full ears and seven thin; Joseph is called from the dungeon to interpret. Stage: a throne room by the Nile at dawn, a king in gold, a summoned prisoner, seven fat and seven gaunt cattle in the dream's smoke; a single meaning, a nation listening.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_pharaoh_s_dreams/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_pharaoh_s_dreams/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joseph_act5_a_background.svg`, `joseph_act5_a_middle_ground.svg`, and `joseph_act5_a_foreground.svg`.
- `b_core_action/` contains `joseph_act5_b_background.svg`, `joseph_act5_b_middle_ground.svg`, and `joseph_act5_b_foreground.svg`.
- `c_resolve/` contains `joseph_act5_c_background.svg`, `joseph_act5_c_middle_ground.svg`, and `joseph_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a throne room by the Nile at dawn, a king in gold, a summoned prisoner, seven fat and seven gaunt cattle in the dream's smoke |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241810` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joseph-pharaoh-s-dreams`

- **File:** `../tools/shot-designer/scenes/joseph-pharaoh-s-dreams.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a throne room by the Nile at dawn, a king in gold, a summoned prisoner, seven fat and seven gaunt cattle in the dream's smoke
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `regal` `dreamlike`

