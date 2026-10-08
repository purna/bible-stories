# Act 14 · Moses' Final Reviews and Instructions

**Mood board 14 of 15** — Moses (Exodus 1–40; Numbers; Deuteronomy 34)

| | |
| --- | --- |
| Data file | `../data/act14_review.json` |
| SVG assets | `../assets/svg/act_14_reviews/` |
| 3D scene | `moses-reviews` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Prepare the next generation for the promised land. — match-it-up |

> "A bronze serpent healed all who looked on it. Balak hired Balaam to curse Israel, yet only blessings came from his mouth."

## Director notes

On the plains of Moab, Moses retells the journey to a new generation, sets the commandments before them, calls them to love the Lord with all their heart, and writes the law and a song as a witness. Stage: an open plain of Moab at long amber dusk, a gathered crowd of the younger generation, an old prophet with a scroll, stone tablets at his side, a column of cloud above the tent; the road home waiting beyond the river.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_14_reviews/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_14_reviews/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `moses_act14_a_background.svg`, `moses_act14_a_middle_ground.svg`, and `moses_act14_a_foreground.svg`.
- `b_core_action/` contains `moses_act14_b_background.svg`, `moses_act14_b_middle_ground.svg`, and `moses_act14_b_foreground.svg`.
- `c_resolve/` contains `moses_act14_c_background.svg`, `moses_act14_c_middle_ground.svg`, and `moses_act14_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: an open plain of Moab at long amber dusk, a gathered crowd of the younger generation, an old prophet with a scroll, stone tablets at his side, a column of cloud above the tent |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#121420` (dark) → `#1c1a24` (dark) → `#060608` (dark)
- **Vignette:** radial gradient centred at 50% 45% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `moses-reviews`

- **File:** `../tools/shot-designer/scenes/moses-reviews.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** an open plain of Moab at long amber dusk, a gathered crowd of the younger generation, an old prophet with a scroll, stone tablets at his side, a column of cloud above the tent
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`solemn` `prophetic` `communal` `peripatetic`
