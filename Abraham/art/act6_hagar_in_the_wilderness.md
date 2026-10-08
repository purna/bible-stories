# Ch.6 · Hagar in the Wilderness

**Mood board 6 of 10** — Abraham (Genesis 12–22)

| | |
| --- | --- |
| Data file | `../data/act6_hagar_in_the_wilderness.json` |
| SVG assets | `../assets/svg/act_06_hagar_in_the_wilderness/` |
| 3D scene | `abraham-hagar-in-the-wilderness` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Find water and listen before acting. — gather-with-care |

## Director notes

Sarai's Egyptian maid Hagar flees into the desert of Shur, where an angel of the Lord meets her at a spring and promises a son, Ishmael. Stage: a lone palm and hot spring in bleached sand; Hagar seated, startled, water jar at her feet; white heat, trembling mirage light.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_hagar_in_the_wilderness/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_hagar_in_the_wilderness/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `abraham_act6_a_background.svg`, `abraham_act6_a_middle_ground.svg`, and `abraham_act6_a_foreground.svg`.
- `b_core_action/` contains `abraham_act6_b_background.svg`, `abraham_act6_b_middle_ground.svg`, and `abraham_act6_b_foreground.svg`.
- `c_resolve/` contains `abraham_act6_c_background.svg`, `abraham_act6_c_middle_ground.svg`, and `abraham_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a lone palm and hot spring in bleached sand |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** the story default palette
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `abraham-hagar-in-the-wilderness`

- **File:** `../tools/shot-designer/scenes/abraham-hagar-in-the-wilderness.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a lone palm and hot spring in bleached sand
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `arid` `verdant` `numinous` `barren`

