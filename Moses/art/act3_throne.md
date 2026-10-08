# Act 3 · Let My People Go

**Mood board 3 of 15** — Moses (Exodus 1–40; Numbers; Deuteronomy 34)

| | |
| --- | --- |
| Data file | `../data/act3_throne.json` |
| SVG assets | `../assets/svg/act_03_throne/` |
| 3D scene | `moses-throne` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Match signs and warnings to each audience. — match-it-up |

> "God gave Moses three signs. A staff that became a serpent. A hand turned leprous and whole again. Water from the Nile turned to blood."

## Director notes

Moses stands before Pharaoh, and the plagues come: water to blood, frogs, gnats, flies, and the rest, until the firstborn cry out. Stage: a throne room with gold and lapis, a staff on the floor, a river turning red, the city in darkness; the court hardening, scene by scene.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_throne/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_throne/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `moses_act3_a_background.svg`, `moses_act3_a_middle_ground.svg`, and `moses_act3_a_foreground.svg`.
- `b_core_action/` contains `moses_act3_b_background.svg`, `moses_act3_b_middle_ground.svg`, and `moses_act3_b_foreground.svg`.
- `c_resolve/` contains `moses_act3_c_background.svg`, `moses_act3_c_middle_ground.svg`, and `moses_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a throne room with gold and lapis, a staff on the floor, a river turning red, the city in darkness |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#180c14` (dark) → `#2e1830` (dark) → `#0a0408` (dark)
- **Vignette:** radial gradient centred at 50% 40% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `moses-throne`

- **File:** `../tools/shot-designer/scenes/moses-throne.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a throne room with gold and lapis, a staff on the floor, a river turning red, the city in darkness
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `riverine` `regal` `urban` `gory`

