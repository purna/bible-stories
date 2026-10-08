# Ch.4 · The Army Reduced

**Mood board 4 of 7** — Gideon (Judges 6–8)

| | |
| --- | --- |
| Data file | `../data/act4_the_army_reduced.json` |
| SVG assets | `../assets/svg/act_04_the_army_reduced/` |
| 3D scene | `gideon-the-army-reduced` in `../tools/shot-designer/scenes/` |
| Particle mode | water — water |
| Game beat | Watch men drink, identify the 300 who lap. — gather-with-care |

> "The Spirit of the Lord clothes Gideon. He sounds the trumpet. Thirty-two thousand gather at the spring of Harod."

## Director notes

Thirty-two thousand men drink at the spring; those who lap like dogs are three hundred, and God reduces the army to them. Stage: a stream at a desert spring, an army kneeling, the water glinting; three hundred hands cupping the water; morning light on a thinning host.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_the_army_reduced/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_the_army_reduced/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `gideon_act4_a_background.svg`, `gideon_act4_a_middle_ground.svg`, and `gideon_act4_a_foreground.svg`.
- `b_core_action/` contains `gideon_act4_b_background.svg`, `gideon_act4_b_middle_ground.svg`, and `gideon_act4_b_foreground.svg`.
- `c_resolve/` contains `gideon_act4_c_background.svg`, `gideon_act4_c_middle_ground.svg`, and `gideon_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a stream at a desert spring, an army kneeling, the water glinting |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#101820` (dark) → `#0a0502` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** water particles drift across the panels (water)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `gideon-the-army-reduced`

- **File:** `../tools/shot-designer/scenes/gideon-the-army-reduced.js`, registered in `scenes/manifest.json`
- **Lighting:** water — water; hemisphere + key light tuned to the 2D palette
- **Set:** a stream at a desert spring, an army kneeling, the water glinting
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `arid` `military` `numinous`

