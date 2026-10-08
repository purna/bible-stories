# Ch.3 · Bethel

**Mood board 3 of 10** — Jacob (Genesis 25–37)

| | |
| --- | --- |
| Data file | `../data/act3_bethel.json` |
| SVG assets | `../assets/svg/act_03_bethel/` |
| 3D scene | `jacob-bethel` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Build the stone pillar after the ladder dream. — assembly |

> "Build the stone pillar after the ladder dream."

## Director notes

Jacob flees and sleeps with a stone for a pillow, dreaming of a ladder to heaven with angels ascending and descending. Stage: a night under the open sky, a lone figure on the ground, a great stair of light touching the sky; stars, and the Lord standing above it.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_bethel/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_bethel/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jacob_act3_a_background.svg`, `jacob_act3_a_middle_ground.svg`, and `jacob_act3_a_foreground.svg`.
- `b_core_action/` contains `jacob_act3_b_background.svg`, `jacob_act3_b_middle_ground.svg`, and `jacob_act3_b_foreground.svg`.
- `c_resolve/` contains `jacob_act3_c_background.svg`, `jacob_act3_c_middle_ground.svg`, and `jacob_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a night under the open sky, a lone figure on the ground, a great stair of light touching the sky |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jacob-bethel`

- **File:** `../tools/shot-designer/scenes/jacob-bethel.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a night under the open sky, a lone figure on the ground, a great stair of light touching the sky
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `megalithic`

