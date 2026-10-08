# Ch.8 · Buy the Field

**Mood board 8 of 10** — Jeremiah (Jeremiah 1–39, 31–32)

| | |
| --- | --- |
| Data file | `../data/act8_buy_the_field.json` |
| SVG assets | `../assets/svg/act_08_buy_the_field/` |
| 3D scene | `jeremiah-buy-the-field` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Complete a land purchase while siege closes in. — ordered rhythm |

> "Complete a land purchase while siege closes in."

## Director notes

In the besieged city Jeremiah buys a field at Anathoth and seals the deed, for the Lord promises houses and fields will again be bought. Stage: a walled city under siege at dusk, a deed being sealed and buried in an earthen jar, a field beyond the walls; a candle in a siege lamp.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_08_buy_the_field/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_08_buy_the_field/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jeremiah_act8_a_background.svg`, `jeremiah_act8_a_middle_ground.svg`, and `jeremiah_act8_a_foreground.svg`.
- `b_core_action/` contains `jeremiah_act8_b_background.svg`, `jeremiah_act8_b_middle_ground.svg`, and `jeremiah_act8_b_foreground.svg`.
- `c_resolve/` contains `jeremiah_act8_c_background.svg`, `jeremiah_act8_c_middle_ground.svg`, and `jeremiah_act8_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a walled city under siege at dusk, a deed being sealed and buried in an earthen jar, a field beyond the walls |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a0e08` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jeremiah-buy-the-field`

- **File:** `../tools/shot-designer/scenes/jeremiah-buy-the-field.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a walled city under siege at dusk, a deed being sealed and buried in an earthen jar, a field beyond the walls
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`golden-hour` `pastoral` `urban`

