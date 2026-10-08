# Ch.5 · Covenant Stars

**Mood board 5 of 10** — Abraham (Genesis 12–22)

| | |
| --- | --- |
| Data file | `../data/act5_covenant_stars.json` |
| SVG assets | `../assets/svg/act_05_covenant_stars/` |
| 3D scene | `abraham-covenant-stars` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Trace the promised constellation. — match-it-up |

## Director notes

God promises Abram descendants as numberless as the stars and seals the covenant in fire. Stage: Abram alone outside his tent at midnight, wrapped in a cloak, staring into a sky crowded with stars; a smoking fire pot and blazing torch passing between cut animals; deep indigo, ember orange.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_covenant_stars/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_covenant_stars/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `abraham_act5_a_background.svg`, `abraham_act5_a_middle_ground.svg`, and `abraham_act5_a_foreground.svg`.
- `b_core_action/` contains `abraham_act5_b_background.svg`, `abraham_act5_b_middle_ground.svg`, and `abraham_act5_b_foreground.svg`.
- `c_resolve/` contains `abraham_act5_c_background.svg`, `abraham_act5_c_middle_ground.svg`, and `abraham_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: Abram alone outside his tent at midnight, wrapped in a cloak, staring into a sky crowded with stars |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** the story default palette
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `abraham-covenant-stars`

- **File:** `../tools/shot-designer/scenes/abraham-covenant-stars.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** Abram alone outside his tent at midnight, wrapped in a cloak, staring into a sky crowded with stars
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`firelight` `nocturnal` `nomadic` `numinous` `solemn`

