# Ch.2 · The Holy Throne

**Mood board 2 of 9** — Isaiah (Isaiah 1–12, 36–40, 53, 65–66)

| | |
| --- | --- |
| Data file | `../data/act2_the_holy_throne.json` |
| SVG assets | `../assets/svg/act_02_the_holy_throne/` |
| 3D scene | `isaiah-the-holy-throne` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Navigate the temple vision and answer the call. — pathfinding |

> "Navigate the temple vision and answer the call."

## Director notes

In the year King Uzziah died, Isaiah sees the Lord on a throne, high and lifted up, with seraphim crying holy, holy, holy. Stage: a temple in a vision, the throne filling the hall, a train of fire, six-winged seraphim, an altar coal touching the prophet's lips; blinding, trembling light.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_02_the_holy_throne/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_02_the_holy_throne/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `isaiah_act2_a_background.svg`, `isaiah_act2_a_middle_ground.svg`, and `isaiah_act2_a_foreground.svg`.
- `b_core_action/` contains `isaiah_act2_b_background.svg`, `isaiah_act2_b_middle_ground.svg`, and `isaiah_act2_b_foreground.svg`.
- `c_resolve/` contains `isaiah_act2_c_background.svg`, `isaiah_act2_c_middle_ground.svg`, and `isaiah_act2_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a temple in a vision, the throne filling the hall, a train of fire, six-winged seraphim, an altar coal touching the prophet's lips |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#2d1a0e` (dark) → `#060402` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `isaiah-the-holy-throne`

- **File:** `../tools/shot-designer/scenes/isaiah-the-holy-throne.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a temple in a vision, the throne filling the hall, a train of fire, six-winged seraphim, an altar coal touching the prophet's lips
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`firelight` `regal` `sacred` `prophetic` `apocalyptic`

