# Ch.8 · The Wall Completed

**Mood board 8 of 10** — Nehemiah (Nehemiah 1–13)

| | |
| --- | --- |
| Data file | `../data/act8_the_wall_completed.json` |
| SVG assets | `../assets/svg/act_08_the_wall_completed/` |
| 3D scene | `nehemiah-the-wall-completed` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Close the final gap and set gatekeepers. — ordered rhythm |

> "Close the final gap and set gatekeepers."

## Director notes

The wall is finished in fifty-two days, and the enemies are afraid, knowing the work was done with the help of God. Stage: a finished wall at sunrise, a city gate closed, a man on the wall looking out; the sound of a trumpet, the fear of the neighbours.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_08_the_wall_completed/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_08_the_wall_completed/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `nehemiah_act8_a_background.svg`, `nehemiah_act8_a_middle_ground.svg`, and `nehemiah_act8_a_foreground.svg`.
- `b_core_action/` contains `nehemiah_act8_b_background.svg`, `nehemiah_act8_b_middle_ground.svg`, and `nehemiah_act8_b_foreground.svg`.
- `c_resolve/` contains `nehemiah_act8_c_background.svg`, `nehemiah_act8_c_middle_ground.svg`, and `nehemiah_act8_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a finished wall at sunrise, a city gate closed, a man on the wall looking out |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a0e08` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `nehemiah-the-wall-completed`

- **File:** `../tools/shot-designer/scenes/nehemiah-the-wall-completed.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a finished wall at sunrise, a city gate closed, a man on the wall looking out
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `numinous` `fortified` `threshold` `urban`

