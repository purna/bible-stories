# Ch.9 · The Book Read

**Mood board 9 of 10** — Nehemiah (Nehemiah 1–13)

| | |
| --- | --- |
| Data file | `../data/act9_the_book_read.json` |
| SVG assets | `../assets/svg/act_09_the_book_read/` |
| 3D scene | `nehemiah-the-book-read` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Rebuild the platform and help the people understand. — assembly |

> "Rebuild the platform and help the people understand."

## Director notes

Ezra reads the law from dawn to midday, and the people weep and then feast, for the day is holy. Stage: a great square at noon, a wooden pulpit, a scroll of the law, the people listening, their hands lifted; the word being read, a city learning its own story.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_09_the_book_read/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_09_the_book_read/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `nehemiah_act9_a_background.svg`, `nehemiah_act9_a_middle_ground.svg`, and `nehemiah_act9_a_foreground.svg`.
- `b_core_action/` contains `nehemiah_act9_b_background.svg`, `nehemiah_act9_b_middle_ground.svg`, and `nehemiah_act9_b_foreground.svg`.
- `c_resolve/` contains `nehemiah_act9_c_background.svg`, `nehemiah_act9_c_middle_ground.svg`, and `nehemiah_act9_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a great square at noon, a wooden pulpit, a scroll of the law, the people listening, their hands lifted |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `nehemiah-the-book-read`

- **File:** `../tools/shot-designer/scenes/nehemiah-the-book-read.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a great square at noon, a wooden pulpit, a scroll of the law, the people listening, their hands lifted
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `urban` `festive`

