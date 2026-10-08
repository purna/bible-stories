# Ch.3 · The Vineyard Song

**Mood board 3 of 9** — Isaiah (Isaiah 1–12, 36–40, 53, 65–66)

| | |
| --- | --- |
| Data file | `../data/act3_the_vineyard_song.json` |
| SVG assets | `../assets/svg/act_03_the_vineyard_song/` |
| 3D scene | `isaiah-the-vineyard-song` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Tend a vineyard that yields injustice. — call-and-response |

> "Tend a vineyard that yields injustice."

## Director notes

The Lord sings of a vineyard planted on a fertile hill that yielded wild grapes instead of justice. Stage: a terraced vineyard at harvest, a stone watchtower, a winepress; grapes rotting on the vine; a golden hillside with a sad song over it.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_the_vineyard_song/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_the_vineyard_song/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `isaiah_act3_a_background.svg`, `isaiah_act3_a_middle_ground.svg`, and `isaiah_act3_a_foreground.svg`.
- `b_core_action/` contains `isaiah_act3_b_background.svg`, `isaiah_act3_b_middle_ground.svg`, and `isaiah_act3_b_foreground.svg`.
- `c_resolve/` contains `isaiah_act3_c_background.svg`, `isaiah_act3_c_middle_ground.svg`, and `isaiah_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a terraced vineyard at harvest, a stone watchtower, a winepress |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `isaiah-the-vineyard-song`

- **File:** `../tools/shot-designer/scenes/isaiah-the-vineyard-song.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a terraced vineyard at harvest, a stone watchtower, a winepress
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`rolling` `megalithic` `viticulture` `musical` `abundant`

