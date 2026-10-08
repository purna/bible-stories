# Ch.6 · Abigail

**Mood board 6 of 12** — David (1 Samuel 16 – 1 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act6_abigail.json` |
| SVG assets | `../assets/svg/act_06_abigail/` |
| 3D scene | `david-abigail` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Deliver provisions before anger becomes violence. — gather-with-care |

> "Nabal was a wealthy man in Maon, and his servants grazed his sheep in Carmel. David and his men had protected those flocks through the winter."

## Director notes

Abigail rides out with provisions to meet David before Nabal's foolishness becomes bloodshed, and she speaks peace. Stage: a donkey train descending a dry ravine at noon, a wise woman carrying loaves and wine, David's band armed on the ridge; terracotta, dust, and a tense standoff turning to grace.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_abigail/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_abigail/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `david_act6_a_background.svg`, `david_act6_a_middle_ground.svg`, and `david_act6_a_foreground.svg`.
- `b_core_action/` contains `david_act6_b_background.svg`, `david_act6_b_middle_ground.svg`, and `david_act6_b_foreground.svg`.
- `c_resolve/` contains `david_act6_c_background.svg`, `david_act6_c_middle_ground.svg`, and `david_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a donkey train descending a dry ravine at noon, a wise woman carrying loaves and wine, David's band armed on the ridge |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a14` (dark) → `#0a1408` (dark) → `#040802` (dark)
- **Vignette:** radial gradient centred at 60% 40% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `david-abigail`

- **File:** `../tools/shot-designer/scenes/david-abigail.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a donkey train descending a dry ravine at noon, a wise woman carrying loaves and wine, David's band armed on the ridge
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`dusty`

