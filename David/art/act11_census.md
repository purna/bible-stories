# Ch.11 · The Census

**Mood board 11 of 12** — David (1 Samuel 16 – 1 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act11_census.json` |
| SVG assets | `../assets/svg/act_11_census/` |
| 3D scene | `david-census` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Choose responsibility during the plague. — observation |

> "Again the anger of the LORD was kindled against Israel, and He stirred up David to say, 'Go, count the people.' Joab the commander went out through all Israel and came back to David."

## Director notes

David counts the people and repents; the prophet Gad offers three choices, and a plague stalks Israel until the threshing floor of Araunah. Stage: a nation of tents under a wasting sky, a king on his rooftop in grief, an altar rising on a purchased threshing floor; grey light breaking warm.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_11_census/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_11_census/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `david_act11_a_background.svg`, `david_act11_a_middle_ground.svg`, and `david_act11_a_foreground.svg`.
- `b_core_action/` contains `david_act11_b_background.svg`, `david_act11_b_middle_ground.svg`, and `david_act11_b_foreground.svg`.
- `c_resolve/` contains `david_act11_c_background.svg`, `david_act11_c_middle_ground.svg`, and `david_act11_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a nation of tents under a wasting sky, a king on his rooftop in grief, an altar rising on a purchased threshing floor |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a0e08` (dark) → `#0a0604` (dark) → `#040202` (dark)
- **Vignette:** radial gradient centred at 50% 40% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `david-census`

- **File:** `../tools/shot-designer/scenes/david-census.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a nation of tents under a wasting sky, a king on his rooftop in grief, an altar rising on a purchased threshing floor
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`regal` `sacred` `prophetic`

