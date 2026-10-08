# Let There Be Light

**Mood board 1 of 6** — Adam (Genesis 1–5)

| | |
| --- | --- |
| Data file | `../data/act1_creation.json` |
| SVG assets | `../assets/svg/act_01_creation/` |
| 3D scene | `adam-creation` in `../tools/shot-designer/scenes/` |
| Particle mode | constellation — constellation |
| Game beat | Gather the garden’s elements in creation order. — gather-with-care |

> "In the beginning, God created the heavens and the earth. The earth was formless and empty — and darkness was over the surface of the deep."

## Director notes

The Lord forms the man from the dust of the ground and breathes life into his nostrils. Stage: a mound of dark soil under a first sunrise, the figure rising as breath enters; ochre earth, cool morning blue, the first ribs of light over a newborn world.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_creation/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_creation/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `adam_act1_a_background.svg`, `adam_act1_a_middle_ground.svg`, and `adam_act1_a_foreground.svg`.
- `b_core_action/` contains `adam_act1_b_background.svg`, `adam_act1_b_middle_ground.svg`, and `adam_act1_b_foreground.svg`.
- `c_resolve/` contains `adam_act1_c_background.svg`, `adam_act1_c_middle_ground.svg`, and `adam_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a mound of dark soil under a first sunrise, the figure rising as breath enters |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#0a0812` (dark) → `#1a1224` (dark) → `#0d1b2a` (dark)
- **Vignette:** radial gradient centred at 30% 30% — the eye lands here first
- **Ambience:** constellation particles drift across the panels (constellation)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `adam-creation`

- **File:** `../tools/shot-designer/scenes/adam-creation.js`, registered in `scenes/manifest.json`
- **Lighting:** constellation — constellation; hemisphere + key light tuned to the 2D palette
- **Set:** a mound of dark soil under a first sunrise, the figure rising as breath enters
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `dusty`

