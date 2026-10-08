# Ch.2 · Goliath

**Mood board 2 of 12** — David (1 Samuel 16 – 1 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act2_goliath.json` |
| SVG assets | `../assets/svg/act_02_goliath/` |
| 3D scene | `david-goliath` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Time a sling throw after refusing heavy armour. — ready-then-act |

> "For forty days the Philistine champion stood in the valley, morning and evening, calling for a champion of Israel. His height was six cubits and his spear was like a weaver's beam."

## Director notes

The Philistine giant struts between the armies; David refuses Saul's armour and steps out with staff, sling and five stones. Stage: the Valley of Elah, two armies on facing ridges, a nine-foot figure in bronze scale, a boy walking steadily toward him; dry heat, dust, a streambed glittering.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_goliath/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_goliath/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `david_act2_a_background.svg`, `david_act2_a_middle_ground.svg`, and `david_act2_a_foreground.svg`.
- `b_core_action/` contains `david_act2_b_background.svg`, `david_act2_b_middle_ground.svg`, and `david_act2_b_foreground.svg`.
- `c_resolve/` contains `david_act2_c_background.svg`, `david_act2_c_middle_ground.svg`, and `david_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the Valley of Elah, two armies on facing ridges, a nine-foot figure in bronze scale, a boy walking steadily toward him |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#120a04` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 60% 40% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `david-goliath`

- **File:** `../tools/shot-designer/scenes/david-goliath.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** the Valley of Elah, two armies on facing ridges, a nine-foot figure in bronze scale, a boy walking steadily toward him
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`dusty`

