# Ch.8 · Saul’s First Victory

**Mood board 8 of 10** — Samuel (1 Samuel 1–16)

| | |
| --- | --- |
| Data file | `../data/act8_saul_s_first_victory.json` |
| SVG assets | `../assets/svg/act_08_saul_s_first_victory/` |
| 3D scene | `samuel-saul-s-first-victory` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Rally the people and refuse revenge. — ordered rhythm |

> "Rally the people and refuse revenge."

## Director notes

Nahash the Ammonite threatens Jabesh-gilead, and Saul cuts his oxen and sends the pieces through Israel; the people rally and win. Stage: a field of oxen at noon, a yoke of oxen cut in pieces, a trumpet being blown, the people coming up from the fields; a first victory.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_08_saul_s_first_victory/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_08_saul_s_first_victory/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `samuel_act8_a_background.svg`, `samuel_act8_a_middle_ground.svg`, and `samuel_act8_a_foreground.svg`.
- `b_core_action/` contains `samuel_act8_b_background.svg`, `samuel_act8_b_middle_ground.svg`, and `samuel_act8_b_foreground.svg`.
- `c_resolve/` contains `samuel_act8_c_background.svg`, `samuel_act8_c_middle_ground.svg`, and `samuel_act8_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a field of oxen at noon, a yoke of oxen cut in pieces, a trumpet being blown, the people coming up from the fields |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a1a` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `samuel-saul-s-first-victory`

- **File:** `../tools/shot-designer/scenes/samuel-saul-s-first-victory.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a field of oxen at noon, a yoke of oxen cut in pieces, a trumpet being blown, the people coming up from the fields
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`pastoral`

