# Ch.2 · The Summons

**Mood board 2 of 7** — Deborah (Judges 4–5)

| | |
| --- | --- |
| Data file | `../data/act2_the_summons.json` |
| SVG assets | `../assets/svg/act_02_the_summons/` |
| 3D scene | `deborah-the-summons` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Carry the summons — sequence |

> "Deborah sent for Barak and gave him God’s command: gather ten thousand and march to Mount Tabor."

## Director notes

Deborah sends for Barak son of Abinoam and charges him to muster ten thousand at Mount Tabor against Sisera's chariot army. Stage: a messenger crossing terraced fields, the judge's voice carrying, Barak weighing the risk; a woman's resolve against a soldier's doubt; midday clarity.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_the_summons/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_the_summons/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `deborah_act2_a_background.svg`, `deborah_act2_a_middle_ground.svg`, and `deborah_act2_a_foreground.svg`.
- `b_core_action/` contains `deborah_act2_b_background.svg`, `deborah_act2_b_middle_ground.svg`, and `deborah_act2_b_foreground.svg`.
- `c_resolve/` contains `deborah_act2_c_background.svg`, `deborah_act2_c_middle_ground.svg`, and `deborah_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a messenger crossing terraced fields, the judge's voice carrying, Barak weighing the risk |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#d4a76a` (light) → `#6b4423` (deep)
- **Vignette:** radial gradient centred at 50% 25% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `deborah-the-summons`

- **File:** `../tools/shot-designer/scenes/deborah-the-summons.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a messenger crossing terraced fields, the judge's voice carrying, Barak weighing the risk
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`military` `martial`

