# Ch.2 · Dreams and the Pit

**Mood board 2 of 10** — Joseph (Genesis 37–47)

| | |
| --- | --- |
| Data file | `../data/act2_dreams_and_the_pit.json` |
| SVG assets | `../assets/svg/act_02_dreams_and_the_pit/` |
| 3D scene | `joseph-dreams-and-the-pit` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Order the dreams, then find a path through betrayal. — match-it-up |

> "Order the dreams, then find a path through betrayal."

## Director notes

The brothers throw Joseph into an empty pit, then sell him to Ishmaelites for twenty shekels of silver. Stage: a dry pit in the wilderness at dusk, a boy at the bottom looking up, the brothers eating bread at the top; a caravan arriving, the sun going down like a wound.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_dreams_and_the_pit/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_dreams_and_the_pit/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `joseph_act2_a_background.svg`, `joseph_act2_a_middle_ground.svg`, and `joseph_act2_a_foreground.svg`.
- `b_core_action/` contains `joseph_act2_b_background.svg`, `joseph_act2_b_middle_ground.svg`, and `joseph_act2_b_foreground.svg`.
- `c_resolve/` contains `joseph_act2_c_background.svg`, `joseph_act2_c_middle_ground.svg`, and `joseph_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a dry pit in the wilderness at dusk, a boy at the bottom looking up, the brothers eating bread at the top |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `joseph-dreams-and-the-pit`

- **File:** `../tools/shot-designer/scenes/joseph-dreams-and-the-pit.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a dry pit in the wilderness at dusk, a boy at the bottom looking up, the brothers eating bread at the top
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`golden-hour` `humble` `barren`

