# Ch.3 · The Summit

**Mood board 3 of 5** — Babel (Genesis 11:1–9)

| | |
| --- | --- |
| Data file | `../data/act3_the_summit.json` |
| SVG assets | `../assets/svg/act_03_the_summit/` |
| 3D scene | `babel-the-summit` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Reach the top and name the project after yourself. — interactive beat |

> "Reach the top and name the project after yourself."

## Director notes

The tower climbs toward the heavens, and the city spreads around its base. Stage: the summit scaffolding at dusk, the city below in lamps, the sky darkening overhead; a silhouette of the tower against the last light.

## 2D SVG composition

The scene renders as three stacked SVG panels, one per beat of the
act, in `../assets/svg/act_03_the_summit/`:

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the summit scaffolding at dusk, the city below in lamps, the sky darkening overhead |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `babel-the-summit`

- **File:** `../tools/shot-designer/scenes/babel-the-summit.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** the summit scaffolding at dusk, the city below in lamps, the sky darkening overhead
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`golden-hour` `urban`

