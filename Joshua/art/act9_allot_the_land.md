# Ch.9 · Allot the Land

**Mood board 9 of 10** — Joshua (Joshua 1–24)

| | |
| --- | --- |
| Data file | `../data/act9_allot_the_land.json` |
| SVG assets | `../assets/svg/act_09_allot_the_land/` |
| 3D scene | `joshua-allot-the-land` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Distribute inheritance among tribes. — balance |

> "Distribute inheritance among tribes."

## Director notes

The land is divided among the tribes at Shiloh, with Caleb's Hebron and the cities of refuge marked out. Stage: a great assembly at Shiloh, a map of boundaries, families lifting their inheritance; a tent of meeting, the land measured and given.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_09_allot_the_land/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_09_allot_the_land/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joshua_act9_a_background.svg`, `joshua_act9_a_middle_ground.svg`, and `joshua_act9_a_foreground.svg`.
- `b_core_action/` contains `joshua_act9_b_background.svg`, `joshua_act9_b_middle_ground.svg`, and `joshua_act9_b_foreground.svg`.
- `c_resolve/` contains `joshua_act9_c_background.svg`, `joshua_act9_c_middle_ground.svg`, and `joshua_act9_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a great assembly at Shiloh, a map of boundaries, families lifting their inheritance |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joshua-allot-the-land`

- **File:** `../tools/shot-designer/scenes/joshua-allot-the-land.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a great assembly at Shiloh, a map of boundaries, families lifting their inheritance
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nomadic`

