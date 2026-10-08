# Act 15 · The Land from Afar

**Mood board 15 of 15** — Moses (Exodus 1–40; Numbers; Deuteronomy 34)

| | |
| --- | --- |
| Data file | `../data/act15_nebo.json` |
| SVG assets | `../assets/svg/act_15_nebo/` |
| 3D scene | `moses-nebo` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Appoint Joshua and identify the land from afar. — match-it-up |

> "Moses was now a hundred and twenty years old. His eyes were not weak. His legs were not feeble."

## Director notes

Moses goes up to Mount Nebo and sees the whole land, and the Lord buries him in the valley; a prophet without equal in Israel. Stage: a mountain at sunset, a man looking over the land of promise, the light on the far hills; the last view, a grave no one knows, the road ending.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_15_nebo/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_15_nebo/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `moses_act15_a_background.svg`, `moses_act15_a_middle_ground.svg`, and `moses_act15_a_foreground.svg`.
- `b_core_action/` contains `moses_act15_b_background.svg`, `moses_act15_b_middle_ground.svg`, and `moses_act15_b_foreground.svg`.
- `c_resolve/` contains `moses_act15_c_background.svg`, `moses_act15_c_middle_ground.svg`, and `moses_act15_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a mountain at sunset, a man looking over the land of promise, the light on the far hills |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#10140a` (dark) → `#1c2014` (dark) → `#080a04` (dark)
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `moses-nebo`

- **File:** `../tools/shot-designer/scenes/moses-nebo.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a mountain at sunset, a man looking over the land of promise, the light on the far hills
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`golden-hour` `prophetic` `lofty` `funereal` `aspirational` `peripatetic`

