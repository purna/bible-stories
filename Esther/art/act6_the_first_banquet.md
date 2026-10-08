# Ch.6 · The First Banquet

**Mood board 6 of 10** — Esther (Esther 1–9)

| | |
| --- | --- |
| Data file | `../data/act6_the_first_banquet.json` |
| SVG assets | `../assets/svg/act_06_the_first_banquet/` |
| 3D scene | `esther-the-first-banquet` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Invite the king and Haman without revealing too soon. — ordered rhythm |

> "Invite the king and Haman without revealing too soon."

## Director notes

Esther invites the king and Haman to a banquet and asks them to return the next night — her request still unspoken. Stage: a banquet table in a shaded colonnade, the king with his ring, Haman swollen with pride, the queen veiled and composed; evening lamplight.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_the_first_banquet/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_the_first_banquet/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `esther_act6_a_background.svg`, `esther_act6_a_middle_ground.svg`, and `esther_act6_a_foreground.svg`.
- `b_core_action/` contains `esther_act6_b_background.svg`, `esther_act6_b_middle_ground.svg`, and `esther_act6_b_foreground.svg`.
- `c_resolve/` contains `esther_act6_c_background.svg`, `esther_act6_c_middle_ground.svg`, and `esther_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a banquet table in a shaded colonnade, the king with his ring, Haman swollen with pride, the queen veiled and composed |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `esther-the-first-banquet`

- **File:** `../tools/shot-designer/scenes/esther-the-first-banquet.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a banquet table in a shaded colonnade, the king with his ring, Haman swollen with pride, the queen veiled and composed
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `lamplight` `regal` `festive`

