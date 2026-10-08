# Ch.6 · The Flocks

**Mood board 6 of 10** — Jacob (Genesis 25–37)

| | |
| --- | --- |
| Data file | `../data/act6_the_flocks.json` |
| SVG assets | `../assets/svg/act_06_the_flocks/` |
| 3D scene | `jacob-the-flocks` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Sort speckled and spotted animals fairly. — match-it-up |

> "Sort speckled and spotted animals fairly."

## Director notes

Jacob breeds the flocks with peeled branches in the watering troughs, and the speckled and spotted increase. Stage: a river crossing with troughs, striped rods standing in the water, a great flock of goats, some dark, some speckled; morning light on a patient man's wealth.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_the_flocks/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_the_flocks/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jacob_act6_a_background.svg`, `jacob_act6_a_middle_ground.svg`, and `jacob_act6_a_foreground.svg`.
- `b_core_action/` contains `jacob_act6_b_background.svg`, `jacob_act6_b_middle_ground.svg`, and `jacob_act6_b_foreground.svg`.
- `c_resolve/` contains `jacob_act6_c_background.svg`, `jacob_act6_c_middle_ground.svg`, and `jacob_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a river crossing with troughs, striped rods standing in the water, a great flock of goats, some dark, some speckled |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a14` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jacob-the-flocks`

- **File:** `../tools/shot-designer/scenes/jacob-the-flocks.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a river crossing with troughs, striped rods standing in the water, a great flock of goats, some dark, some speckled
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `riverine` `pastoral`

