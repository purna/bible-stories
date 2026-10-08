# The Ship at Sea

**Mood board 1 of 4** — Jonah (Jonah 1–4)

| | |
| --- | --- |
| Data file | `../data/act1_ship_map.json` |
| SVG assets | `../assets/svg/act_01_ship_map/` |
| 3D scene | `jonah-ship-map` in `../tools/shot-designer/scenes/` |
| Particle mode | storm — wind-driven rain, cold grey-blue, lightning flicker |
| Game beat | Choose cargo and board the ship going the wrong way. — observation |

> "Explore the ship and discover what Jonah missed as he tried to flee."

## Director notes

Jonah flees to Joppa and boards a ship bound for Tarshish, paying the fare to go the other way from God. Stage: a busy port at dawn, a man hurrying down the gangplank with a bag, the sea opening wide, a ship's prow pointed west; gulls and a fast heartbeat. The Lord sends a great wind, the ship threatens to break, and the sailors cast lots and find Jonah. Stage: a ship at night in a storm, waves like mountains, the crew desperate, a sleeping man below deck; lightning on the mast, a frightened circle of seamen.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_ship_map/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_ship_map/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jonah_act1_a_background.svg`, `jonah_act1_a_middle_ground.svg`, and `jonah_act1_a_foreground.svg`.
- `b_core_action/` contains `jonah_act1_b_background.svg`, `jonah_act1_b_middle_ground.svg`, and `jonah_act1_b_foreground.svg`.
- `c_resolve/` contains `jonah_act1_c_background.svg`, `jonah_act1_c_middle_ground.svg`, and `jonah_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a busy port at dawn, a man hurrying down the gangplank with a bag, the sea opening wide, a ship's prow pointed west |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#8fb7c9` (light) → `#1c3d54` (dark)
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** storm particles drift across the panels (wind-driven rain, cold grey-blue, lightning flicker)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jonah-ship-map`

- **File:** `../tools/shot-designer/scenes/jonah-ship-map.js`, registered in `scenes/manifest.json`
- **Lighting:** storm — wind-driven rain, cold grey-blue, lightning flicker; hemisphere + key light tuned to the 2D palette
- **Set:** a busy port at dawn, a man hurrying down the gangplank with a bag, the sea opening wide, a ship's prow pointed west
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`tempest` `electric` `nautical` `nocturnal` `first-light` `numinous`

