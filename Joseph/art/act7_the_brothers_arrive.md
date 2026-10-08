# Ch.7 · The Brothers Arrive

**Mood board 7 of 10** — Joseph (Genesis 37–47)

| | |
| --- | --- |
| Data file | `../data/act7_the_brothers_arrive.json` |
| SVG assets | `../assets/svg/act_07_the_brothers_arrive/` |
| 3D scene | `joseph-the-brothers-arrive` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Test recognition while distributing food. — gather-with-care |

> "Test recognition while distributing food."

## Director notes

The brothers come to buy grain in Egypt, bow before Joseph, and do not know him. Stage: a grain hall at midday, a governor in Egyptian robes, ten shepherds bowing low, a search for truth in a false bottom; a cup, a silver, a recognition withheld.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_the_brothers_arrive/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_the_brothers_arrive/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joseph_act7_a_background.svg`, `joseph_act7_a_middle_ground.svg`, and `joseph_act7_a_foreground.svg`.
- `b_core_action/` contains `joseph_act7_b_background.svg`, `joseph_act7_b_middle_ground.svg`, and `joseph_act7_b_foreground.svg`.
- `c_resolve/` contains `joseph_act7_c_background.svg`, `joseph_act7_c_middle_ground.svg`, and `joseph_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a grain hall at midday, a governor in Egyptian robes, ten shepherds bowing low, a search for truth in a false bottom |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joseph-the-brothers-arrive`

- **File:** `../tools/shot-designer/scenes/joseph-the-brothers-arrive.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a grain hall at midday, a governor in Egyptian robes, ten shepherds bowing low, a search for truth in a false bottom
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`harvest`

