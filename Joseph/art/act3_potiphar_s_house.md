# Ch.3 · Potiphar’s House

**Mood board 3 of 10** — Joseph (Genesis 37–47)

| | |
| --- | --- |
| Data file | `../data/act3_potiphar_s_house.json` |
| SVG assets | `../assets/svg/act_03_potiphar_s_house/` |
| 3D scene | `joseph-potiphar-s-house` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Manage the household with integrity. — balance |

> "Manage the household with integrity."

## Director notes

Joseph is bought by Potiphar, and the Lord prospers all he touches, until the wife's false witness sends him to prison. Stage: an Egyptian villa at midday, a trusted steward at a table, a burning accusation, a torn garment; marble, shade, and a door closing.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_potiphar_s_house/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_potiphar_s_house/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joseph_act3_a_background.svg`, `joseph_act3_a_middle_ground.svg`, and `joseph_act3_a_foreground.svg`.
- `b_core_action/` contains `joseph_act3_b_background.svg`, `joseph_act3_b_middle_ground.svg`, and `joseph_act3_b_foreground.svg`.
- `c_resolve/` contains `joseph_act3_c_background.svg`, `joseph_act3_c_middle_ground.svg`, and `joseph_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: an Egyptian villa at midday, a trusted steward at a table, a burning accusation, a torn garment |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joseph-potiphar-s-house`

- **File:** `../tools/shot-designer/scenes/joseph-potiphar-s-house.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** an Egyptian villa at midday, a trusted steward at a table, a burning accusation, a torn garment
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`incandescent`

