# Ch.7 · The Song

**Mood board 7 of 7** — Deborah (Judges 4–5)

| | |
| --- | --- |
| Data file | `../data/act7_the_song.json` |
| SVG assets | `../assets/svg/act_07_the_song/` |
| 3D scene | `deborah-the-song` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Build the victory song — song |

> "Deborah and Barak sang, remembering willing leaders, courageous people, and the God who went before them."

## Director notes

Deborah and Barak sing the victory song — the stars fought from heaven, the river swept the enemy away. Stage: two figures on a rise above the plain, the army camped below in a ring of fires; the song rising over still water; the first clean light after the storm.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_the_song/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_the_song/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `deborah_act7_a_background.svg`, `deborah_act7_a_middle_ground.svg`, and `deborah_act7_a_foreground.svg`.
- `b_core_action/` contains `deborah_act7_b_background.svg`, `deborah_act7_b_middle_ground.svg`, and `deborah_act7_b_foreground.svg`.
- `c_resolve/` contains `deborah_act7_c_background.svg`, `deborah_act7_c_middle_ground.svg`, and `deborah_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: two figures on a rise above the plain, the army camped below in a ring of fires |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#f6e05e` (pale) → `#7b5a28` (deep)
- **Vignette:** radial gradient centred at 50% 25% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `deborah-the-song`

- **File:** `../tools/shot-designer/scenes/deborah-the-song.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** two figures on a rise above the plain, the army camped below in a ring of fires
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`tempest` `aquatic` `riverine` `military` `musical`

