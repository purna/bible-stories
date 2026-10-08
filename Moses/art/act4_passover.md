# Act 4 · Passover Night

**Mood board 4 of 15** — Moses (Exodus 1–40; Numbers; Deuteronomy 34)

| | |
| --- | --- |
| Data file | `../data/manifest.json` |
| SVG assets | `../assets/svg/act04_passover_night/` |
| 3D scene | `moses-passover` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — lamplight and firelight, warm amber accents against near-black blue |
| Game beat | Prepare the meal and mark the doorway before departure. — gather-with-care |

> "Plague after plague had fallen. Water to blood. Frogs. Gnats. Flies. Death of livestock. Boils. Hail. Locusts. Darkness."

## Director notes

The people eat the lamb in haste, with loins girded, and the blood marks the doorposts; the destroyer passes over. Stage: a night house with a meal of lamb and unleavened bread, a door marked with a bunch of hyssop; a family waiting, a city holding its breath.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act04_passover_night/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act04_passover_night/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `moses_act4_a_background.svg`, `moses_act4_a_middle_ground.svg`, and `moses_act4_a_foreground.svg`.
- `b_core_action/` contains `moses_act4_b_background.svg`, `moses_act4_b_middle_ground.svg`, and `moses_act4_b_foreground.svg`.
- `c_resolve/` contains `moses_act4_c_background.svg`, `moses_act4_c_middle_ground.svg`, and `moses_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json`.

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a night house with a meal of lamb and unleavened bread, a door marked with a bunch of hyssop |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#100808` (dark) → `#1f1010` (dark) → `#080404` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (lamplight and firelight, warm amber accents against near-black blue)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `moses-passover`

- **File:** `../tools/shot-designer/scenes/moses-passover.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — lamplight and firelight, warm amber accents against near-black blue; hemisphere + key light tuned to the 2D palette
- **Set:** a night house with a meal of lamb and unleavened bread, a door marked with a bunch of hyssop
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `humble` `urban` `gory`

