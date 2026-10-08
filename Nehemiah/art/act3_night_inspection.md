# Ch.3 · Night Inspection

**Mood board 3 of 10** — Nehemiah (Nehemiah 1–13)

| | |
| --- | --- |
| Data file | `../data/act3_night_inspection.json` |
| SVG assets | `../assets/svg/act_03_night_inspection/` |
| 3D scene | `nehemiah-night-inspection` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Survey ruined walls without alerting opponents. — watch-and-move |

> "Survey ruined walls without alerting opponents."

## Director notes

Nehemiah rises by night with a few men and inspects the broken walls and gates, telling no one. Stage: a ruined city at midnight, a torch in the rubble, a man on foot by the wall; a broken gate, a pool, a valley of darkness; the plan being made in silence.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_night_inspection/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_night_inspection/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `nehemiah_act3_a_background.svg`, `nehemiah_act3_a_middle_ground.svg`, and `nehemiah_act3_a_foreground.svg`.
- `b_core_action/` contains `nehemiah_act3_b_background.svg`, `nehemiah_act3_b_middle_ground.svg`, and `nehemiah_act3_b_foreground.svg`.
- `c_resolve/` contains `nehemiah_act3_c_background.svg`, `nehemiah_act3_c_middle_ground.svg`, and `nehemiah_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a ruined city at midnight, a torch in the rubble, a man on foot by the wall |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `nehemiah-night-inspection`

- **File:** `../tools/shot-designer/scenes/nehemiah-night-inspection.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a ruined city at midnight, a torch in the rubble, a man on foot by the wall
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `fortified` `threshold` `urban`

