# Ch.6 · Storehouses

**Mood board 6 of 10** — Joseph (Genesis 37–47)

| | |
| --- | --- |
| Data file | `../data/act6_storehouses.json` |
| SVG assets | `../assets/svg/act_06_storehouses/` |
| 3D scene | `joseph-storehouses` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Plan grain reserves across Egypt. — pathfinding |

> "Plan grain reserves across Egypt."

## Director notes

Joseph is made governor, and Egypt gathers the grain of seven plenty into storehouses, city by city. Stage: a Nile landscape in high summer, fields of wheat, great storehouses with sealed doors, scribes and ox-carts; a nation's patience, measured in grain.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_storehouses/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_storehouses/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joseph_act6_a_background.svg`, `joseph_act6_a_middle_ground.svg`, and `joseph_act6_a_foreground.svg`.
- `b_core_action/` contains `joseph_act6_b_background.svg`, `joseph_act6_b_middle_ground.svg`, and `joseph_act6_b_foreground.svg`.
- `c_resolve/` contains `joseph_act6_c_background.svg`, `joseph_act6_c_middle_ground.svg`, and `joseph_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a Nile landscape in high summer, fields of wheat, great storehouses with sealed doors, scribes and ox-carts |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a14` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joseph-storehouses`

- **File:** `../tools/shot-designer/scenes/joseph-storehouses.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a Nile landscape in high summer, fields of wheat, great storehouses with sealed doors, scribes and ox-carts
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`harvest` `urban`

