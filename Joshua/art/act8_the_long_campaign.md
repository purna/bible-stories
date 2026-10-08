# Ch.8 · The Long Campaign

**Mood board 8 of 10** — Joshua (Joshua 1–24)

| | |
| --- | --- |
| Data file | `../data/act8_the_long_campaign.json` |
| SVG assets | `../assets/svg/act_08_the_long_campaign/` |
| 3D scene | `joshua-the-long-campaign` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Resolve territory challenges without spectacle. — ordered rhythm |

> "Resolve territory challenges without spectacle."

## Director notes

Five kings of the Amorites are defeated at Gibeon, and Joshua asks the sun to stand still over Gibeon. Stage: a plain at high noon, a battle in the open, the sun hanging in the sky, a hailstorm on the fleeing kings; the longest day of the year.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_08_the_long_campaign/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_08_the_long_campaign/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joshua_act8_a_background.svg`, `joshua_act8_a_middle_ground.svg`, and `joshua_act8_a_foreground.svg`.
- `b_core_action/` contains `joshua_act8_b_background.svg`, `joshua_act8_b_middle_ground.svg`, and `joshua_act8_b_foreground.svg`.
- `c_resolve/` contains `joshua_act8_c_background.svg`, `joshua_act8_c_middle_ground.svg`, and `joshua_act8_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a plain at high noon, a battle in the open, the sun hanging in the sky, a hailstorm on the fleeing kings |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a0e08` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joshua-the-long-campaign`

- **File:** `../tools/shot-designer/scenes/joshua-the-long-campaign.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a plain at high noon, a battle in the open, the sun hanging in the sky, a hailstorm on the fleeing kings
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`battlefield`

