# The Flight to Horeb

**Mood board 4 of 7** — Eiljah (1 Kings 17–19, 21; 2 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act4_flight.json` |
| SVG assets | `../assets/svg/act_04_flight/` |
| 3D scene | `eiljah-flight` in `../tools/shot-designer/scenes/` |
| Particle mode | dust — dust |
| Game beat | Repair the altar with twelve stones. — assembly |

> "When Jezebel heard what had happened on Mount Carmel, she sent Elijah a deadly threat."

## Director notes

Elijah repairs the altar with twelve stones, drenches it with water, and calls down fire while the prophets of Baal cry out in vain. Stage: a ruined altar on a bare mountain headland, twelve stones, water running, a pillar of fire at dusk; the sea below, a crowd of prophets in panic.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_flight/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_flight/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `elijah_act4_a_background.svg`, `elijah_act4_a_middle_ground.svg`, and `elijah_act4_a_foreground.svg`.
- `b_core_action/` contains `elijah_act4_b_background.svg`, `elijah_act4_b_middle_ground.svg`, and `elijah_act4_b_foreground.svg`.
- `c_resolve/` contains `elijah_act4_c_background.svg`, `elijah_act4_c_middle_ground.svg`, and `elijah_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a ruined altar on a bare mountain headland, twelve stones, water running, a pillar of fire at dusk |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#5a3e2b` (deep) → `#3b2a1a` (dark)
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** dust particles drift across the panels (dust)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `eiljah-flight`

- **File:** `../tools/shot-designer/scenes/eiljah-flight.js`, registered in `scenes/manifest.json`
- **Lighting:** dust — dust; hemisphere + key light tuned to the 2D palette
- **Set:** a ruined altar on a bare mountain headland, twelve stones, water running, a pillar of fire at dusk
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`firelight` `aquatic` `nautical` `golden-hour` `sacred` `lofty`

