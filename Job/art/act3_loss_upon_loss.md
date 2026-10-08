# Ch.3 · Loss upon Loss

**Mood board 3 of 10** — Job (Job 1–42)

| | |
| --- | --- |
| Data file | `../data/act3_loss_upon_loss.json` |
| SVG assets | `../assets/svg/act_03_loss_upon_loss/` |
| 3D scene | `job-loss-upon-loss` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Receive each messenger and sit with the silence. — ordered rhythm |

> "Receive each messenger and sit with the silence."

## Director notes

The messengers come one after another: the oxen, the donkeys, the fire, the wind — and the children. Stage: a ruined threshold at dusk, one messenger after another arriving, a great house going silent; a single figure on the ground, the sky empty of birds.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_loss_upon_loss/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_loss_upon_loss/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `job_act3_a_background.svg`, `job_act3_a_middle_ground.svg`, and `job_act3_a_foreground.svg`.
- `b_core_action/` contains `job_act3_b_background.svg`, `job_act3_b_middle_ground.svg`, and `job_act3_b_foreground.svg`.
- `c_resolve/` contains `job_act3_c_background.svg`, `job_act3_c_middle_ground.svg`, and `job_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a ruined threshold at dusk, one messenger after another arriving, a great house going silent |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `job-loss-upon-loss`

- **File:** `../tools/shot-designer/scenes/job-loss-upon-loss.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a ruined threshold at dusk, one messenger after another arriving, a great house going silent
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`firelight` `golden-hour`

