# Ch.3 · Gather at Tabor

**Mood board 3 of 7** — Deborah (Judges 4–5)

| | |
| --- | --- |
| Data file | `../data/act3_gather_at_tabor.json` |
| SVG assets | `../assets/svg/act_03_gather_at_tabor/` |
| 3D scene | `deborah-gather-at-tabor` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Gather at Tabor — sequence |

> "Barak called Zebulun and Naphtali, and the people began climbing toward Mount Tabor."

## Director notes

The tribes rally on Tabor while Sisera marshals nine hundred iron chariots from Harosheth. Stage: a high hilltop mustering ground, spears glinting, campfires on the plain below; the enemy's chariot tracks darkening the valley; dawn assembly, mist on the heights.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_gather_at_tabor/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_gather_at_tabor/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `deborah_act3_a_background.svg`, `deborah_act3_a_middle_ground.svg`, and `deborah_act3_a_foreground.svg`.
- `b_core_action/` contains `deborah_act3_b_background.svg`, `deborah_act3_b_middle_ground.svg`, and `deborah_act3_b_foreground.svg`.
- `c_resolve/` contains `deborah_act3_c_background.svg`, `deborah_act3_c_middle_ground.svg`, and `deborah_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a high hilltop mustering ground, spears glinting, campfires on the plain below |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#9b815d` (mid) → `#344632` (deep)
- **Vignette:** radial gradient centred at 50% 22% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `deborah-gather-at-tabor`

- **File:** `../tools/shot-designer/scenes/deborah-gather-at-tabor.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a high hilltop mustering ground, spears glinting, campfires on the plain below
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `martial`

