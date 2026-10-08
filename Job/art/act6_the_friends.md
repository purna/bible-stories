# Ch.6 · The Friends

**Mood board 6 of 10** — Job (Job 1–42)

| | |
| --- | --- |
| Data file | `../data/act6_the_friends.json` |
| SVG assets | `../assets/svg/act_06_the_friends/` |
| 3D scene | `job-the-friends` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Identify when counsel becomes accusation. — match-it-up |

> "Identify when counsel becomes accusation."

## Director notes

Eliphaz, Bildad and Zophar argue: the righteous prosper, the wicked fall — therefore repent, Job. Stage: a desert camp at dawn, three men in flowing robes, a fourth in ashes, the argument turning from comfort to accusation; wind, dust, long shadows.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_the_friends/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_the_friends/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `job_act6_a_background.svg`, `job_act6_a_middle_ground.svg`, and `job_act6_a_foreground.svg`.
- `b_core_action/` contains `job_act6_b_background.svg`, `job_act6_b_middle_ground.svg`, and `job_act6_b_foreground.svg`.
- `c_resolve/` contains `job_act6_c_background.svg`, `job_act6_c_middle_ground.svg`, and `job_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a desert camp at dawn, three men in flowing robes, a fourth in ashes, the argument turning from comfort to accusation |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a14` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `job-the-friends`

- **File:** `../tools/shot-designer/scenes/job-the-friends.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a desert camp at dawn, three men in flowing robes, a fourth in ashes, the argument turning from comfort to accusation
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `arid` `dusty` `military-camp`

