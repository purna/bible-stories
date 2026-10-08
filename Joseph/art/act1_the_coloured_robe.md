# Ch.1 · The Coloured Robe

**Mood board 1 of 10** — Joseph (Genesis 37–47)

| | |
| --- | --- |
| Data file | `../data/act1_the_coloured_robe.json` |
| SVG assets | `../assets/svg/act_01_the_coloured_robe/` |
| 3D scene | `joseph-the-coloured-robe` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Assemble the robe and notice the family tension. — assembly |

> "Assemble the robe and notice the family tension."

## Director notes

Jacob loves Joseph best, makes him a coat of many colours, and the brothers hate him for his dreams. Stage: a sunlit field of wheat at noon, a boy in a long bright coat among his brothers, a sheaf bowing in the dream; gold stubble, a cold wind of envy.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_the_coloured_robe/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_the_coloured_robe/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joseph_act1_a_background.svg`, `joseph_act1_a_middle_ground.svg`, and `joseph_act1_a_foreground.svg`.
- `b_core_action/` contains `joseph_act1_b_background.svg`, `joseph_act1_b_middle_ground.svg`, and `joseph_act1_b_foreground.svg`.
- `c_resolve/` contains `joseph_act1_c_background.svg`, `joseph_act1_c_middle_ground.svg`, and `joseph_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a sunlit field of wheat at noon, a boy in a long bright coat among his brothers, a sheaf bowing in the dream |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joseph-the-coloured-robe`

- **File:** `../tools/shot-designer/scenes/joseph-the-coloured-robe.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a sunlit field of wheat at noon, a boy in a long bright coat among his brothers, a sheaf bowing in the dream
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`pastoral` `harvest` `dreamlike`

