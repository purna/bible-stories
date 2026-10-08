# Act 5 · A Path Through the Water

**Mood board 5 of 15** — Moses (Exodus 1–40; Numbers; Deuteronomy 34)

| | |
| --- | --- |
| Data file | `../data/manifest.json` |
| SVG assets | `../assets/svg/act05_through_the_sea/` |
| 3D scene | `moses-sea` in `../tools/shot-designer/scenes/` |
| Particle mode | flood — churning spray and mist, cold teal light, walls of water at night |
| Game beat | Keep the people moving along the opened path. — ordered rhythm |

> "Pharaoh changed his mind. Six hundred of his best chariots pursued the Israelites to the edge of the sea."

## Director notes

The pillar of cloud goes behind, the sea is divided, and the people cross on dry ground; the waters return over the chariots. Stage: a sea with walls of water, a people walking on the seabed at night, the cloud lighting the way, the horses and the chariots drowned in the morning; a world of water held back.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act05_through_the_sea/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act05_through_the_sea/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `moses_act5_a_background.svg`, `moses_act5_a_middle_ground.svg`, and `moses_act5_a_foreground.svg`.
- `b_core_action/` contains `moses_act5_b_background.svg`, `moses_act5_b_middle_ground.svg`, and `moses_act5_b_foreground.svg`.
- `c_resolve/` contains `moses_act5_c_background.svg`, `moses_act5_c_middle_ground.svg`, and `moses_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json`.

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a sea with walls of water, a people walking on the seabed at night, the cloud lighting the way, the horses and the chariots drowned in the morning |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#061430` (dark) → `#020810` (dark) → `#010306` (dark)
- **Vignette:** radial gradient centred at 50% 60% — the eye lands here first
- **Ambience:** flood particles drift across the panels (churning spray and mist, cold teal light, walls of water at night)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `moses-sea`

- **File:** `../tools/shot-designer/scenes/moses-sea.js`, registered in `scenes/manifest.json`
- **Lighting:** flood — churning spray and mist, cold teal light, walls of water at night; hemisphere + key light tuned to the 2D palette
- **Set:** a sea with walls of water, a people walking on the seabed at night, the cloud lighting the way, the horses and the chariots drowned in the morning
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `nautical` `nocturnal`

