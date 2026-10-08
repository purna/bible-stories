# Ch.5 · The Assyrian Shadow

**Mood board 5 of 9** — Isaiah (Isaiah 1–12, 36–40, 53, 65–66)

| | |
| --- | --- |
| Data file | `../data/act5_the_assyrian_shadow.json` |
| SVG assets | `../assets/svg/act_05_the_assyrian_shadow/` |
| 3D scene | `isaiah-the-assyrian-shadow` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Map the advancing empire and the surviving stump. — ordered rhythm |

> "Map the advancing empire and the surviving stump."

## Director notes

The Assyrian advances like a river, and the surviving stump of Jesse stands as a banner for the peoples. Stage: a great army crossing a plain, a felled tree with a living shoot, a banner raised on a hill; a dark flood of bronze and a single green branch.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_the_assyrian_shadow/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_the_assyrian_shadow/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `isaiah_act5_a_background.svg`, `isaiah_act5_a_middle_ground.svg`, and `isaiah_act5_a_foreground.svg`.
- `b_core_action/` contains `isaiah_act5_b_background.svg`, `isaiah_act5_b_middle_ground.svg`, and `isaiah_act5_b_foreground.svg`.
- `c_resolve/` contains `isaiah_act5_c_background.svg`, `isaiah_act5_c_middle_ground.svg`, and `isaiah_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a great army crossing a plain, a felled tree with a living shoot, a banner raised on a hill |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241810` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `isaiah-the-assyrian-shadow`

- **File:** `../tools/shot-designer/scenes/isaiah-the-assyrian-shadow.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a great army crossing a plain, a felled tree with a living shoot, a banner raised on a hill
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`deluge` `riverine` `verdant` `military` `rolling`

