# Ch.7 · The Throne

**Mood board 7 of 12** — David (1 Samuel 16 – 1 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act7_throne.json` |
| SVG assets | `../assets/svg/act_07_throne/` |
| 3D scene | `david-throne` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Resolve petitions without favouritism. — ordered rhythm |

> "After the death of Saul and Jonathan on Mount Gilboa, David was anointed king over the house of Judah at Hebron. Years later the tribes gathered and made him king over all Israel."

## Director notes

David is anointed king over all Israel at Hebron and takes Jerusalem, the city of Jebus, for his capital. Stage: a water shaft climbing to the city gate, warriors ascending, the king on a throne of stone on the citadel; olive hills, bronze light, banners.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_throne/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_throne/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `david_act7_a_background.svg`, `david_act7_a_middle_ground.svg`, and `david_act7_a_foreground.svg`.
- `b_core_action/` contains `david_act7_b_background.svg`, `david_act7_b_middle_ground.svg`, and `david_act7_b_foreground.svg`.
- `c_resolve/` contains `david_act7_c_background.svg`, `david_act7_c_middle_ground.svg`, and `david_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a water shaft climbing to the city gate, warriors ascending, the king on a throne of stone on the citadel |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#120a04` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `david-throne`

- **File:** `../tools/shot-designer/scenes/david-throne.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a water shaft climbing to the city gate, warriors ascending, the king on a throne of stone on the citadel
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `regal` `megalithic` `threshold` `urban`

