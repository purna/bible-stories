# The Dream

**Mood board 2 of 5** — Daniel (Daniel 1–12)

| | |
| --- | --- |
| Data file | `../data/act2_statue.json` |
| SVG assets | `../assets/svg/act_02_statue/` |
| 3D scene | `daniel-statue` in `../tools/shot-designer/scenes/` |
| Particle mode | dream — dream |
| Game beat | Reassemble the dream and its meaning. — assembly |

> "The king had a dream that terrified him. He demanded his wise men tell him not just what it meant — but what it was."

## Director notes

Nebuchadnezzar dreams of a colossal statue — gold head, silver chest, bronze belly, iron legs, feet of clay — shattered by a stone that becomes a mountain. Stage: the dream image towering in a night sky over Babylon, metals graded top to bottom, a stone striking the feet; cold moonlight and a blast of light as it falls.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_statue/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_statue/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `daniel_act2_a_background.svg`, `daniel_act2_a_middle_ground.svg`, and `daniel_act2_a_foreground.svg`.
- `b_core_action/` contains `daniel_act2_b_background.svg`, `daniel_act2_b_middle_ground.svg`, and `daniel_act2_b_foreground.svg`.
- `c_resolve/` contains `daniel_act2_c_background.svg`, `daniel_act2_c_middle_ground.svg`, and `daniel_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the dream image towering in a night sky over Babylon, metals graded top to bottom, a stone striking the feet |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#3d1c08` (dark) → `#1e0f0a` (dark) → `#0d0705` (dark)
- **Vignette:** radial gradient centred at 50% 20% — the eye lands here first
- **Ambience:** dream particles drift across the panels (dream)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `daniel-statue`

- **File:** `../tools/shot-designer/scenes/daniel-statue.js`, registered in `scenes/manifest.json`
- **Lighting:** dream — dream; hemisphere + key light tuned to the 2D palette
- **Set:** the dream image towering in a night sky over Babylon, metals graded top to bottom, a stone striking the feet
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `dreamlike` `lofty` `megalithic`

