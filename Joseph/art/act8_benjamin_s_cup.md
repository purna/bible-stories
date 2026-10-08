# Ch.8 · Benjamin’s Cup

**Mood board 8 of 10** — Joseph (Genesis 37–47)

| | |
| --- | --- |
| Data file | `../data/act8_benjamin_s_cup.json` |
| SVG assets | `../assets/svg/act_08_benjamin_s_cup/` |
| 3D scene | `joseph-benjamin-s-cup` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Trace the hidden cup and Judah’s offer. — match-it-up |

> "Trace the hidden cup and Judah’s offer."

## Director notes

Joseph plants his silver cup in Benjamin's sack, and offers to keep the thief as his slave. Stage: a grain hall at dawn, a steward with a cup, the brothers returning in fear, a cup found in the youngest's sack; a test of love for the father's son.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_08_benjamin_s_cup/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_08_benjamin_s_cup/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joseph_act8_a_background.svg`, `joseph_act8_a_middle_ground.svg`, and `joseph_act8_a_foreground.svg`.
- `b_core_action/` contains `joseph_act8_b_background.svg`, `joseph_act8_b_middle_ground.svg`, and `joseph_act8_b_foreground.svg`.
- `c_resolve/` contains `joseph_act8_c_background.svg`, `joseph_act8_c_middle_ground.svg`, and `joseph_act8_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a grain hall at dawn, a steward with a cup, the brothers returning in fear, a cup found in the youngest's sack |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a0e08` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joseph-benjamin-s-cup`

- **File:** `../tools/shot-designer/scenes/joseph-benjamin-s-cup.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a grain hall at dawn, a steward with a cup, the brothers returning in fear, a cup found in the youngest's sack
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `harvest`

