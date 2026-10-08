# Ch.6 · Ai

**Mood board 6 of 10** — Joshua (Joshua 1–24)

| | |
| --- | --- |
| Data file | `../data/act6_ai.json` |
| SVG assets | `../assets/svg/act_06_ai/` |
| 3D scene | `joshua-ai` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Set the ambush without repeating earlier presumption. — watch-and-move |

> "Set the ambush without repeating earlier presumption."

## Director notes

Joshua sets an ambush and takes Ai, and the people of Ai are taken captive. Stage: a ruined hill at dawn, a retreating force, an ambush in the fields, the city burning; smoke over a valley, a battle learned the hard way.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_ai/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_ai/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joshua_act6_a_background.svg`, `joshua_act6_a_middle_ground.svg`, and `joshua_act6_a_foreground.svg`.
- `b_core_action/` contains `joshua_act6_b_background.svg`, `joshua_act6_b_middle_ground.svg`, and `joshua_act6_b_foreground.svg`.
- `c_resolve/` contains `joshua_act6_c_background.svg`, `joshua_act6_c_middle_ground.svg`, and `joshua_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a ruined hill at dawn, a retreating force, an ambush in the fields, the city burning |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a14` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joshua-ai`

- **File:** `../tools/shot-designer/scenes/joshua-ai.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a ruined hill at dawn, a retreating force, an ambush in the fields, the city burning
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`incandescent` `first-light` `battlefield` `rolling` `urban`

