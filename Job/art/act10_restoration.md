# Ch.10 · Restoration

**Mood board 10 of 10** — Job (Job 1–42)

| | |
| --- | --- |
| Data file | `../data/act10_restoration.json` |
| SVG assets | `../assets/svg/act_10_restoration/` |
| 3D scene | `job-restoration` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Rebuild community without treating new gifts as replacements. — assembly |

> "Rebuild community without treating new gifts as replacements."

## Director notes

The Lord restores Job's fortunes twofold: flocks, children, daughters of beauty, and a long life. Stage: a household again, tents full of children, camels in the shade, a new generation at the door; evening light and music; a table set for a feast.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_10_restoration/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_10_restoration/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `job_act10_a_background.svg`, `job_act10_a_middle_ground.svg`, and `job_act10_a_foreground.svg`.
- `b_core_action/` contains `job_act10_b_background.svg`, `job_act10_b_middle_ground.svg`, and `job_act10_b_foreground.svg`.
- `c_resolve/` contains `job_act10_c_background.svg`, `job_act10_c_middle_ground.svg`, and `job_act10_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a household again, tents full of children, camels in the shade, a new generation at the door |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `job-restoration`

- **File:** `../tools/shot-designer/scenes/job-restoration.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a household again, tents full of children, camels in the shade, a new generation at the door
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`lamplight` `festive`

