# Ch.9 · Meeting Esau

**Mood board 9 of 10** — Jacob (Genesis 25–37)

| | |
| --- | --- |
| Data file | `../data/act9_meeting_esau.json` |
| SVG assets | `../assets/svg/act_09_meeting_esau/` |
| 3D scene | `jacob-meeting-esau` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Arrange gifts, then step forward unarmed. — ordered rhythm |

> "Arrange gifts, then step forward unarmed."

## Director notes

Jacob sends gifts ahead and bows seven times; Esau runs to meet him, and they weep. Stage: a plain at dawn, a long line of gifts, a brother running with four hundred men; fear turning to a kiss; the sun climbing over a tent camp.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_09_meeting_esau/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_09_meeting_esau/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jacob_act9_a_background.svg`, `jacob_act9_a_middle_ground.svg`, and `jacob_act9_a_foreground.svg`.
- `b_core_action/` contains `jacob_act9_b_background.svg`, `jacob_act9_b_middle_ground.svg`, and `jacob_act9_b_foreground.svg`.
- `c_resolve/` contains `jacob_act9_c_background.svg`, `jacob_act9_c_middle_ground.svg`, and `jacob_act9_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a plain at dawn, a long line of gifts, a brother running with four hundred men |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jacob-meeting-esau`

- **File:** `../tools/shot-designer/scenes/jacob-meeting-esau.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a plain at dawn, a long line of gifts, a brother running with four hundred men
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `nomadic` `military-camp`

