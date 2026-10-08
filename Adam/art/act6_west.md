# West of the Divide

**Mood board 6 of 6** — Adam (Genesis 1–5)

| | |
| --- | --- |
| Data file | `../data/act6_west.json` |
| SVG assets | `../assets/svg/act_06_west/` |
| 3D scene | `adam-west` in `../tools/shot-designer/scenes/` |
| Particle mode | stars — stars |
| Game beat | Follow footprints and admit what happened. — pathfinding |

> "The story continues west of the divide — where the seed of the woman journeys through promise and peril, toward the dawn of redemption."

## Director notes

They hear the Lord walking in the garden at the cool of the day and hide among the trees. Stage: tall grasses and fig leaves at evening, two figures crouched, guilty and bare; a searching shaft of light moving through the grove.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_west/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_west/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `adam_act6_a_background.svg`, `adam_act6_a_middle_ground.svg`, and `adam_act6_a_foreground.svg`.
- `b_core_action/` contains `adam_act6_b_background.svg`, `adam_act6_b_middle_ground.svg`, and `adam_act6_b_foreground.svg`.
- `c_resolve/` contains `adam_act6_c_background.svg`, `adam_act6_c_middle_ground.svg`, and `adam_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: tall grasses and fig leaves at evening, two figures crouched, guilty and bare |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#0d1b2a` (dark) → `#061224` (dark) → `#030b18` (dark)
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** stars particles drift across the panels (stars)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `adam-west`

- **File:** `../tools/shot-designer/scenes/adam-west.js`, registered in `scenes/manifest.json`
- **Lighting:** stars — stars; hemisphere + key light tuned to the 2D palette
- **Set:** tall grasses and fig leaves at evening, two figures crouched, guilty and bare
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`lamplight` `verdant`

