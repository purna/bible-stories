# Ch.1 · A Family Record

**Mood board 1 of 7** — Enoch (Genesis 5:21–24)

| | |
| --- | --- |
| Data file | `../data/act1_a_family_record.json` |
| SVG assets | `../assets/svg/act_01_a_family_record/` |
| 3D scene | `enoch-a-family-record` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Place Enoch correctly in the generations. — assembly |

> "Place Enoch correctly in the generations."

## Director notes

The generations from Adam are recorded, and Jared fathers Enoch, who walks in a line of long-lived fathers and sons. Stage: a family register in a tent at dusk, names spoken aloud, a child held up; lamplight on a written scroll, the long line of ancestors behind.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_a_family_record/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_a_family_record/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `enoch_act1_a_background.svg`, `enoch_act1_a_middle_ground.svg`, and `enoch_act1_a_foreground.svg`.
- `b_core_action/` contains `enoch_act1_b_background.svg`, `enoch_act1_b_middle_ground.svg`, and `enoch_act1_b_foreground.svg`.
- `c_resolve/` contains `enoch_act1_c_background.svg`, `enoch_act1_c_middle_ground.svg`, and `enoch_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a family register in a tent at dusk, names spoken aloud, a child held up |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `enoch-a-family-record`

- **File:** `../tools/shot-designer/scenes/enoch-a-family-record.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a family register in a tent at dusk, names spoken aloud, a child held up
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`golden-hour` `nomadic` `tender`

