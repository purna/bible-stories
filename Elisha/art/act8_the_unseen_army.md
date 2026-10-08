# Ch.8 · The Unseen Army

**Mood board 8 of 9** — Elisha (1 Kings 19; 2 Kings 2–7)

| | |
| --- | --- |
| Data file | `../data/act8_the_unseen_army.json` |
| SVG assets | `../assets/svg/act_08_the_unseen_army/` |
| 3D scene | `elisha-the-unseen-army` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Reveal protection around the frightened servant. — watch-and-move |

> "Reveal protection around the frightened servant."

## Director notes

The king of Aram surrounds Dothan; Elisha prays and the servant sees a mountain full of horses and chariots of fire. Stage: a dawn plain, a city under siege, a servant's eyes opening to an invisible army blazing on the hills; firelight on the clouds.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_08_the_unseen_army/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_08_the_unseen_army/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `elisha_act8_a_background.svg`, `elisha_act8_a_middle_ground.svg`, and `elisha_act8_a_foreground.svg`.
- `b_core_action/` contains `elisha_act8_b_background.svg`, `elisha_act8_b_middle_ground.svg`, and `elisha_act8_b_foreground.svg`.
- `c_resolve/` contains `elisha_act8_c_background.svg`, `elisha_act8_c_middle_ground.svg`, and `elisha_act8_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a dawn plain, a city under siege, a servant's eyes opening to an invisible army blazing on the hills |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a0e08` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `elisha-the-unseen-army`

- **File:** `../tools/shot-designer/scenes/elisha-the-unseen-army.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a dawn plain, a city under siege, a servant's eyes opening to an invisible army blazing on the hills
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`firelight` `first-light` `military` `regal` `lofty` `urban`

