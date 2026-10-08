# Act 11 · Second Tablets and Tabernacle

**Mood board 11 of 15** — Moses (Exodus 1–40; Numbers; Deuteronomy 34)

| | |
| --- | --- |
| Data file | `../data/manifest.json` |
| SVG assets | `../assets/svg/act11_the_second_tablets/` |
| 3D scene | `moses-tablets` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Renew the covenant and begin building God's dwelling. — gather-with-care |

> "The calf was ground to powder and scattered on the water. Moses climbed the mountain again to plead for the people."

## Director notes

Moses cuts two new tablets and climbs Sinai at dawn; the Lord passes before him proclaiming mercy, and Moses descends with a shining face. The people then give freely, and craftsmen raise the tabernacle until the cloud fills it. Stage: a mountain summit at first light, two blank stone tablets and a chisel, a descending figure with a radiant face, a camp of gold, blue and scarlet cloth being worked into a tent frame; a cloud settling over the dwelling.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act11_the_second_tablets/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act11_the_second_tablets/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `moses_act11_a_background.svg`, `moses_act11_a_middle_ground.svg`, and `moses_act11_a_foreground.svg`.
- `b_core_action/` contains `moses_act11_b_background.svg`, `moses_act11_b_middle_ground.svg`, and `moses_act11_b_foreground.svg`.
- `c_resolve/` contains `moses_act11_c_background.svg`, `moses_act11_c_middle_ground.svg`, and `moses_act11_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json`.

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a mountain summit at first light, two blank stone tablets and a chisel, a descending figure with a radiant face, a camp of gold, blue and scarlet cloth being worked into a tent frame |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#10141c` (dark) → `#1e1c18` (dark) → `#060608` (dark)
- **Vignette:** radial gradient centred at 50% 35% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `moses-tablets`

- **File:** `../tools/shot-designer/scenes/moses-tablets.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a mountain summit at first light, two blank stone tablets and a chisel, a descending figure with a radiant face, a camp of gold, blue and scarlet cloth being worked into a tent frame
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`first-light` `numinous` `solemn` `megalithic` `lamplight`
