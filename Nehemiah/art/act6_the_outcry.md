# Ch.6 · The Outcry

**Mood board 6 of 10** — Nehemiah (Nehemiah 1–13)

| | |
| --- | --- |
| Data file | `../data/act6_the_outcry.json` |
| SVG assets | `../assets/svg/act_06_the_outcry/` |
| 3D scene | `nehemiah-the-outcry` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Cancel exploitative debts and restore fields. — balance |

> "Cancel exploitative debts and restore fields."

## Director notes

The people cry out against the Jewish nobles who charge interest, and Nehemiah charges them to give back the fields and the interest. Stage: a courtyard at midday, a crowd of the poor, a governor listening, a money lender's ledger; the debt being cancelled, a people set free.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_the_outcry/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_the_outcry/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `nehemiah_act6_a_background.svg`, `nehemiah_act6_a_middle_ground.svg`, and `nehemiah_act6_a_foreground.svg`.
- `b_core_action/` contains `nehemiah_act6_b_background.svg`, `nehemiah_act6_b_middle_ground.svg`, and `nehemiah_act6_b_foreground.svg`.
- `c_resolve/` contains `nehemiah_act6_c_background.svg`, `nehemiah_act6_c_middle_ground.svg`, and `nehemiah_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a courtyard at midday, a crowd of the poor, a governor listening, a money lender's ledger |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a14` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `nehemiah-the-outcry`

- **File:** `../tools/shot-designer/scenes/nehemiah-the-outcry.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a courtyard at midday, a crowd of the poor, a governor listening, a money lender's ledger
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood



