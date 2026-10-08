# Act 12 · The Spies and Rebellion

**Mood board 12 of 15** — Moses (Exodus 1–40; Numbers; Deuteronomy 34)

| | |
| --- | --- |
| Data file | `../data/act12_spies.json` |
| SVG assets | `../assets/svg/act_12_spies/` |
| 3D scene | `moses-spies` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Explore Canaan and face the consequences of unbelief. — call-and-response |

> "The tent was raised, the cloud covered it, and the glory of the Lord filled the dwelling."

## Director notes

Twelve spies cross the land for forty days and return with a cluster of grapes on a pole; ten report giants and walled cities, Caleb and Joshua urge trust, and the people weep and refuse, so the generation is turned back to the wilderness. Stage: a border ridge at dusk, a grape cluster hanging from a carrying pole, twelve travel-worn men at a council fire, an assembly in tears, two men tearing their clothes; the promised land lit in the distance and the way closing behind.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_12_spies/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_12_spies/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `moses_act12_a_background.svg`, `moses_act12_a_middle_ground.svg`, and `moses_act12_a_foreground.svg`.
- `b_core_action/` contains `moses_act12_b_background.svg`, `moses_act12_b_middle_ground.svg`, and `moses_act12_b_foreground.svg`.
- `c_resolve/` contains `moses_act12_c_background.svg`, `moses_act12_c_middle_ground.svg`, and `moses_act12_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a border ridge at dusk, a grape cluster hanging from a carrying pole, twelve travel-worn men at a council fire, an assembly in tears, two men tearing their clothes |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#14180c` (dark) → `#241c10` (dark) → `#080804` (dark)
- **Vignette:** radial gradient centred at 50% 45% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `moses-spies`

- **File:** `../tools/shot-designer/scenes/moses-spies.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a border ridge at dusk, a grape cluster hanging from a carrying pole, twelve travel-worn men at a council fire, an assembly in tears, two men tearing their clothes
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`arid` `ominous` `mournful` `peripatetic`
