# Ch.9 · The Fall of Jerusalem

**Mood board 9 of 10** — Jeremiah (Jeremiah 1–39, 31–32)

| | |
| --- | --- |
| Data file | `../data/act9_the_fall_of_jerusalem.json` |
| SVG assets | `../assets/svg/act_09_the_fall_of_jerusalem/` |
| 3D scene | `jeremiah-the-fall-of-jerusalem` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Guide survivors through the breached city. — pathfinding |

> "Guide survivors through the breached city."

## Director notes

The city falls after a long siege; the king's sons are slain, the temple is burned, and the people are taken into exile. Stage: smoke over the city, a wall breached, a king fleeing by night, a fire on the temple hill; the last light of a long night.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_09_the_fall_of_jerusalem/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_09_the_fall_of_jerusalem/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jeremiah_act9_a_background.svg`, `jeremiah_act9_a_middle_ground.svg`, and `jeremiah_act9_a_foreground.svg`.
- `b_core_action/` contains `jeremiah_act9_b_background.svg`, `jeremiah_act9_b_middle_ground.svg`, and `jeremiah_act9_b_foreground.svg`.
- `c_resolve/` contains `jeremiah_act9_c_background.svg`, `jeremiah_act9_c_middle_ground.svg`, and `jeremiah_act9_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: smoke over the city, a wall breached, a king fleeing by night, a fire on the temple hill |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jeremiah-the-fall-of-jerusalem`

- **File:** `../tools/shot-designer/scenes/jeremiah-the-fall-of-jerusalem.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** smoke over the city, a wall breached, a king fleeing by night, a fire on the temple hill
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`firelight` `nocturnal` `regal` `sacred` `rolling` `fortified` `urban`

