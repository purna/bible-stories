# Ch.4 · The Ark Captured

**Mood board 4 of 10** — Samuel (1 Samuel 1–16)

| | |
| --- | --- |
| Data file | `../data/act4_the_ark_captured.json` |
| SVG assets | `../assets/svg/act_04_the_ark_captured/` |
| 3D scene | `samuel-the-ark-captured` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Track the cost of treating the Ark like a charm. — watch-and-move |

> "Track the cost of treating the Ark like a charm."

## Director notes

The Philistines defeat Israel, the ark is taken, and Eli falls from his seat and breaks his neck at the gate. Stage: a battlefield at dusk, a camp in smoke, the ark in enemy hands, an old man falling at the gate; a town wailing, a line of captives.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_the_ark_captured/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_the_ark_captured/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `samuel_act4_a_background.svg`, `samuel_act4_a_middle_ground.svg`, and `samuel_act4_a_foreground.svg`.
- `b_core_action/` contains `samuel_act4_b_background.svg`, `samuel_act4_b_middle_ground.svg`, and `samuel_act4_b_foreground.svg`.
- `c_resolve/` contains `samuel_act4_c_background.svg`, `samuel_act4_c_middle_ground.svg`, and `samuel_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a battlefield at dusk, a camp in smoke, the ark in enemy hands, an old man falling at the gate |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `samuel-the-ark-captured`

- **File:** `../tools/shot-designer/scenes/samuel-the-ark-captured.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a battlefield at dusk, a camp in smoke, the ark in enemy hands, an old man falling at the gate
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`golden-hour` `military-camp` `threshold`

