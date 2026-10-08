# Ch.2 · A New Queen

**Mood board 2 of 10** — Esther (Esther 1–9)

| | |
| --- | --- |
| Data file | `../data/act2_a_new_queen.json` |
| SVG assets | `../assets/svg/act_02_a_new_queen/` |
| 3D scene | `esther-a-new-queen` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Prepare Esther while protecting her identity. — gather-with-care |

> "Prepare Esther while protecting her identity."

## Director notes

Esther, a Jewish orphan in the care of Mordecai, is taken to the king and wins the crown. Stage: a harem court at dawn, young women in myrrh and perfumes, Esther stepping forward; a crown lifted; rose and gold light.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_a_new_queen/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_a_new_queen/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `esther_act2_a_background.svg`, `esther_act2_a_middle_ground.svg`, and `esther_act2_a_foreground.svg`.
- `b_core_action/` contains `esther_act2_b_background.svg`, `esther_act2_b_middle_ground.svg`, and `esther_act2_b_foreground.svg`.
- `c_resolve/` contains `esther_act2_c_background.svg`, `esther_act2_c_middle_ground.svg`, and `esther_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a harem court at dawn, young women in myrrh and perfumes, Esther stepping forward |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a0e08` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `esther-a-new-queen`

- **File:** `../tools/shot-designer/scenes/esther-a-new-queen.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a harem court at dawn, young women in myrrh and perfumes, Esther stepping forward
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `regal`

