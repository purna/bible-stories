# Ch.4 · Covenant Friends

**Mood board 4 of 12** — David (1 Samuel 16 – 1 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act4_friends.json` |
| SVG assets | `../assets/svg/act_04_friends/` |
| 3D scene | `david-friends` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Exchange signals with Jonathan unseen. — watch-and-move |

> "David fled to the wilderness, first to Gath and then into the caves of Adullam. Men came to him — the dispossessed, the in debt, the discontented — and he became their leader."

## Director notes

Jonathan and David make a covenant, exchanging tokens — the robe, tunic, sword, bow and belt. Stage: a field outside the camp at dawn, two young men kneeling, a prince's robe passing to the shepherd; parted friends on a rising road; pale morning gold.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_friends/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_friends/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `david_act4_a_background.svg`, `david_act4_a_middle_ground.svg`, and `david_act4_a_foreground.svg`.
- `b_core_action/` contains `david_act4_b_background.svg`, `david_act4_b_middle_ground.svg`, and `david_act4_b_foreground.svg`.
- `c_resolve/` contains `david_act4_c_background.svg`, `david_act4_c_middle_ground.svg`, and `david_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a field outside the camp at dawn, two young men kneeling, a prince's robe passing to the shepherd |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1024` (dark) → `#0a0610` (dark) → `#040208` (dark)
- **Vignette:** radial gradient centred at 50% 40% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `david-friends`

- **File:** `../tools/shot-designer/scenes/david-friends.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a field outside the camp at dawn, two young men kneeling, a prince's robe passing to the shepherd
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `pastoral` `military-camp` `martial` `solemn` `peripatetic`

