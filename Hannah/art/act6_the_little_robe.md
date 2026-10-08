# Ch.6 · The Little Robe

**Mood board 6 of 8** — Hannah (1 Samuel 1–2)

| | |
| --- | --- |
| Data file | `../data/act6_the_little_robe.json` |
| SVG assets | `../assets/svg/act_06_the_little_robe/` |
| 3D scene | `hannah-the-little-robe` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Weave and size a yearly robe. — ordered rhythm |

> "Weave and size a yearly robe."

## Director notes

Each year Hannah weaves a little robe and brings it to Samuel at Shiloh as he grows in the Lord's presence. Stage: a loom at work, a tiny linen robe, the boy in a linen ephod at the tabernacle door; a mother's hands, a child's growing frame; warm, domestic light.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_the_little_robe/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_the_little_robe/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `hannah_act6_a_background.svg`, `hannah_act6_a_middle_ground.svg`, and `hannah_act6_a_foreground.svg`.
- `b_core_action/` contains `hannah_act6_b_background.svg`, `hannah_act6_b_middle_ground.svg`, and `hannah_act6_b_foreground.svg`.
- `c_resolve/` contains `hannah_act6_c_background.svg`, `hannah_act6_c_middle_ground.svg`, and `hannah_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a loom at work, a tiny linen robe, the boy in a linen ephod at the tabernacle door |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a2a14` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `hannah-the-little-robe`

- **File:** `../tools/shot-designer/scenes/hannah-the-little-robe.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a loom at work, a tiny linen robe, the boy in a linen ephod at the tabernacle door
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`tender` `maternal`

