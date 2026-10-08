# The Furnace

**Mood board 3 of 5** — Daniel (Daniel 1–12)

| | |
| --- | --- |
| Data file | `../data/act3_furnace.json` |
| SVG assets | `../assets/svg/act_03_furnace/` |
| 3D scene | `daniel-furnace` in `../tools/shot-designer/scenes/` |
| Particle mode | fire — fire |
| Game beat | Keep the three friends together through the fire maze. — ordered rhythm |

> "Years later, Nebuchadnezzar built a colossal golden statue on the plain of Dura."

## Director notes

Shadrach, Meshach and Abednego are bound and cast into the blazing furnace, where a fourth figure like a son of the gods walks with them. Stage: a roaring furnace mouth on a Babylonian plain, soldiers flinging bound youths into white heat; inside, four figures unharmed; furnace orange, king and court watching from shaded terraces.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_furnace/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_furnace/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `daniel_act3_a_background.svg`, `daniel_act3_a_middle_ground.svg`, and `daniel_act3_a_foreground.svg`.
- `b_core_action/` contains `daniel_act3_b_background.svg`, `daniel_act3_b_middle_ground.svg`, and `daniel_act3_b_foreground.svg`.
- `c_resolve/` contains `daniel_act3_c_background.svg`, `daniel_act3_c_middle_ground.svg`, and `daniel_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a roaring furnace mouth on a Babylonian plain, soldiers flinging bound youths into white heat |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#8b2500` (deep) → `#3d1200` (dark) → `#1a0700` (dark)
- **Vignette:** radial gradient centred at 50% 80% — the eye lands here first
- **Ambience:** fire particles drift across the panels (fire)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `daniel-furnace`

- **File:** `../tools/shot-designer/scenes/daniel-furnace.js`, registered in `scenes/manifest.json`
- **Lighting:** fire — fire; hemisphere + key light tuned to the 2D palette
- **Set:** a roaring furnace mouth on a Babylonian plain, soldiers flinging bound youths into white heat
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`regal`

