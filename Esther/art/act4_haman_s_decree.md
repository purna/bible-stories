# Ch.4 · Haman’s Decree

**Mood board 4 of 10** — Esther (Esther 1–9)

| | |
| --- | --- |
| Data file | `../data/act4_haman_s_decree.json` |
| SVG assets | `../assets/svg/act_04_haman_s_decree/` |
| 3D scene | `esther-haman-s-decree` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Trace the decree as it spreads across the empire. — pathfinding |

> "Trace the decree as it spreads across the empire."

## Director notes

Haman the Agagite persuades the king to destroy the Jews; the decree rides out to every province. Stage: a great hall, Haman in high honour, the sealed parchment on a table; couriers galloping past a map of the empire; cold shadow and a rising drum of hoofbeats.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_haman_s_decree/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_haman_s_decree/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `esther_act4_a_background.svg`, `esther_act4_a_middle_ground.svg`, and `esther_act4_a_foreground.svg`.
- `b_core_action/` contains `esther_act4_b_background.svg`, `esther_act4_b_middle_ground.svg`, and `esther_act4_b_foreground.svg`.
- `c_resolve/` contains `esther_act4_c_background.svg`, `esther_act4_c_middle_ground.svg`, and `esther_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a great hall, Haman in high honour, the sealed parchment on a table |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1420` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `esther-haman-s-decree`

- **File:** `../tools/shot-designer/scenes/esther-haman-s-decree.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a great hall, Haman in high honour, the sealed parchment on a table
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`regal`

