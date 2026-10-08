# Ch.6 · Naaman

**Mood board 6 of 9** — Elisha (1 Kings 19; 2 Kings 2–7)

| | |
| --- | --- |
| Data file | `../data/act6_naaman.json` |
| SVG assets | `../assets/svg/act_06_naaman/` |
| 3D scene | `elisha-naaman` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Guide the commander through seven Jordan immersions. — pathfinding |

> "Guide the commander through seven Jordan immersions."

## Director notes

Naaman, commander of Aram, comes with horses and chariots to be healed of leprosy; Elisha sends him to wash seven times in the Jordan. Stage: a riverbank with a retinue of chariots and horsemen, the proud commander wading to his waist, seven immersions; water gleaming, pride yielding.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_naaman/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_naaman/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `elisha_act6_a_background.svg`, `elisha_act6_a_middle_ground.svg`, and `elisha_act6_a_foreground.svg`.
- `b_core_action/` contains `elisha_act6_b_background.svg`, `elisha_act6_b_middle_ground.svg`, and `elisha_act6_b_foreground.svg`.
- `c_resolve/` contains `elisha_act6_c_background.svg`, `elisha_act6_c_middle_ground.svg`, and `elisha_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a riverbank with a retinue of chariots and horsemen, the proud commander wading to his waist, seven immersions |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a14` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `elisha-naaman`

- **File:** `../tools/shot-designer/scenes/elisha-naaman.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a riverbank with a retinue of chariots and horsemen, the proud commander wading to his waist, seven immersions
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`aquatic` `riverine`

