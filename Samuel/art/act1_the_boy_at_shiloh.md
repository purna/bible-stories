# Ch.1 · The Boy at Shiloh

**Mood board 1 of 10** — Samuel (1 Samuel 1–16)

| | |
| --- | --- |
| Data file | `../data/act1_the_boy_at_shiloh.json` |
| SVG assets | `../assets/svg/act_01_the_boy_at_shiloh/` |
| 3D scene | `samuel-the-boy-at-shiloh` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Complete temple tasks beside Eli. — ordered rhythm |

> "Complete temple tasks beside Eli."

## Director notes

Samuel, a child in a linen ephod, serves at the tabernacle before Eli the priest. Stage: the tabernacle court at dawn, a boy in a small ephod, an old priest on a chair by the doorpost; the ark in the dark behind, the lamp not yet gone out.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_the_boy_at_shiloh/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_the_boy_at_shiloh/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `samuel_act1_a_background.svg`, `samuel_act1_a_middle_ground.svg`, and `samuel_act1_a_foreground.svg`.
- `b_core_action/` contains `samuel_act1_b_background.svg`, `samuel_act1_b_middle_ground.svg`, and `samuel_act1_b_foreground.svg`.
- `c_resolve/` contains `samuel_act1_c_background.svg`, `samuel_act1_c_middle_ground.svg`, and `samuel_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the tabernacle court at dawn, a boy in a small ephod, an old priest on a chair by the doorpost |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `samuel-the-boy-at-shiloh`

- **File:** `../tools/shot-designer/scenes/samuel-the-boy-at-shiloh.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** the tabernacle court at dawn, a boy in a small ephod, an old priest on a chair by the doorpost
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `tender`

