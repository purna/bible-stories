# Act 8 · Jethro's Advice and Sinai Arrival

**Mood board 8 of 15** — Moses (Exodus 1–40; Numbers; Deuteronomy 34)

| | |
| --- | --- |
| Data file | `../data/manifest.json` |
| SVG assets | `../assets/svg/act08_jethro_s_counsel/` |
| 3D scene | `moses-jethro` in `../tools/shot-designer/scenes/` |
| Particle mode | dusk — low warm sun, long amber shadows, deep violet sky banding |
| Game beat | Receive wisdom from Midian and reach the holy mountain. — match-it-up |

> "Amalek attacked at Rephidim. While Moses' hands stayed raised, Joshua's army prevailed, and by evening Amalek was beaten."

## Director notes

Jethro brings Zipporah and her sons to the camp, hears all that the Lord has done, and counsels Moses to appoint capable judges so he no longer carries the people alone; then Israel travels on and camps before the mountain. Stage: a desert camp at long amber dusk, Midianite tents beside the Israelite camp, a father-in-law and a weary leader sitting at a trail marker, a line of appointed judges, the foothills of the holy mountain on the horizon; a shared meal, a burden being set down.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act08_jethro_s_counsel/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act08_jethro_s_counsel/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `moses_act8_a_background.svg`, `moses_act8_a_middle_ground.svg`, and `moses_act8_a_foreground.svg`.
- `b_core_action/` contains `moses_act8_b_background.svg`, `moses_act8_b_middle_ground.svg`, and `moses_act8_b_foreground.svg`.
- `c_resolve/` contains `moses_act8_c_background.svg`, `moses_act8_c_middle_ground.svg`, and `moses_act8_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json`.

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a desert camp at long amber dusk, Midianite tents beside the Israelite camp, a father-in-law and a weary leader sitting at a trail marker, a line of appointed judges, the foothills of the holy mountain on the horizon |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#241a0e` (dark) → `#34261a` (dark) → `#0e0a06` (dark)
- **Vignette:** radial gradient centred at 50% 40% — the eye lands here first
- **Ambience:** dusk particles drift across the panels (low warm sun, long amber shadows, deep violet sky banding)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `moses-jethro`

- **File:** `../tools/shot-designer/scenes/moses-jethro.js`, registered in `scenes/manifest.json`
- **Lighting:** dusk — low warm sun, long amber shadows, deep violet sky banding; hemisphere + key light tuned to the 2D palette
- **Set:** a desert camp at long amber dusk, Midianite tents beside the Israelite camp, a father-in-law and a weary leader sitting at a trail marker, a line of appointed judges, the foothills of the holy mountain on the horizon
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`arid` `pastoral` `humble` `peripatetic`
