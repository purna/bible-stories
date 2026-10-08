# Ch.1 · The Banquet

**Mood board 1 of 10** — Esther (Esther 1–9)

| | |
| --- | --- |
| Data file | `../data/act1_the_banquet.json` |
| SVG assets | `../assets/svg/act_01_the_banquet/` |
| 3D scene | `esther-the-banquet` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Navigate the palace feast and hear Vashti’s refusal. — pathfinding |

> "Navigate the palace feast and hear Vashti’s refusal."

## Director notes

King Ahasuerus feasts in Susa for a hundred and eighty days, and Queen Vashti refuses his summons. Stage: a Persian palace hall with blue and gold glazed bricks, a thousand couches, wine; the queen withdrawing from the far doorway; torchlight and marble.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_the_banquet/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_the_banquet/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `esther_act1_a_background.svg`, `esther_act1_a_middle_ground.svg`, and `esther_act1_a_foreground.svg`.
- `b_core_action/` contains `esther_act1_b_background.svg`, `esther_act1_b_middle_ground.svg`, and `esther_act1_b_foreground.svg`.
- `c_resolve/` contains `esther_act1_c_background.svg`, `esther_act1_c_middle_ground.svg`, and `esther_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a Persian palace hall with blue and gold glazed bricks, a thousand couches, wine |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `esther-the-banquet`

- **File:** `../tools/shot-designer/scenes/esther-the-banquet.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a Persian palace hall with blue and gold glazed bricks, a thousand couches, wine
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`regal` `palatial` `festive`

