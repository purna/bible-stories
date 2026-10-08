# Ch.9 · Revealed

**Mood board 9 of 10** — Joseph (Genesis 37–47)

| | |
| --- | --- |
| Data file | `../data/act9_revealed.json` |
| SVG assets | `../assets/svg/act_09_revealed/` |
| 3D scene | `joseph-revealed` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Choose the moment Joseph names himself. — observation |

> "Choose the moment Joseph names himself."

## Director notes

Joseph can no longer contain himself, and the brothers see his face, and he says: I am Joseph your brother. Stage: a great hall at midday, all the court standing back, a man weeping on his brothers' necks, the world turning over; light on the floor, and a long embrace.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_09_revealed/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_09_revealed/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joseph_act9_a_background.svg`, `joseph_act9_a_middle_ground.svg`, and `joseph_act9_a_foreground.svg`.
- `b_core_action/` contains `joseph_act9_b_background.svg`, `joseph_act9_b_middle_ground.svg`, and `joseph_act9_b_foreground.svg`.
- `c_resolve/` contains `joseph_act9_c_background.svg`, `joseph_act9_c_middle_ground.svg`, and `joseph_act9_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a great hall at midday, all the court standing back, a man weeping on his brothers' necks, the world turning over |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joseph-revealed`

- **File:** `../tools/shot-designer/scenes/joseph-revealed.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a great hall at midday, all the court standing back, a man weeping on his brothers' necks, the world turning over
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood



