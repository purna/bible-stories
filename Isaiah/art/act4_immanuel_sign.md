# Ch.4 · Immanuel Sign

**Mood board 4 of 9** — Isaiah (Isaiah 1–12, 36–40, 53, 65–66)

| | |
| --- | --- |
| Data file | `../data/act4_immanuel_sign.json` |
| SVG assets | `../assets/svg/act_04_immanuel_sign/` |
| 3D scene | `isaiah-immanuel-sign` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Carry hope to fearful King Ahaz. — pathfinding |

> "Carry hope to fearful King Ahaz."

## Director notes

To faithless Ahaz the prophet gives a sign: the young woman is with child and shall call his name Immanuel — God with us. Stage: a king on a throne at the end of a conduit, a prophet refusing a sign, a child on the road beyond; winter light, the first promise of a birth.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_immanuel_sign/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_immanuel_sign/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `isaiah_act4_a_background.svg`, `isaiah_act4_a_middle_ground.svg`, and `isaiah_act4_a_foreground.svg`.
- `b_core_action/` contains `isaiah_act4_b_background.svg`, `isaiah_act4_b_middle_ground.svg`, and `isaiah_act4_b_foreground.svg`.
- `c_resolve/` contains `isaiah_act4_c_background.svg`, `isaiah_act4_c_middle_ground.svg`, and `isaiah_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a king on a throne at the end of a conduit, a prophet refusing a sign, a child on the road beyond |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1024` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `isaiah-immanuel-sign`

- **File:** `../tools/shot-designer/scenes/isaiah-immanuel-sign.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a king on a throne at the end of a conduit, a prophet refusing a sign, a child on the road beyond
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`regal` `numinous` `prophetic` `tender` `aspirational` `peripatetic`

