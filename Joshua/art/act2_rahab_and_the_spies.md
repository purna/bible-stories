# Ch.2 · Rahab and the Spies

**Mood board 2 of 10** — Joshua (Joshua 1–24)

| | |
| --- | --- |
| Data file | `../data/act2_rahab_and_the_spies.json` |
| SVG assets | `../assets/svg/act_02_rahab_and_the_spies/` |
| 3D scene | `joshua-rahab-and-the-spies` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Hide the scouts and mark the scarlet cord. — watch-and-move |

> "Hide the scouts and mark the scarlet cord."

## Director notes

Two spies are hidden by Rahab the prostitute on the wall of Jericho, and she marks the scarlet cord in the window. Stage: a city wall at night, a rooftop with flax, two men in the dark, a scarlet cord at the window; the sound of a closing gate, a bargain of faith.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_rahab_and_the_spies/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_rahab_and_the_spies/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joshua_act2_a_background.svg`, `joshua_act2_a_middle_ground.svg`, and `joshua_act2_a_foreground.svg`.
- `b_core_action/` contains `joshua_act2_b_background.svg`, `joshua_act2_b_middle_ground.svg`, and `joshua_act2_b_foreground.svg`.
- `c_resolve/` contains `joshua_act2_c_background.svg`, `joshua_act2_c_middle_ground.svg`, and `joshua_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a city wall at night, a rooftop with flax, two men in the dark, a scarlet cord at the window |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joshua-rahab-and-the-spies`

- **File:** `../tools/shot-designer/scenes/joshua-rahab-and-the-spies.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a city wall at night, a rooftop with flax, two men in the dark, a scarlet cord at the window
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `fortified` `threshold` `urban` `tense` `blood-red`

