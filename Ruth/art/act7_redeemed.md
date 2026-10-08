# Ch.7 · Redeemed

**Mood board 7 of 8** — Ruth (Ruth 1–4)

| | |
| --- | --- |
| Data file | `../data/act7_redeemed.json` |
| SVG assets | `../assets/svg/act_07_redeemed/` |
| 3D scene | `ruth-redeemed` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Transfer the sandal and join the households. — ready-then-act |

> "In earlier times in Israel, for the redemption and transfer of property to become final, one party took off his sandal and gave it to the other. This was the method of legalizing transactions in Israel."

## Director notes

The people bless Ruth and Boaz, and they are married, and the Lord gives them a son. Stage: a wedding feast at evening, a village in lamps, a couple at the door, a house being prepared; a blessing being spoken.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_redeemed/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_redeemed/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `ruth_act7_a_background.svg`, `ruth_act7_a_middle_ground.svg`, and `ruth_act7_a_foreground.svg`.
- `b_core_action/` contains `ruth_act7_b_background.svg`, `ruth_act7_b_middle_ground.svg`, and `ruth_act7_b_foreground.svg`.
- `c_resolve/` contains `ruth_act7_c_background.svg`, `ruth_act7_c_middle_ground.svg`, and `ruth_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a wedding feast at evening, a village in lamps, a couple at the door, a house being prepared |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#c8a878` (light) → `#3a2818` (dark)
- **Vignette:** radial gradient centred at 50% 25% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `ruth-redeemed`

- **File:** `../tools/shot-designer/scenes/ruth-redeemed.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a wedding feast at evening, a village in lamps, a couple at the door, a house being prepared
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`lamplight` `festive`

