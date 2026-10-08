# Ch.4 · The Confusion

**Mood board 4 of 5** — Babel (Genesis 11:1–9)

| | |
| --- | --- |
| Data file | `../data/act4_the_confusion.json` |
| SVG assets | `../assets/svg/act_04_the_confusion/` |
| 3D scene | `babel-the-confusion` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Watch the languages scatter as the work stops. — interactive beat |

> "Watch the languages scatter as the work stops."

## Director notes

The Lord confuses their language, and they cannot understand one another. Stage: the building site at midday, workers gesturing in sudden misunderstanding, bricks tumbling, the work stopping; a babble of sound frozen in the frame; bright, bewildered light.

## 2D SVG composition

The scene renders as three stacked SVG panels, one per beat of the
act, in `../assets/svg/act_04_the_confusion/`:

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the building site at midday, workers gesturing in sudden misunderstanding, bricks tumbling, the work stopping |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1024` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `babel-the-confusion`

- **File:** `../tools/shot-designer/scenes/babel-the-confusion.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** the building site at midday, workers gesturing in sudden misunderstanding, bricks tumbling, the work stopping
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood



