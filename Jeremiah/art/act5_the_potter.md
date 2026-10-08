# Ch.5 · The Potter

**Mood board 5 of 10** — Jeremiah (Jeremiah 1–39, 31–32)

| | |
| --- | --- |
| Data file | `../data/act5_the_potter.json` |
| SVG assets | `../assets/svg/act_05_the_potter/` |
| 3D scene | `jeremiah-the-potter` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Reshape the clay while it remains workable. — ordered rhythm |

> "Reshape the clay while it remains workable."

## Director notes

The Lord sets the prophet by the potter's house: as clay in the potter's hand, so are you; the vessel is marred and remade. Stage: a potter's wheel turning in a courtyard, wet clay on the wheel, a vessel failing and returning to a lump; earthy colours, patient hands.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_the_potter/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_the_potter/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jeremiah_act5_a_background.svg`, `jeremiah_act5_a_middle_ground.svg`, and `jeremiah_act5_a_foreground.svg`.
- `b_core_action/` contains `jeremiah_act5_b_background.svg`, `jeremiah_act5_b_middle_ground.svg`, and `jeremiah_act5_b_foreground.svg`.
- `c_resolve/` contains `jeremiah_act5_c_background.svg`, `jeremiah_act5_c_middle_ground.svg`, and `jeremiah_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a potter's wheel turning in a courtyard, wet clay on the wheel, a vessel failing and returning to a lump |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241810` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jeremiah-the-potter`

- **File:** `../tools/shot-designer/scenes/jeremiah-the-potter.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a potter's wheel turning in a courtyard, wet clay on the wheel, a vessel failing and returning to a lump
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`prophetic`

