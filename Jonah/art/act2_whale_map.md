# The Great Fish

**Mood board 2 of 4** — Jonah (Jonah 1–4)

| | |
| --- | --- |
| Data file | `../data/act2_whale_map.json` |
| SVG assets | `../assets/svg/act_02_whale_map/` |
| 3D scene | `jonah-whale-map` in `../tools/shot-designer/scenes/` |
| Particle mode | deep — slow rising bubbles, blue-green gloom, filtered light |
| Game beat | Navigate sinking currents toward the great fish. — pathfinding |

> "Inside the great fish, Jonah had time to think. Explore this dark, strange place."

## Director notes

The sailors hurl Jonah into the sea and the sea grows calm; a great fish swallows him. Stage: a black sea at midnight, a figure sinking into the deep, a great shadow rising beneath him; the water calming behind the boat; the last light at the surface. Jonah prays from the fish's belly, from the belly of Sheol, and his prayer reaches the temple. Stage: a dark, red-lit interior, a man kneeling in a vast shadow, prayer rising like smoke; the walls of the deep around him; a single shaft of light from far above.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_nineveh_map/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_nineveh_map/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jonah_act3_a_background.svg`, `jonah_act3_a_middle_ground.svg`, and `jonah_act3_a_foreground.svg`.
- `b_core_action/` contains `jonah_act3_b_background.svg`, `jonah_act3_b_middle_ground.svg`, and `jonah_act3_b_foreground.svg`.
- `c_resolve/` contains `jonah_act3_c_background.svg`, `jonah_act3_c_middle_ground.svg`, and `jonah_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a black sea at midnight, a figure sinking into the deep, a great shadow rising beneath him |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#8fb7c9` (light) → `#1c3d54` (dark)
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** deep particles drift across the panels (slow rising bubbles, blue-green gloom, filtered light)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jonah-whale-map`

- **File:** `../tools/shot-designer/scenes/jonah-whale-map.js`, registered in `scenes/manifest.json`
- **Lighting:** deep — slow rising bubbles, blue-green gloom, filtered light; hemisphere + key light tuned to the 2D palette
- **Set:** a black sea at midnight, a figure sinking into the deep, a great shadow rising beneath him
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `nautical` `nocturnal` `sacred` `devotional`

