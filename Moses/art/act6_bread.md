# Act 6 · Enough for Today

**Mood board 6 of 15** — Moses (Exodus 1–40; Numbers; Deuteronomy 34)

| | |
| --- | --- |
| Data file | `../data/manifest.json` |
| SVG assets | `../assets/svg/act06_bread_in_the_wilderness/` |
| 3D scene | `moses-bread` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Gather only enough manna for the day. — gather-with-care |

> "Three days into the wilderness — no water. The people came to a place called Marah. The water there was bitter."

## Director notes

The Lord gives manna in the morning and quails in the evening; the people gather only enough for the day. Stage: a wilderness camp at dawn, a white ground like frost, small round things lying all around, a jar of manna kept for the testimony; a people learning to trust the day.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act06_bread_in_the_wilderness/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act06_bread_in_the_wilderness/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `moses_act6_a_background.svg`, `moses_act6_a_middle_ground.svg`, and `moses_act6_a_foreground.svg`.
- `b_core_action/` contains `moses_act6_b_background.svg`, `moses_act6_b_middle_ground.svg`, and `moses_act6_b_foreground.svg`.
- `c_resolve/` contains `moses_act6_c_background.svg`, `moses_act6_c_middle_ground.svg`, and `moses_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json`.

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a wilderness camp at dawn, a white ground like frost, small round things lying all around, a jar of manna kept for the testimony |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1c1408` (dark) → `#2e2010` (dark) → `#0c0804` (dark)
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `moses-bread`

- **File:** `../tools/shot-designer/scenes/moses-bread.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a wilderness camp at dawn, a white ground like frost, small round things lying all around, a jar of manna kept for the testimony
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `lamplight` `humble` `military-camp` `barren`

