# Ch.6 · The Yoke

**Mood board 6 of 10** — Jeremiah (Jeremiah 1–39, 31–32)

| | |
| --- | --- |
| Data file | `../data/act6_the_yoke.json` |
| SVG assets | `../assets/svg/act_06_the_yoke/` |
| 3D scene | `jeremiah-the-yoke` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Carry the warning despite Hananiah’s easy promise. — call-and-response |

> "Carry the warning despite Hananiah’s easy promise."

## Director notes

The Lord tells Jeremiah to make a yoke of leather and wood and wear it; Hananiah breaks the yoke and the prophet says the Lord will make yokes of iron. Stage: a market square at noon, a wooden yoke on a prophet's shoulders, a false prophet snapping it, an iron yoke in the shadow; a hot day, a cold word.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_the_yoke/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_the_yoke/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jeremiah_act6_a_background.svg`, `jeremiah_act6_a_middle_ground.svg`, and `jeremiah_act6_a_foreground.svg`.
- `b_core_action/` contains `jeremiah_act6_b_background.svg`, `jeremiah_act6_b_middle_ground.svg`, and `jeremiah_act6_b_foreground.svg`.
- `c_resolve/` contains `jeremiah_act6_c_background.svg`, `jeremiah_act6_c_middle_ground.svg`, and `jeremiah_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a market square at noon, a wooden yoke on a prophet's shoulders, a false prophet snapping it, an iron yoke in the shadow |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a14` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jeremiah-the-yoke`

- **File:** `../tools/shot-designer/scenes/jeremiah-the-yoke.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a market square at noon, a wooden yoke on a prophet's shoulders, a false prophet snapping it, an iron yoke in the shadow
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`prophetic`

