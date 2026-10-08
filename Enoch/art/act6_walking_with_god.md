# Ch.6 · Walking with God

**Mood board 6 of 7** — Enoch (Genesis 5:21–24)

| | |
| --- | --- |
| Data file | `../data/act6_walking_with_god.json` |
| SVG assets | `../assets/svg/act_06_walking_with_god/` |
| 3D scene | `enoch-walking-with-god` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Follow a quiet path as the landscape changes. — pathfinding |

> "Follow a quiet path as the landscape changes."

## Director notes

The record repeats: Enoch walked with God — a companionship of daily faithfulness. Stage: a road at dusk, two figures walking side by side, one visible, one as light; the last light of day on a quiet path.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_walking_with_god/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_walking_with_god/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `enoch_act6_a_background.svg`, `enoch_act6_a_middle_ground.svg`, and `enoch_act6_a_foreground.svg`.
- `b_core_action/` contains `enoch_act6_b_background.svg`, `enoch_act6_b_middle_ground.svg`, and `enoch_act6_b_foreground.svg`.
- `c_resolve/` contains `enoch_act6_c_background.svg`, `enoch_act6_c_middle_ground.svg`, and `enoch_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a road at dusk, two figures walking side by side, one visible, one as light |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a14` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `enoch-walking-with-god`

- **File:** `../tools/shot-designer/scenes/enoch-walking-with-god.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a road at dusk, two figures walking side by side, one visible, one as light
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`golden-hour` `numinous` `peripatetic`

