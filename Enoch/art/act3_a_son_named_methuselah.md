# Ch.3 · A Son Named Methuselah

**Mood board 3 of 7** — Enoch (Genesis 5:21–24)

| | |
| --- | --- |
| Data file | `../data/act3_a_son_named_methuselah.json` |
| SVG assets | `../assets/svg/act_03_a_son_named_methuselah/` |
| 3D scene | `enoch-a-son-named-methuselah` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Prepare the home for a new child. — gather-with-care |

> "Prepare the home for a new child."

## Director notes

Enoch fathers Methuselah and a home is prepared for the child. Stage: a small house at sunrise, a newborn in swaddling cloth, the father at the door; a lamp lit in the window, a warm quiet room.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_a_son_named_methuselah/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_a_son_named_methuselah/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `enoch_act3_a_background.svg`, `enoch_act3_a_middle_ground.svg`, and `enoch_act3_a_foreground.svg`.
- `b_core_action/` contains `enoch_act3_b_background.svg`, `enoch_act3_b_middle_ground.svg`, and `enoch_act3_b_foreground.svg`.
- `c_resolve/` contains `enoch_act3_c_background.svg`, `enoch_act3_c_middle_ground.svg`, and `enoch_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a small house at sunrise, a newborn in swaddling cloth, the father at the door |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `enoch-a-son-named-methuselah`

- **File:** `../tools/shot-designer/scenes/enoch-a-son-named-methuselah.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a small house at sunrise, a newborn in swaddling cloth, the father at the door
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `tender`

