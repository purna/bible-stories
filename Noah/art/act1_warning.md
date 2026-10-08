# Ch.1 · The Warning

**Mood board 1 of 10** — Noah (Genesis 6–9)

| | |
| --- | --- |
| Data file | `../data/act1_warning.json` |
| SVG assets | `../assets/svg/act_01_warning/` |
| 3D scene | `noah-warning` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Accept the Ark blueprint. — call-and-response |

> "Long ago, the earth was full of people — but their hearts had gone wrong."

## Director notes

The Lord warns Noah of the coming flood, and he is told to make an ark of gopher wood, for the earth is filled with violence. Stage: a plain at dusk, a man listening to a voice, the world behind him darkening, the first rain cloud on the horizon; a lone figure in a field.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_warning/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_warning/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `noah_act1_a_background.svg`, `noah_act1_a_middle_ground.svg`, and `noah_act1_a_foreground.svg`.
- `b_core_action/` contains `noah_act1_b_background.svg`, `noah_act1_b_middle_ground.svg`, and `noah_act1_b_foreground.svg`.
- `c_resolve/` contains `noah_act1_c_background.svg`, `noah_act1_c_middle_ground.svg`, and `noah_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a plain at dusk, a man listening to a voice, the world behind him darkening, the first rain cloud on the horizon |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2e2010` (dark) → `#14100a` (dark) → `#080604` (dark)
- **Vignette:** radial gradient centred at 40% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `noah-warning`

- **File:** `../tools/shot-designer/scenes/noah-warning.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a plain at dusk, a man listening to a voice, the world behind him darkening, the first rain cloud on the horizon
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`soaked` `deluge` `golden-hour` `pastoral`

