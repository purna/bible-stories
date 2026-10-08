# Ch.2 · Before the King

**Mood board 2 of 10** — Nehemiah (Nehemiah 1–13)

| | |
| --- | --- |
| Data file | `../data/act2_before_the_king.json` |
| SVG assets | `../assets/svg/act_02_before_the_king/` |
| 3D scene | `nehemiah-before-the-king` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Choose a clear request and realistic resources. — observation |

> "Choose a clear request and realistic resources."

## Director notes

Nehemiah asks the king for letters and timber, and the king grants what he asks, and he goes to the governors beyond the river. Stage: a royal throne room at noon, a cupbearer standing, a king with his sceptre, a scroll of letters; the favour of a monarch, a journey beginning.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_before_the_king/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_before_the_king/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `nehemiah_act2_a_background.svg`, `nehemiah_act2_a_middle_ground.svg`, and `nehemiah_act2_a_foreground.svg`.
- `b_core_action/` contains `nehemiah_act2_b_background.svg`, `nehemiah_act2_b_middle_ground.svg`, and `nehemiah_act2_b_foreground.svg`.
- `c_resolve/` contains `nehemiah_act2_c_background.svg`, `nehemiah_act2_c_middle_ground.svg`, and `nehemiah_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a royal throne room at noon, a cupbearer standing, a king with his sceptre, a scroll of letters |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `nehemiah-before-the-king`

- **File:** `../tools/shot-designer/scenes/nehemiah-before-the-king.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a royal throne room at noon, a cupbearer standing, a king with his sceptre, a scroll of letters
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`riverine` `regal` `peripatetic`

