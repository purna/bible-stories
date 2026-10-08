# Ch.3 · Silent Prayer

**Mood board 3 of 8** — Hannah (1 Samuel 1–2)

| | |
| --- | --- |
| Data file | `../data/act3_silent_prayer.json` |
| SVG assets | `../assets/svg/act_03_silent_prayer/` |
| 3D scene | `hannah-silent-prayer` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Form Hannah’s prayer from honest fragments. — call-and-response |

> "Form Hannah’s prayer from honest fragments."

## Director notes

Hannah prays without a sound, lips moving only; the vow: a son given back to the Lord. Stage: the tabernacle interior at twilight, a woman kneeling by a post, a lamp between the holy place and the door; the first candle in the dark; no sound in the frame.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_silent_prayer/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_silent_prayer/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `hannah_act3_a_background.svg`, `hannah_act3_a_middle_ground.svg`, and `hannah_act3_a_foreground.svg`.
- `b_core_action/` contains `hannah_act3_b_background.svg`, `hannah_act3_b_middle_ground.svg`, and `hannah_act3_b_foreground.svg`.
- `c_resolve/` contains `hannah_act3_c_background.svg`, `hannah_act3_c_middle_ground.svg`, and `hannah_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the tabernacle interior at twilight, a woman kneeling by a post, a lamp between the holy place and the door |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `hannah-silent-prayer`

- **File:** `../tools/shot-designer/scenes/hannah-silent-prayer.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** the tabernacle interior at twilight, a woman kneeling by a post, a lamp between the holy place and the door
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`devotional`

