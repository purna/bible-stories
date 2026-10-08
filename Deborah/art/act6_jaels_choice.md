# Ch.6 · Jael’s Choice

**Mood board 6 of 7** — Deborah (Judges 4–5)

| | |
| --- | --- |
| Data file | `../data/act6_jaels_choice.json` |
| SVG assets | `../assets/svg/act_06_jael_s_choice/` |
| 3D scene | `deborah-jaels-choice` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Act with care — listening and discernment |

> "Jael welcomed Sisera, covered him, and gave him milk when he asked for water."

## Director notes

Jael welcomes Sisera with milk and a blanket, and when he sleeps she drives a tent peg through his temple. Stage: the dim interior of a goat-hair tent, a bowl of milk, a figure asleep, the hammer and peg in the firelight; the quietest, darkest stroke of the war.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_jael_s_choice/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_jael_s_choice/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `deborah_act6_a_background.svg`, `deborah_act6_a_middle_ground.svg`, and `deborah_act6_a_foreground.svg`.
- `b_core_action/` contains `deborah_act6_b_background.svg`, `deborah_act6_b_middle_ground.svg`, and `deborah_act6_b_foreground.svg`.
- `c_resolve/` contains `deborah_act6_c_background.svg`, `deborah_act6_c_middle_ground.svg`, and `deborah_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the dim interior of a goat-hair tent, a bowl of milk, a figure asleep, the hammer and peg in the firelight |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#8a6948` (mid) → `#181821` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `deborah-jaels-choice`

- **File:** `../tools/shot-designer/scenes/deborah-jaels-choice.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** the dim interior of a goat-hair tent, a bowl of milk, a figure asleep, the hammer and peg in the firelight
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nomadic` `bellicose` `sacred`

