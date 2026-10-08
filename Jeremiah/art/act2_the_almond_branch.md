# Ch.2 · The Almond Branch

**Mood board 2 of 10** — Jeremiah (Jeremiah 1–39, 31–32)

| | |
| --- | --- |
| Data file | `../data/act2_the_almond_branch.json` |
| SVG assets | `../assets/svg/act_02_the_almond_branch/` |
| 3D scene | `jeremiah-the-almond-branch` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Spot signs that God is watching over the word. — observation |

> "Spot signs that God is watching over the word."

## Director notes

The Lord shows a rod of an almond — the first to wake — to show that He watches over His word to perform it. Stage: a branch with pink blossoms in winter light, a hand holding it out, the prophet's eyes; the first blossom of the year against a cold sky.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_the_almond_branch/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_the_almond_branch/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `jeremiah_act2_a_background.svg`, `jeremiah_act2_a_middle_ground.svg`, and `jeremiah_act2_a_foreground.svg`.
- `b_core_action/` contains `jeremiah_act2_b_background.svg`, `jeremiah_act2_b_middle_ground.svg`, and `jeremiah_act2_b_foreground.svg`.
- `c_resolve/` contains `jeremiah_act2_c_background.svg`, `jeremiah_act2_c_middle_ground.svg`, and `jeremiah_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a branch with pink blossoms in winter light, a hand holding it out, the prophet's eyes |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `jeremiah-the-almond-branch`

- **File:** `../tools/shot-designer/scenes/jeremiah-the-almond-branch.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a branch with pink blossoms in winter light, a hand holding it out, the prophet's eyes
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`prophetic`

