# Ch.7 · Leaving Haran

**Mood board 7 of 10** — Jacob (Genesis 25–37)

| | |
| --- | --- |
| Data file | `../data/act7_leaving_haran.json` |
| SVG assets | `../assets/svg/act_07_leaving_haran/` |
| 3D scene | `jacob-leaving-haran` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Pack the camp before Laban catches up. — gather-with-care |

> "Pack the camp before Laban catches up."

## Director notes

Jacob flees Laban by night; Rachel hides the teraphim in a saddle and sits on them; the two camps meet on the hill of Gilead. Stage: a night crossing of a river, a caravan of tents and children, a woman hiding an idol; dawn overtaking a pursuit on a stony hill.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_leaving_haran/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_leaving_haran/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jacob_act7_a_background.svg`, `jacob_act7_a_middle_ground.svg`, and `jacob_act7_a_foreground.svg`.
- `b_core_action/` contains `jacob_act7_b_background.svg`, `jacob_act7_b_middle_ground.svg`, and `jacob_act7_b_foreground.svg`.
- `c_resolve/` contains `jacob_act7_c_background.svg`, `jacob_act7_c_middle_ground.svg`, and `jacob_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a night crossing of a river, a caravan of tents and children, a woman hiding an idol |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jacob-leaving-haran`

- **File:** `../tools/shot-designer/scenes/jacob-leaving-haran.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a night crossing of a river, a caravan of tents and children, a woman hiding an idol
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`riverine` `nocturnal` `first-light` `rolling`

