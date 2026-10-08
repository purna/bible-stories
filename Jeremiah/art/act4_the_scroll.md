# Ch.4 · The Scroll

**Mood board 4 of 10** — Jeremiah (Jeremiah 1–39, 31–32)

| | |
| --- | --- |
| Data file | `../data/act4_the_scroll.json` |
| SVG assets | `../assets/svg/act_04_the_scroll/` |
| 3D scene | `jeremiah-the-scroll` in `../tools/shot-designer/scenes/` |
| Particle mode | dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon |
| Game beat | Dictate to Baruch and rebuild the burned scroll. — assembly |

> "Dictate to Baruch and rebuild the burned scroll."

## Director notes

Baruch writes Jeremiah's words on a scroll; the king cuts it with a knife and burns it, column by column, and it is written again. Stage: a chamber by the fire, a scribe's reed and ink, a scroll being read aloud, a king's knife shearing it, the fire rising; the book being born again.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_04_the_scroll/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_04_the_scroll/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jeremiah_act4_a_background.svg`, `jeremiah_act4_a_middle_ground.svg`, and `jeremiah_act4_a_foreground.svg`.
- `b_core_action/` contains `jeremiah_act4_b_background.svg`, `jeremiah_act4_b_middle_ground.svg`, and `jeremiah_act4_b_foreground.svg`.
- `c_resolve/` contains `jeremiah_act4_c_background.svg`, `jeremiah_act4_c_middle_ground.svg`, and `jeremiah_act4_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a chamber by the fire, a scribe's reed and ink, a scroll being read aloud, a king's knife shearing it, the fire rising |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a1024` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dawn particles drift across the panels (cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jeremiah-the-scroll`

- **File:** `../tools/shot-designer/scenes/jeremiah-the-scroll.js`, registered in `scenes/manifest.json`
- **Lighting:** dawn — cool pre-sunrise light, soft blue-grey shadow, first gold on the horizon; hemisphere + key light tuned to the 2D palette
- **Set:** a chamber by the fire, a scribe's reed and ink, a scroll being read aloud, a king's knife shearing it, the fire rising
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`firelight` `regal`

