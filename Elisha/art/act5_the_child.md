# Ch.5 · The Child

**Mood board 5 of 9** — Elisha (1 Kings 19; 2 Kings 2–7)

| | |
| --- | --- |
| Data file | `../data/act5_the_child.json` |
| SVG assets | `../assets/svg/act_05_the_child/` |
| 3D scene | `elisha-the-child` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Climb to the room and persist in care. — pathfinding |

> "Climb to the room and persist in care."

## Director notes

The Shunammite's son collapses in the field; she carries him to the room and lays him on Elisha's bed, and the prophet restores him. Stage: a field at midday, a child limp in his mother's arms, then the room with the boy breathing again; urgency, then quiet light.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_the_child/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_the_child/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `elisha_act5_a_background.svg`, `elisha_act5_a_middle_ground.svg`, and `elisha_act5_a_foreground.svg`.
- `b_core_action/` contains `elisha_act5_b_background.svg`, `elisha_act5_b_middle_ground.svg`, and `elisha_act5_b_foreground.svg`.
- `c_resolve/` contains `elisha_act5_c_background.svg`, `elisha_act5_c_middle_ground.svg`, and `elisha_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a field at midday, a child limp in his mother's arms, then the room with the boy breathing again |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241810` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `elisha-the-child`

- **File:** `../tools/shot-designer/scenes/elisha-the-child.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a field at midday, a child limp in his mother's arms, then the room with the boy breathing again
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`pastoral` `prophetic` `tender` `maternal`

