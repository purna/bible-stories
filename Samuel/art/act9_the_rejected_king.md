# Ch.9 · The Rejected King

**Mood board 9 of 10** — Samuel (1 Samuel 1–16)

| | |
| --- | --- |
| Data file | `../data/act9_the_rejected_king.json` |
| SVG assets | `../assets/svg/act_09_the_rejected_king/` |
| 3D scene | `samuel-the-rejected-king` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Compare obedience with impressive sacrifice. — observation |

> "Compare obedience with impressive sacrifice."

## Director notes

Saul disobeys at Gilgal and Samuel says: to obey is better than sacrifice, and the kingdom is torn from him. Stage: a battlefield at dusk, a king in torn robes, a prophet with a torn cloak, the sound of the sheep and the cattle; a kingdom ending, a door closing.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_09_the_rejected_king/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_09_the_rejected_king/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `samuel_act9_a_background.svg`, `samuel_act9_a_middle_ground.svg`, and `samuel_act9_a_foreground.svg`.
- `b_core_action/` contains `samuel_act9_b_background.svg`, `samuel_act9_b_middle_ground.svg`, and `samuel_act9_b_foreground.svg`.
- `c_resolve/` contains `samuel_act9_c_background.svg`, `samuel_act9_c_middle_ground.svg`, and `samuel_act9_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a battlefield at dusk, a king in torn robes, a prophet with a torn cloak, the sound of the sheep and the cattle |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `samuel-the-rejected-king`

- **File:** `../tools/shot-designer/scenes/samuel-the-rejected-king.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a battlefield at dusk, a king in torn robes, a prophet with a torn cloak, the sound of the sheep and the cattle
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`golden-hour` `regal` `prophetic` `pastoral`

