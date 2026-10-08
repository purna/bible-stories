# Ch.5 · Laban’s Bargain

**Mood board 5 of 10** — Jacob (Genesis 25–37)

| | |
| --- | --- |
| Data file | `../data/act5_laban_s_bargain.json` |
| SVG assets | `../assets/svg/act_05_laban_s_bargain/` |
| 3D scene | `jacob-laban-s-bargain` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Track changing wages and wedding promises. — watch-and-move |

> "Track changing wages and wedding promises."

## Director notes

Laban deceives Jacob with Leah's veiled marriage, and Jacob serves seven more years for Rachel; the wages change like the weather. Stage: a wedding tent at night with a veil and a sister's face, a contract of years, a flock passing between the brothers-in-law; a lamp, a bargain, a long game.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_laban_s_bargain/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_laban_s_bargain/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jacob_act5_a_background.svg`, `jacob_act5_a_middle_ground.svg`, and `jacob_act5_a_foreground.svg`.
- `b_core_action/` contains `jacob_act5_b_background.svg`, `jacob_act5_b_middle_ground.svg`, and `jacob_act5_b_foreground.svg`.
- `c_resolve/` contains `jacob_act5_c_background.svg`, `jacob_act5_c_middle_ground.svg`, and `jacob_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a wedding tent at night with a veil and a sister's face, a contract of years, a flock passing between the brothers-in-law |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241810` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jacob-laban-s-bargain`

- **File:** `../tools/shot-designer/scenes/jacob-laban-s-bargain.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a wedding tent at night with a veil and a sister's face, a contract of years, a flock passing between the brothers-in-law
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `nomadic` `pastoral`

