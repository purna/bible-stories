# Ch.5 · Sisera Flees

**Mood board 5 of 7** — Deborah (Judges 4–5)

| | |
| --- | --- |
| Data file | `../data/act5_sisera_flees.json` |
| SVG assets | `../assets/svg/act_05_sisera_flees/` |
| 3D scene | `deborah-sisera-flees` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Follow the trail — sequence |

> "Sisera left his chariot and fled on foot while Barak pursued the scattered army."

## Director notes

Sisera abandons his chariot and flees on foot toward the tent of Jael, wife of Heber the Kenite. Stage: a lone figure staggering across a sodden field, mud and armour, a tent by the great tree in the distance; fading storm light, a lone tent lamp.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_sisera_flees/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_sisera_flees/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `deborah_act5_a_background.svg`, `deborah_act5_a_middle_ground.svg`, and `deborah_act5_a_foreground.svg`.
- `b_core_action/` contains `deborah_act5_b_background.svg`, `deborah_act5_b_middle_ground.svg`, and `deborah_act5_b_foreground.svg`.
- `c_resolve/` contains `deborah_act5_c_background.svg`, `deborah_act5_c_middle_ground.svg`, and `deborah_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a lone figure staggering across a sodden field, mud and armour, a tent by the great tree in the distance |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#a58d65` (mid) → `#40382f` (deep)
- **Vignette:** radial gradient centred at 48% 24% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `deborah-sisera-flees`

- **File:** `../tools/shot-designer/scenes/deborah-sisera-flees.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a lone figure staggering across a sodden field, mud and armour, a tent by the great tree in the distance
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`tempest` `verdant` `pastoral` `nomadic` `martial`

