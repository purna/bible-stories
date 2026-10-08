# Naboth's Vineyard

**Mood board 6 of 7** — Eiljah (1 Kings 17–19, 21; 2 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act6_vineyard.json` |
| SVG assets | `../assets/svg/act_06_vineyard/` |
| 3D scene | `eiljah-vineyard` in `../tools/shot-designer/scenes/` |
| Particle mode | dream — dream |
| Game beat | Rest, eat, and accept care before travelling. — balance |

> "Later, Ahab wanted Naboth's vineyard because it was beside the king's palace. Naboth refused to sell the inheritance that belonged to his family."

## Director notes

Fleeing Jezebel, Elijah collapses under a broom tree and asks to die; an angel wakes him with bread and water. Stage: a scorched wilderness, a lone broom bush, a sleeping figure, a shining messenger kneeling beside him; harsh noon light turning gentle.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_vineyard/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_vineyard/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `elijah_act6_a_background.svg`, `elijah_act6_a_middle_ground.svg`, and `elijah_act6_a_foreground.svg`.
- `b_core_action/` contains `elijah_act6_b_background.svg`, `elijah_act6_b_middle_ground.svg`, and `elijah_act6_b_foreground.svg`.
- `c_resolve/` contains `elijah_act6_c_background.svg`, `elijah_act6_c_middle_ground.svg`, and `elijah_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a scorched wilderness, a lone broom bush, a sleeping figure, a shining messenger kneeling beside him |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#4a6b3c` (deep) → `#2d4a2c` (deep)
- **Vignette:** radial gradient centred at 20% 80% — the eye lands here first
- **Ambience:** dream particles drift across the panels (dream)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `eiljah-vineyard`

- **File:** `../tools/shot-designer/scenes/eiljah-vineyard.js`, registered in `scenes/manifest.json`
- **Lighting:** dream — dream; hemisphere + key light tuned to the 2D palette
- **Set:** a scorched wilderness, a lone broom bush, a sleeping figure, a shining messenger kneeling beside him
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `verdant` `humble` `numinous` `barren`

