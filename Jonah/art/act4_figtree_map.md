# The Plant and the Lesson

**Mood board 4 of 4** — Jonah (Jonah 1–4)

| | |
| --- | --- |
| Data file | `../data/act4_figtree_map.json` |
| SVG assets | `../assets/svg/act_04_figtree_map/` |
| 3D scene | `jonah-figtree-map` in `../tools/shot-designer/scenes/` |
| Particle mode | midday — heat haze, shimmering air, bleached highlights |
| Game beat | Manage shade, worm, and hot wind. — balance |

> "Jonah sat under the plant, angry that Nineveh was spared. Explore this final scene."

## Director notes

God makes a plant to shade Jonah, and Jonah is glad; then a worm attacks it, and the sun beats on his head. Stage: a booth on a hill above the city, a gourd growing in a single night, a man sheltering, a worm in the morning; a hot day, a lost shade. God asks Jonah: should not I have compassion on Nineveh, that great city with more than a hundred and twenty thousand? Stage: the booth at evening, a man and a question, a city in the distance full of lamps; the last light of the day over a city that did not know its right hand from its left.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_figtree_map/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_figtree_map/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jonah_act8_a_background.svg`, `jonah_act8_a_middle_ground.svg`, and `jonah_act8_a_foreground.svg`.
- `b_core_action/` contains `jonah_act8_b_background.svg`, `jonah_act8_b_middle_ground.svg`, and `jonah_act8_b_foreground.svg`.
- `c_resolve/` contains `jonah_act8_c_background.svg`, `jonah_act8_c_middle_ground.svg`, and `jonah_act8_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a booth on a hill above the city, a gourd growing in a single night, a man sheltering, a worm in the morning |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#e8c87a` (light) → `#a05a2c` (deep)
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** midday particles drift across the panels (heat haze, shimmering air, bleached highlights)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jonah-figtree-map`

- **File:** `../tools/shot-designer/scenes/jonah-figtree-map.js`, registered in `scenes/manifest.json`
- **Lighting:** midday — heat haze, shimmering air, bleached highlights; hemisphere + key light tuned to the 2D palette
- **Set:** a booth on a hill above the city, a gourd growing in a single night, a man sheltering, a worm in the morning
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `lamplight` `numinous` `rolling` `urban`

