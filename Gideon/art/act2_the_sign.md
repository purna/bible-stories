# Ch.2 · The Sign

**Mood board 2 of 7** — Gideon (Judges 6–8)

| | |
| --- | --- |
| Data file | `../data/act2_the_sign.json` |
| SVG assets | `../assets/svg/act_02_the_sign/` |
| 3D scene | `gideon-the-sign` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Prepare the offering, witness fire from the rock. — ordered rhythm |

> "Gideon asks for a sign: let me know that You will save Israel by my hand."

## Director notes

Gideon prepares a young goat and unleavened cakes; fire consumes the offering on the rock and the angel vanishes. Stage: a rock at the oak's shade, a meat offering on a stone, a flame rising from it; the terrified Gideon; the morning lit by one sudden fire.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_the_sign/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_the_sign/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `gideon_act2_a_background.svg`, `gideon_act2_a_middle_ground.svg`, and `gideon_act2_a_foreground.svg`.
- `b_core_action/` contains `gideon_act2_b_background.svg`, `gideon_act2_b_middle_ground.svg`, and `gideon_act2_b_foreground.svg`.
- `c_resolve/` contains `gideon_act2_c_background.svg`, `gideon_act2_c_middle_ground.svg`, and `gideon_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a rock at the oak's shade, a meat offering on a stone, a flame rising from it |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a0e08` (dark) → `#0a0502` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `gideon-the-sign`

- **File:** `../tools/shot-designer/scenes/gideon-the-sign.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a rock at the oak's shade, a meat offering on a stone, a flame rising from it
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`firelight` `numinous` `craggy` `megalithic`

