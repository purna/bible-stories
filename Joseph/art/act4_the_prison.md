# Ch.4 · The Prison

**Mood board 4 of 10** — Joseph (Genesis 37–47)

| | |
| --- | --- |
| Data file | `../data/act4_the_prison.json` |
| SVG assets | `../assets/svg/act_04_the_prison/` |
| 3D scene | `joseph-the-prison` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Care for prisoners and interpret two dreams. — balance |

> "Care for prisoners and interpret two dreams."

## Director notes

In prison Joseph tends the king's cupbearer and baker, and interprets their dreams — one restored, one hanged. Stage: a stone prison cell at dawn, two men in a dungeon, a cup and a basket of birds on a table; a dream's hope and a dream's doom.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_the_prison/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_the_prison/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joseph_act4_a_background.svg`, `joseph_act4_a_middle_ground.svg`, and `joseph_act4_a_foreground.svg`.
- `b_core_action/` contains `joseph_act4_b_background.svg`, `joseph_act4_b_middle_ground.svg`, and `joseph_act4_b_foreground.svg`.
- `c_resolve/` contains `joseph_act4_c_background.svg`, `joseph_act4_c_middle_ground.svg`, and `joseph_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a stone prison cell at dawn, two men in a dungeon, a cup and a basket of birds on a table |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1024` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joseph-the-prison`

- **File:** `../tools/shot-designer/scenes/joseph-the-prison.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a stone prison cell at dawn, two men in a dungeon, a cup and a basket of birds on a table
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `regal` `dreamlike` `megalithic` `aspirational`

