# Ch.9 · Nathan's Parable

**Mood board 9 of 12** — David (1 Samuel 16 – 1 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act9_nathan.json` |
| SVG assets | `../assets/svg/act_09_nathan/` |
| 3D scene | `david-nathan` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Recognise the king inside the story and repent. — match-it-up |

> "The prophet Nathan came to the king with a story about a poor man who had one little ewe lamb, and a rich man who took it from him and killed it for his guest."

## Director notes

The prophet Nathan tells the rich man with many sheep who takes the poor man's one ewe lamb — and David condemns himself. Stage: a candlelit chamber, the prophet with a staff, the king listening; two flocks in the background, one rich, one poor; a single lamp and a long silence.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_09_nathan/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_09_nathan/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `david_act9_a_background.svg`, `david_act9_a_middle_ground.svg`, and `david_act9_a_foreground.svg`.
- `b_core_action/` contains `david_act9_b_background.svg`, `david_act9_b_middle_ground.svg`, and `david_act9_b_foreground.svg`.
- `c_resolve/` contains `david_act9_c_background.svg`, `david_act9_c_middle_ground.svg`, and `david_act9_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a candlelit chamber, the prophet with a staff, the king listening |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241a10` (dark) → `#100a04` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 40% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `david-nathan`

- **File:** `../tools/shot-designer/scenes/david-nathan.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a candlelit chamber, the prophet with a staff, the king listening
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`regal` `prophetic` `pastoral`

