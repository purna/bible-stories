# Ch.5 · For Such a Time

**Mood board 5 of 10** — Esther (Esther 1–9)

| | |
| --- | --- |
| Data file | `../data/act5_for_such_a_time.json` |
| SVG assets | `../assets/svg/act_05_for_such_a_time/` |
| 3D scene | `esther-for-such-a-time` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Fast, gather courage, and approach the throne. — gather-with-care |

> "Fast, gather courage, and approach the throne."

## Director notes

Mordecai's plea comes to Esther: relief will come from another quarter — and who knows but you have come to the kingdom for such a time? Stage: a courtyard with a purple canopy, Mordecai in sackcloth beyond the gate, Esther in the doorway weighing her life; midday stillness.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_for_such_a_time/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_for_such_a_time/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `esther_act5_a_background.svg`, `esther_act5_a_middle_ground.svg`, and `esther_act5_a_foreground.svg`.
- `b_core_action/` contains `esther_act5_b_background.svg`, `esther_act5_b_middle_ground.svg`, and `esther_act5_b_foreground.svg`.
- `c_resolve/` contains `esther_act5_c_background.svg`, `esther_act5_c_middle_ground.svg`, and `esther_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a courtyard with a purple canopy, Mordecai in sackcloth beyond the gate, Esther in the doorway weighing her life |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a0e08` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `esther-for-such-a-time`

- **File:** `../tools/shot-designer/scenes/esther-for-such-a-time.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a courtyard with a purple canopy, Mordecai in sackcloth beyond the gate, Esther in the doorway weighing her life
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`threshold`

