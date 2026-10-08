# Ch.10 · The Vineyard

**Mood board 10 of 10** — Noah (Genesis 6–9)

| | |
| --- | --- |
| Data file | `../data/act10_vineyard.json` |
| SVG assets | `../assets/svg/act_01_vineyard/` |
| 3D scene | `noah-vineyard` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Witness Noah’s failure and choose how the sons respond. — observation |

> "Time passed. Noah planted a vineyard. He worked the soil. He waited for the harvest."

## Director notes

Noah plants a vineyard, drinks the wine, and is uncovered in his tent; Ham sees, Shem and Japheth cover him. Stage: a vineyard in the afternoon, a man resting in a tent, a son coming in with a garment, the father's shame and blessing; the first vineyard, the first family, the first sorrow.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_vineyard/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_vineyard/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `noah_act10_a_background.svg`, `noah_act10_a_middle_ground.svg`, and `noah_act10_a_foreground.svg`.
- `b_core_action/` contains `noah_act10_b_background.svg`, `noah_act10_b_middle_ground.svg`, and `noah_act10_b_foreground.svg`.
- `c_resolve/` contains `noah_act10_c_background.svg`, `noah_act10_c_middle_ground.svg`, and `noah_act10_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a vineyard in the afternoon, a man resting in a tent, a son coming in with a garment, the father's shame and blessing |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a0e08` (dark) → `#0c0604` (dark) → `#040202` (dark)
- **Vignette:** radial gradient centred at 30% 70% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `noah-vineyard`

- **File:** `../tools/shot-designer/scenes/noah-vineyard.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a vineyard in the afternoon, a man resting in a tent, a son coming in with a garment, the father's shame and blessing
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nomadic`

