# Ch.8 · The Servant

**Mood board 8 of 9** — Isaiah (Isaiah 1–12, 36–40, 53, 65–66)

| | |
| --- | --- |
| Data file | `../data/act8_the_servant.json` |
| SVG assets | `../assets/svg/act_08_the_servant/` |
| 3D scene | `isaiah-the-servant` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Match suffering, justice, and healing motifs. — match-it-up |

> "Match suffering, justice, and healing motifs."

## Director notes

The servant is despised and pierced for our transgressions, and by his wounds we are healed. Stage: a figure on a lonely road at dusk, shadowed by a crowd, wounds in his hands; a lantern carried in the dark; the quietest, darkest scene of the book.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_08_the_servant/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_08_the_servant/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `isaiah_act8_a_background.svg`, `isaiah_act8_a_middle_ground.svg`, and `isaiah_act8_a_foreground.svg`.
- `b_core_action/` contains `isaiah_act8_b_background.svg`, `isaiah_act8_b_middle_ground.svg`, and `isaiah_act8_b_foreground.svg`.
- `c_resolve/` contains `isaiah_act8_c_background.svg`, `isaiah_act8_c_middle_ground.svg`, and `isaiah_act8_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a figure on a lonely road at dusk, shadowed by a crowd, wounds in his hands |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a0e08` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `isaiah-the-servant`

- **File:** `../tools/shot-designer/scenes/isaiah-the-servant.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a figure on a lonely road at dusk, shadowed by a crowd, wounds in his hands
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`golden-hour` `peripatetic`

