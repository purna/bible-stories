# Ch.3 · The Fleece

**Mood board 3 of 7** — Gideon (Judges 6–8)

| | |
| --- | --- |
| Data file | `../data/act3_the_fleece.json` |
| SVG assets | `../assets/svg/act_03_the_fleece/` |
| 3D scene | `gideon-the-fleece` in `../tools/shot-designer/scenes/` |
| Particle mode | dew — dew |
| Game beat | Lay out the fleece, check for dew at dawn. — watch-and-move |

> "Before the battle, Gideon asks God for one more sign. He lays a fleece of wool on the threshing floor."

## Director notes

Gideon lays a wool fleece on the threshing floor: dew on the fleece alone, then dry fleece on wet ground. Stage: a threshing floor at dawn, a single fleece glistening with dew, the ground around it parched; silence, patience, and a second night reversed.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_the_fleece/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_the_fleece/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `gideon_act3_a_background.svg`, `gideon_act3_a_middle_ground.svg`, and `gideon_act3_a_foreground.svg`.
- `b_core_action/` contains `gideon_act3_b_background.svg`, `gideon_act3_b_middle_ground.svg`, and `gideon_act3_b_foreground.svg`.
- `c_resolve/` contains `gideon_act3_c_background.svg`, `gideon_act3_c_middle_ground.svg`, and `gideon_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a threshing floor at dawn, a single fleece glistening with dew, the ground around it parched |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1420` (dark) → `#0a0502` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dew particles drift across the panels (dew)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `gideon-the-fleece`

- **File:** `../tools/shot-designer/scenes/gideon-the-fleece.js`, registered in `scenes/manifest.json`
- **Lighting:** dew — dew; hemisphere + key light tuned to the 2D palette
- **Set:** a threshing floor at dawn, a single fleece glistening with dew, the ground around it parched
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `first-light` ` pastoral`

