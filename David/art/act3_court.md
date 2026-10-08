# Ch.3 · Saul's Court

**Mood board 3 of 12** — David (1 Samuel 16 – 1 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act3_court.json` |
| SVG assets | `../assets/svg/act_03_court/` |
| 3D scene | `david-court` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Play a calming melody while watching Saul’s mood. — call-and-response |

> "The giant's head was carried to Jerusalem and David's fame spread through every tribe. Saul summoned the young man to live at his side."

## Director notes

David plays the lyre for Saul, and the king's torment eases while his jealousy stirs. Stage: a dim throne room at night, a boy with a harp, the king looming on a chair, a spear at his belt; firelight flickering on stone; tension beneath the melody.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_court/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_court/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `david_act3_a_background.svg`, `david_act3_a_middle_ground.svg`, and `david_act3_a_foreground.svg`.
- `b_core_action/` contains `david_act3_b_background.svg`, `david_act3_b_middle_ground.svg`, and `david_act3_b_foreground.svg`.
- `c_resolve/` contains `david_act3_c_background.svg`, `david_act3_c_middle_ground.svg`, and `david_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a dim throne room at night, a boy with a harp, the king looming on a chair, a spear at his belt |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#120a04` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `david-court`

- **File:** `../tools/shot-designer/scenes/david-court.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a dim throne room at night, a boy with a harp, the king looming on a chair, a spear at his belt
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `martial` `regal` `megalithic`

