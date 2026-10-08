# Ch.2 · The Voice at Night

**Mood board 2 of 10** — Samuel (1 Samuel 1–16)

| | |
| --- | --- |
| Data file | `../data/act2_the_voice_at_night.json` |
| SVG assets | `../assets/svg/act_02_the_voice_at_night/` |
| 3D scene | `samuel-the-voice-at-night` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Listen three times and answer correctly. — call-and-response |

> "Listen three times and answer correctly."

## Director notes

The Lord calls Samuel in the night; he runs to Eli three times before Eli says: speak, Lord, for your servant is listening. Stage: a dark temple at night, a boy waking, a lamp burning low, an old priest's hand; the fourth call, the answer, the light in the boy's eyes.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_the_voice_at_night/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_the_voice_at_night/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `samuel_act2_a_background.svg`, `samuel_act2_a_middle_ground.svg`, and `samuel_act2_a_foreground.svg`.
- `b_core_action/` contains `samuel_act2_b_background.svg`, `samuel_act2_b_middle_ground.svg`, and `samuel_act2_b_foreground.svg`.
- `c_resolve/` contains `samuel_act2_c_background.svg`, `samuel_act2_c_middle_ground.svg`, and `samuel_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a dark temple at night, a boy waking, a lamp burning low, an old priest's hand |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `samuel-the-voice-at-night`

- **File:** `../tools/shot-designer/scenes/samuel-the-voice-at-night.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a dark temple at night, a boy waking, a lamp burning low, an old priest's hand
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`incandescent` `nocturnal` `sacred`

