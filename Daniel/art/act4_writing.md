# The Writing on the Wall

**Mood board 4 of 5** — Daniel (Daniel 1–12)

| | |
| --- | --- |
| Data file | `../data/act4_writing.json` |
| SVG assets | `../assets/svg/act_04_writing/` |
| 3D scene | `daniel-writing` in `../tools/shot-designer/scenes/` |
| Particle mode | constellation — constellation |
| Game beat | Tend the humbled king until his reason returns. — balance |

> "Decades later. Babylon was falling. And Belshazzar, its last king, held a feast — using the sacred cups stolen from Jerusalem's temple."

## Director notes

Nebuchadnezzar is driven from human society, eating grass like an ox until his reason returns. Stage: a royal garden gone wild, the king grown long-haired and wild-eyed among stalks and dew; gold and madness fading to humble green; a shaft of light as his sanity is restored.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_writing/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_writing/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `daniel_act4_a_background.svg`, `daniel_act4_a_middle_ground.svg`, and `daniel_act4_a_foreground.svg`.
- `b_core_action/` contains `daniel_act4_b_background.svg`, `daniel_act4_b_middle_ground.svg`, and `daniel_act4_b_foreground.svg`.
- `c_resolve/` contains `daniel_act4_c_background.svg`, `daniel_act4_c_middle_ground.svg`, and `daniel_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a royal garden gone wild, the king grown long-haired and wild-eyed among stalks and dew |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2b1220` (dark) → `#160a14` (dark) → `#090510` (dark)
- **Vignette:** radial gradient centred at 30% 30% — the eye lands here first
- **Ambience:** constellation particles drift across the panels (constellation)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `daniel-writing`

- **File:** `../tools/shot-designer/scenes/daniel-writing.js`, registered in `scenes/manifest.json`
- **Lighting:** constellation — constellation; hemisphere + key light tuned to the 2D palette
- **Set:** a royal garden gone wild, the king grown long-haired and wild-eyed among stalks and dew
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`verdant` `regal`

