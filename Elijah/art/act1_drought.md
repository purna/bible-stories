# The Drought

**Mood board 1 of 7** — Eiljah (1 Kings 17–19, 21; 2 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act1_drought.json` |
| SVG assets | `../assets/svg/act_01_drought/` |
| 3D scene | `eiljah-drought` in `../tools/shot-designer/scenes/` |
| Particle mode | dust — dust |
| Game beat | Follow ravens to daily bread by the brook. — pathfinding |

> "In the northern kingdom of Israel, King Ahab had turned away from the LORD. Queen Jezebel had promoted the worship of Baal, and the nation was being led deeper into idolatry."

## Director notes

Elijah the Tishbite proclaims a drought and is sent to the brook Cherith, where ravens bring him bread and meat. Stage: a cracked brook bed in a limestone wadi, a lone prophet in patched cloth, ravens landing with crusts; dust, heat shimmer, a dry riverbed.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_01_drought/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_01_drought/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `elijah_act1_a_background.svg`, `elijah_act1_a_middle_ground.svg`, and `elijah_act1_a_foreground.svg`.
- `b_core_action/` contains `elijah_act1_b_background.svg`, `elijah_act1_b_middle_ground.svg`, and `elijah_act1_b_foreground.svg`.
- `c_resolve/` contains `elijah_act1_c_background.svg`, `elijah_act1_c_middle_ground.svg`, and `elijah_act1_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a cracked brook bed in a limestone wadi, a lone prophet in patched cloth, ravens landing with crusts |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#f2a65a` (light) → `#774f38` (deep)
- **Vignette:** radial gradient centred at 50% 10% — the eye lands here first
- **Ambience:** dust particles drift across the panels (dust)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `eiljah-drought`

- **File:** `../tools/shot-designer/scenes/eiljah-drought.js`, registered in `scenes/manifest.json`
- **Lighting:** dust — dust; hemisphere + key light tuned to the 2D palette
- **Set:** a cracked brook bed in a limestone wadi, a lone prophet in patched cloth, ravens landing with crusts
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`dusty` `humble` `prophetic`

