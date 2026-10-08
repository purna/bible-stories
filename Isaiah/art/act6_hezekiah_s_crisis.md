# Ch.6 · Hezekiah’s Crisis

**Mood board 6 of 9** — Isaiah (Isaiah 1–12, 36–40, 53, 65–66)

| | |
| --- | --- |
| Data file | `../data/act6_hezekiah_s_crisis.json` |
| SVG assets | `../assets/svg/act_06_hezekiah_s_crisis/` |
| 3D scene | `isaiah-hezekiah-s-crisis` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Bring the threatening letter into prayer. — call-and-response |

> "Bring the threatening letter into prayer."

## Director notes

Sennacherib's letters threaten Jerusalem; Hezekiah spreads the letter before the Lord, and the angel strikes the camp. Stage: a royal chamber at night, a letter on a table, the king in prayer; dawn light through the windows, a camp of silent tents beyond the walls.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_hezekiah_s_crisis/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_hezekiah_s_crisis/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `isaiah_act6_a_background.svg`, `isaiah_act6_a_middle_ground.svg`, and `isaiah_act6_a_foreground.svg`.
- `b_core_action/` contains `isaiah_act6_b_background.svg`, `isaiah_act6_b_middle_ground.svg`, and `isaiah_act6_b_foreground.svg`.
- `c_resolve/` contains `isaiah_act6_c_background.svg`, `isaiah_act6_c_middle_ground.svg`, and `isaiah_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a royal chamber at night, a letter on a table, the king in prayer |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a14` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `isaiah-hezekiah-s-crisis`

- **File:** `../tools/shot-designer/scenes/isaiah-hezekiah-s-crisis.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a royal chamber at night, a letter on a table, the king in prayer
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `first-light` `military-camp` `regal` `devotional` `numinous`

