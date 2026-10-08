# Ch.6 · A King Demanded

**Mood board 6 of 10** — Samuel (1 Samuel 1–16)

| | |
| --- | --- |
| Data file | `../data/act6_a_king_demanded.json` |
| SVG assets | `../assets/svg/act_06_a_king_demanded/` |
| 3D scene | `samuel-a-king-demanded` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Hear the elders and explain the tradeoffs. — call-and-response |

> "Hear the elders and explain the tradeoffs."

## Director notes

The elders ask for a king, and Samuel is displeased; the Lord tells him to listen to the people and show them the cost of a king. Stage: a town gate at midday, a crowd of elders, a judge listening, a scroll of the king's rights; a request made, a warning given.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_a_king_demanded/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_a_king_demanded/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `samuel_act6_a_background.svg`, `samuel_act6_a_middle_ground.svg`, and `samuel_act6_a_foreground.svg`.
- `b_core_action/` contains `samuel_act6_b_background.svg`, `samuel_act6_b_middle_ground.svg`, and `samuel_act6_b_foreground.svg`.
- `c_resolve/` contains `samuel_act6_c_background.svg`, `samuel_act6_c_middle_ground.svg`, and `samuel_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a town gate at midday, a crowd of elders, a judge listening, a scroll of the king's rights |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `samuel-a-king-demanded`

- **File:** `../tools/shot-designer/scenes/samuel-a-king-demanded.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a town gate at midday, a crowd of elders, a judge listening, a scroll of the king's rights
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`regal` `threshold`

