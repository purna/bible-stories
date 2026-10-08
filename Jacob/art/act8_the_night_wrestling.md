# Ch.8 · The Night Wrestling

**Mood board 8 of 10** — Jacob (Genesis 25–37)

| | |
| --- | --- |
| Data file | `../data/act8_the_night_wrestling.json` |
| SVG assets | `../assets/svg/act_08_the_night_wrestling/` |
| 3D scene | `jacob-the-night-wrestling` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Hold on through the night and receive a new name. — ready-then-act |

> "Hold on through the night and receive a new name."

## Director notes

Jacob wrestles a man by the Jabbok until daybreak, and his hip is touched; he is named Israel, for he strove with God. Stage: a riverbank in the dark before dawn, two figures locked, a hip given way, a name changed at sunrise; the first red light on the water.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_08_the_night_wrestling/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_08_the_night_wrestling/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jacob_act8_a_background.svg`, `jacob_act8_a_middle_ground.svg`, and `jacob_act8_a_foreground.svg`.
- `b_core_action/` contains `jacob_act8_b_background.svg`, `jacob_act8_b_middle_ground.svg`, and `jacob_act8_b_foreground.svg`.
- `c_resolve/` contains `jacob_act8_c_background.svg`, `jacob_act8_c_middle_ground.svg`, and `jacob_act8_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a riverbank in the dark before dawn, two figures locked, a hip given way, a name changed at sunrise |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a0e08` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jacob-the-night-wrestling`

- **File:** `../tools/shot-designer/scenes/jacob-the-night-wrestling.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a riverbank in the dark before dawn, two figures locked, a hip given way, a name changed at sunrise
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `nocturnal` `first-light` `numinous`

