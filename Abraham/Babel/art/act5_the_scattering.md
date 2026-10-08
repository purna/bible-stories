# Ch.5 · The Scattering

**Mood board 5 of 5** — Babel (Genesis 11:1–9)

| | |
| --- | --- |
| Data file | `../data/act5_the_scattering.json` |
| SVG assets | `../assets/svg/act_05_the_scattering/` |
| 3D scene | `babel-the-scattering` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Walk away from the half-built city. — interactive beat |

> "Walk away from the half-built city."

## Director notes

The Lord scatters them over the face of all the earth, and the city is abandoned. Stage: the plain at dawn, families packing and parting every way, the tower silent behind them; dust rising on empty roads; the city left unfinished.

## 2D SVG composition

The scene renders as three stacked SVG panels, one per beat of the
act, in `../assets/svg/act_05_the_scattering/`:

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the plain at dawn, families packing and parting every way, the tower silent behind them |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241810` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `babel-the-scattering`

- **File:** `../tools/shot-designer/scenes/babel-the-scattering.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** the plain at dawn, families packing and parting every way, the tower silent behind them
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `dusty` `urban`

