# Ch.1 · The Winepress

**Mood board 1 of 7** — Gideon (Judges 6–8)

| | |
| --- | --- |
| Data file | `../data/act1_the_winepress.json` |
| SVG assets | `../assets/svg/act_01_the_winepress/` |
| 3D scene | `gideon-the-winepress` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Thresh wheat in hiding, hear the Angel's call. — call-and-response |

> "Seven years the Midianites ruled. Each harvest, raiders swept the land like locusts."

## Director notes

Gideon threshes wheat in a winepress to hide it from Midian, and the angel of the Lord appears under the oak at Ophrah. Stage: a hidden winepress in a vineyard at dawn, a man beating wheat, a figure in shining raiment beneath the oak; dust, shadow, and the first gleam of the divine messenger.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_the_winepress/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_the_winepress/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `gideon_act1_a_background.svg`, `gideon_act1_a_middle_ground.svg`, and `gideon_act1_a_foreground.svg`.
- `b_core_action/` contains `gideon_act1_b_background.svg`, `gideon_act1_b_middle_ground.svg`, and `gideon_act1_b_foreground.svg`.
- `c_resolve/` contains `gideon_act1_c_background.svg`, `gideon_act1_c_middle_ground.svg`, and `gideon_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a hidden winepress in a vineyard at dawn, a man beating wheat, a figure in shining raiment beneath the oak |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#0a0502` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `gideon-the-winepress`

- **File:** `../tools/shot-designer/scenes/gideon-the-winepress.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a hidden winepress in a vineyard at dawn, a man beating wheat, a figure in shining raiment beneath the oak
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `dusty` `harvest` `numinous` `viticulture`

