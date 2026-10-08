# Ch.9 · A New Decree

**Mood board 9 of 10** — Esther (Esther 1–9)

| | |
| --- | --- |
| Data file | `../data/act9_a_new_decree.json` |
| SVG assets | `../assets/svg/act_09_a_new_decree/` |
| 3D scene | `esther-a-new-decree` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Send defensive orders before the deadline. — match-it-up |

> "Send defensive orders before the deadline."

## Director notes

The king gives Haman's house to Esther and Mordecai, and a new decree lets the Jews defend themselves. Stage: the royal gate at dawn, a new seal on a fresh scroll, riders lining up; light breaking over the city; a relieved crowd at the gates.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_09_a_new_decree/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_09_a_new_decree/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `esther_act9_a_background.svg`, `esther_act9_a_middle_ground.svg`, and `esther_act9_a_foreground.svg`.
- `b_core_action/` contains `esther_act9_b_background.svg`, `esther_act9_b_middle_ground.svg`, and `esther_act9_b_foreground.svg`.
- `c_resolve/` contains `esther_act9_c_background.svg`, `esther_act9_c_middle_ground.svg`, and `esther_act9_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the royal gate at dawn, a new seal on a fresh scroll, riders lining up |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a14` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `esther-a-new-decree`

- **File:** `../tools/shot-designer/scenes/esther-a-new-decree.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** the royal gate at dawn, a new seal on a fresh scroll, riders lining up
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `regal` `threshold` `urban`

