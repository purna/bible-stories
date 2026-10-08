# The City of Nineveh

**Mood board 3 of 4** — Jonah (Jonah 1–4)

| | |
| --- | --- |
| Data file | `../data/act3_nineveh_map.json` |
| SVG assets | `../assets/svg/act_03_nineveh_map/` |
| 3D scene | `jonah-nineveh-map` in `../tools/shot-designer/scenes/` |
| Particle mode | golden — drifting sand, warm dust in the air, long light |
| Game beat | Walk the road to Nineveh. — pathfinding |

> "The great city of Nineveh. Walk its streets and witness the repentance."

## Director notes

The word of the Lord comes a second time: arise, go to Nineveh, the great city. Stage: a shoreline at dawn, a man walking out of the sea, a long road to the east; dry land, a new commission, the city a speck on the horizon. Jonah enters Nineveh a day's journey and cries: yet forty days, and Nineveh shall be overthrown. Stage: a vast city of walls and gardens at noon, a lone foreign voice echoing at the gate; a crowd gathering, a king on a distant throne; a single sentence over a whole empire. The people believe, from the greatest to the least, and the king rises from his throne and sits in ashes. Stage: a city covered in sackcloth, a throne turned to ashes, beasts and people fasting, a king in mourning; the whole city holding its breath.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_nineveh_map/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_nineveh_map/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jonah_act5_a_background.svg`, `jonah_act5_a_middle_ground.svg`, and `jonah_act5_a_foreground.svg`.
- `b_core_action/` contains `jonah_act5_b_background.svg`, `jonah_act5_b_middle_ground.svg`, and `jonah_act5_b_foreground.svg`.
- `c_resolve/` contains `jonah_act5_c_background.svg`, `jonah_act5_c_middle_ground.svg`, and `jonah_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a shoreline at dawn, a man walking out of the sea, a long road to the east |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#e8c87a` (light) → `#a05a2c` (deep)
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** golden particles drift across the panels (drifting sand, warm dust in the air, long light)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jonah-nineveh-map`

- **File:** `../tools/shot-designer/scenes/jonah-nineveh-map.js`, registered in `scenes/manifest.json`
- **Lighting:** golden — drifting sand, warm dust in the air, long light; hemisphere + key light tuned to the 2D palette
- **Set:** a shoreline at dawn, a man walking out of the sea, a long road to the east
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nautical` `first-light` `regal` `threshold` `urban` `peripatetic`

