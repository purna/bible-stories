# Ch.2 · The Tower

**Mood board 2 of 5** — Babel (Genesis 11:1–9)

| | |
| --- | --- |
| Data file | `../data/act2_the_tower.json` |
| SVG assets | `../assets/svg/act_02_the_tower/` |
| 3D scene | `babel-the-tower` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Stack bricks toward the sky without a plan. — interactive beat |

> "Stack bricks toward the sky without a plan."

## Director notes

They say: come, let us build a tower with its top in the heavens. Stage: a great ziggurat rising from the plain, scaffolding and ramps, workers hauling brick; the tower catching the evening sun; ambition in mortar and clay.

## 2D SVG composition

The scene renders as three stacked SVG panels, one per beat of the
act, in `../assets/svg/act_02_the_tower/`:

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a great ziggurat rising from the plain, scaffolding and ramps, workers hauling brick |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `babel-the-tower`

- **File:** `../tools/shot-designer/scenes/babel-the-tower.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a great ziggurat rising from the plain, scaffolding and ramps, workers hauling brick
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`lamplight`

