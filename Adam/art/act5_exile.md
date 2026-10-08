# Exile

**Mood board 5 of 6** — Adam (Genesis 1–5)

| | |
| --- | --- |
| Data file | `../data/act5_exile.json` |
| SVG assets | `../assets/svg/act_05_exile/` |
| 3D scene | `adam-exile` in `../tools/shot-designer/scenes/` |
| Particle mode | stars — stars |
| Game beat | Spot the serpent’s half-truths in a dialogue puzzle. — observation |

> "God spoke to the serpent, and pronounced judgment on the curse of the earth."

## Director notes

The serpent, craftier than any beast, questions the command and the woman takes the fruit. Stage: the forbidden tree in shadow, a coiled serpent in the branches, the woman's hand reaching; dappled light turning colder, the first tension in an idyll.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_exile/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_exile/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `adam_act5_a_background.svg`, `adam_act5_a_middle_ground.svg`, and `adam_act5_a_foreground.svg`.
- `b_core_action/` contains `adam_act5_b_background.svg`, `adam_act5_b_middle_ground.svg`, and `adam_act5_b_foreground.svg`.
- `c_resolve/` contains `adam_act5_c_background.svg`, `adam_act5_c_middle_ground.svg`, and `adam_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the forbidden tree in shadow, a coiled serpent in the branches, the woman's hand reaching |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#0A0812` (dark) → `#061224` (dark) → `#030b18` (dark)
- **Vignette:** radial gradient centred at 30% 30% — the eye lands here first
- **Ambience:** stars particles drift across the panels (stars)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `adam-exile`

- **File:** `../tools/shot-designer/scenes/adam-exile.js`, registered in `scenes/manifest.json`
- **Lighting:** stars — stars; hemisphere + key light tuned to the 2D palette
- **Set:** the forbidden tree in shadow, a coiled serpent in the branches, the woman's hand reaching
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`verdant`

