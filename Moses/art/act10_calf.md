# Act 10 · The Broken Tablets

**Mood board 10 of 15** — Moses (Exodus 1–40; Numbers; Deuteronomy 34)

| | |
| --- | --- |
| Data file | `../data/act10_calf.json` |
| SVG assets | `../assets/svg/act_10_calf/` |
| 3D scene | `moses-calf` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Confront the idol and intercede for the people. — ordered rhythm |

> "Moses was on the mountain forty days and forty nights. Down below, the people grew restless."

## Director notes

The people make a molten calf and worship it, and Moses breaks the tablets at the foot of the mountain. Stage: a camp of gold and fire, a calf of gold, a man running down the mountain, two tablets of stone in his hands; the silence after the shattering.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_10_calf/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_10_calf/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `moses_act10_a_background.svg`, `moses_act10_a_middle_ground.svg`, and `moses_act10_a_foreground.svg`.
- `b_core_action/` contains `moses_act10_b_background.svg`, `moses_act10_b_middle_ground.svg`, and `moses_act10_b_foreground.svg`.
- `c_resolve/` contains `moses_act10_c_background.svg`, `moses_act10_c_middle_ground.svg`, and `moses_act10_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a camp of gold and fire, a calf of gold, a man running down the mountain, two tablets of stone in his hands |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1008` (dark) → `#2e1a10` (dark) → `#0a0604` (dark)
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `moses-calf`

- **File:** `../tools/shot-designer/scenes/moses-calf.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a camp of gold and fire, a calf of gold, a man running down the mountain, two tablets of stone in his hands
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`firelight` `military-camp` `lofty` `megalithic`

