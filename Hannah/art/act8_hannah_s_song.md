# Ch.8 · Hannah’s Song

**Mood board 8 of 8** — Hannah (1 Samuel 1–2)

| | |
| --- | --- |
| Data file | `../data/act8_hannah_s_song.json` |
| SVG assets | `../assets/svg/act_08_hannah_s_song/` |
| 3D scene | `hannah-hannah-s-song` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Arrange lines of reversal and hope. — call-and-response |

> "Arrange lines of reversal and hope."

## Director notes

Hannah sings: the Lord makes poor and makes rich, brings low and lifts up; the Lord's anointed will be exalted. Stage: a woman standing in the temple court, arms lifted, the ark behind her; light on the courtyard stones; a song rising with the morning.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_08_hannah_s_song/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_08_hannah_s_song/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `hannah_act8_a_background.svg`, `hannah_act8_a_middle_ground.svg`, and `hannah_act8_a_foreground.svg`.
- `b_core_action/` contains `hannah_act8_b_background.svg`, `hannah_act8_b_middle_ground.svg`, and `hannah_act8_b_foreground.svg`.
- `c_resolve/` contains `hannah_act8_c_background.svg`, `hannah_act8_c_middle_ground.svg`, and `hannah_act8_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a woman standing in the temple court, arms lifted, the ark behind her |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a0e08` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `hannah-hannah-s-song`

- **File:** `../tools/shot-designer/scenes/hannah-hannah-s-song.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a woman standing in the temple court, arms lifted, the ark behind her
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`sacred` `musical`

