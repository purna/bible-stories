# Ch.5 · Ebenezer

**Mood board 5 of 10** — Samuel (1 Samuel 1–16)

| | |
| --- | --- |
| Data file | `../data/act5_ebenezer.json` |
| SVG assets | `../assets/svg/act_05_ebenezer/` |
| 3D scene | `samuel-ebenezer` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Raise a memorial stone after deliverance. — assembly |

> "Raise a memorial stone after deliverance."

## Director notes

The Philistines return the ark, and Samuel sets a stone between Mizpah and Shen and calls it Ebenezer, saying: thus far the Lord has helped us. Stage: a field at dawn, a great stone being set up, the people gathered, the ark on a new cart; a victory and a memorial, the first light.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_ebenezer/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_ebenezer/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `samuel_act5_a_background.svg`, `samuel_act5_a_middle_ground.svg`, and `samuel_act5_a_foreground.svg`.
- `b_core_action/` contains `samuel_act5_b_background.svg`, `samuel_act5_b_middle_ground.svg`, and `samuel_act5_b_foreground.svg`.
- `c_resolve/` contains `samuel_act5_c_background.svg`, `samuel_act5_c_middle_ground.svg`, and `samuel_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a field at dawn, a great stone being set up, the people gathered, the ark on a new cart |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `samuel-ebenezer`

- **File:** `../tools/shot-designer/scenes/samuel-ebenezer.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a field at dawn, a great stone being set up, the people gathered, the ark on a new cart
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `pastoral` `megalithic`

