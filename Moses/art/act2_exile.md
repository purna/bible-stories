# Act 2 · Exile and the Burning Bush

**Mood board 2 of 15** — Moses (Exodus 1–40; Numbers; Deuteronomy 34)

| | |
| --- | --- |
| Data file | `../data/act2_exile.json` |
| SVG assets | `../assets/svg/act_02_exile/` |
| 3D scene | `moses-exile` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Herd sheep, approach the fire, and answer the call. — call-and-response |

> "Years passed. Moses saw an Egyptian striking a Hebrew. He looked around — no one watching."

## Director notes

Moses keeps the flock of Jethro in the wilderness of Horeb, and the angel of the Lord appears in a flame of fire out of the bush. Stage: a desert slope at noon, a shepherd's staff, a bush burning without burning up; the light of the flame on a man's face, sandals coming off.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_exile/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_exile/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `moses_act2_a_background.svg`, `moses_act2_a_middle_ground.svg`, and `moses_act2_a_foreground.svg`.
- `b_core_action/` contains `moses_act2_b_background.svg`, `moses_act2_b_middle_ground.svg`, and `moses_act2_b_foreground.svg`.
- `c_resolve/` contains `moses_act2_c_background.svg`, `moses_act2_c_middle_ground.svg`, and `moses_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a desert slope at noon, a shepherd's staff, a bush burning without burning up |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#180c04` (dark) → `#2a1608` (dark) → `#0c0604` (dark)
- **Vignette:** radial gradient centred at 50% 35% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `moses-exile`

- **File:** `../tools/shot-designer/scenes/moses-exile.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a desert slope at noon, a shepherd's staff, a bush burning without burning up
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`firelight` `incandescent` `arid` `numinous` `pastoral` `barren`

