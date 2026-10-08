# Ch.2 · The Stolen Blessing

**Mood board 2 of 10** — Jacob (Genesis 25–37)

| | |
| --- | --- |
| Data file | `../data/act2_the_stolen_blessing.json` |
| SVG assets | `../assets/svg/act_02_the_stolen_blessing/` |
| 3D scene | `jacob-the-stolen-blessing` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Assemble the disguise, then witness its cost. — assembly |

> "Assemble the disguise, then witness its cost."

## Director notes

Rebekah dresses Jacob in Esau's clothes and goatskins; the blind Isaac feels the hands and blesses the wrong son. Stage: a tent at night, an old blind patriarch reaching out, a trembling younger son, the smell of the field in the garments; a lamp's last light, the blessing spoken.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_the_stolen_blessing/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_the_stolen_blessing/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jacob_act2_a_background.svg`, `jacob_act2_a_middle_ground.svg`, and `jacob_act2_a_foreground.svg`.
- `b_core_action/` contains `jacob_act2_b_background.svg`, `jacob_act2_b_middle_ground.svg`, and `jacob_act2_b_foreground.svg`.
- `c_resolve/` contains `jacob_act2_c_background.svg`, `jacob_act2_c_middle_ground.svg`, and `jacob_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a tent at night, an old blind patriarch reaching out, a trembling younger son, the smell of the field in the garments |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jacob-the-stolen-blessing`

- **File:** `../tools/shot-designer/scenes/jacob-the-stolen-blessing.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a tent at night, an old blind patriarch reaching out, a trembling younger son, the smell of the field in the garments
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `pastoral` `nomadic`

