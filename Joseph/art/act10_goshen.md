# Ch.10 · Goshen

**Mood board 10 of 10** — Joseph (Genesis 37–47)

| | |
| --- | --- |
| Data file | `../data/act10_goshen.json` |
| SVG assets | `../assets/svg/act_10_goshen/` |
| 3D scene | `joseph-goshen` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Settle the family and preserve the famine record. — balance |

> "Settle the family and preserve the famine record."

## Director notes

Jacob and all his household settle in Goshen, the best of the land, and Joseph provides for them all. Stage: a green delta at dawn, a family arriving with flocks, the governor's chariot waiting, a father and son falling into each other's arms; the best of the land, in the years of famine.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_10_goshen/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_10_goshen/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joseph_act10_a_background.svg`, `joseph_act10_a_middle_ground.svg`, and `joseph_act10_a_foreground.svg`.
- `b_core_action/` contains `joseph_act10_b_background.svg`, `joseph_act10_b_middle_ground.svg`, and `joseph_act10_b_foreground.svg`.
- `c_resolve/` contains `joseph_act10_c_background.svg`, `joseph_act10_c_middle_ground.svg`, and `joseph_act10_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a green delta at dawn, a family arriving with flocks, the governor's chariot waiting, a father and son falling into each other's arms |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joseph-goshen`

- **File:** `../tools/shot-designer/scenes/joseph-goshen.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a green delta at dawn, a family arriving with flocks, the governor's chariot waiting, a father and son falling into each other's arms
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `martial`

