# Ch.3 · At the Temple Gate

**Mood board 3 of 10** — Jeremiah (Jeremiah 1–39, 31–32)

| | |
| --- | --- |
| Data file | `../data/act3_at_the_temple_gate.json` |
| SVG assets | `../assets/svg/act_03_at_the_temple_gate/` |
| 3D scene | `jeremiah-at-the-temple-gate` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Separate ritual confidence from justice. — ordered rhythm |

> "Separate ritual confidence from justice."

## Director notes

The Lord tells Jeremiah to stand at the temple gate and cry: trust not in the temple itself; do justice, hear the widow's plea. Stage: a temple gate at midday, a lone voice in a busy court, the poor and the blind at the steps; the stone of the temple and the people at its feet.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_03_at_the_temple_gate/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_03_at_the_temple_gate/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jeremiah_act3_a_background.svg`, `jeremiah_act3_a_middle_ground.svg`, and `jeremiah_act3_a_foreground.svg`.
- `b_core_action/` contains `jeremiah_act3_b_background.svg`, `jeremiah_act3_b_middle_ground.svg`, and `jeremiah_act3_b_foreground.svg`.
- `c_resolve/` contains `jeremiah_act3_c_background.svg`, `jeremiah_act3_c_middle_ground.svg`, and `jeremiah_act3_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a temple gate at midday, a lone voice in a busy court, the poor and the blind at the steps |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2a1a10` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jeremiah-at-the-temple-gate`

- **File:** `../tools/shot-designer/scenes/jeremiah-at-the-temple-gate.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** a temple gate at midday, a lone voice in a busy court, the poor and the blind at the steps
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`sacred` `megalithic` `threshold`

