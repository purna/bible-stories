# The Still, Small Voice

**Mood board 5 of 7** — Eiljah (1 Kings 17–19, 21; 2 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act5_voice.json` |
| SVG assets | `../assets/svg/act_05_voice/` |
| 3D scene | `eiljah-voice` in `../tools/shot-designer/scenes/` |
| Particle mode | constellation — constellation |
| Game beat | Spot the small cloud and race from the storm. — observation |

> "At Horeb, Elijah entered a cave and spent the night. God asked him a question that reached beyond the storm outside."

## Director notes

Elijah prays seven times, a cloud no bigger than a man's hand rises over the sea, and he runs before Ahab's chariot to Jezreel. Stage: a headland at sunset, a small cloud, the sky darkening, the prophet running with his cloak flying; rain sweeping in, black clouds and gold rifts.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_voice/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_voice/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `elijah_act5_a_background.svg`, `elijah_act5_a_middle_ground.svg`, and `elijah_act5_a_foreground.svg`.
- `b_core_action/` contains `elijah_act5_b_background.svg`, `elijah_act5_b_middle_ground.svg`, and `elijah_act5_b_foreground.svg`.
- `c_resolve/` contains `elijah_act5_c_background.svg`, `elijah_act5_c_middle_ground.svg`, and `elijah_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a headland at sunset, a small cloud, the sky darkening, the prophet running with his cloak flying |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#0d1b2a` (dark) → `#061224` (dark) → `#030b18` (dark)
- **Vignette:** radial gradient centred at 50% 20% — the eye lands here first
- **Ambience:** constellation particles drift across the panels (constellation)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `eiljah-voice`

- **File:** `../tools/shot-designer/scenes/eiljah-voice.js`, registered in `scenes/manifest.json`
- **Lighting:** constellation — constellation; hemisphere + key light tuned to the 2D palette
- **Set:** a headland at sunset, a small cloud, the sky darkening, the prophet running with his cloak flying
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`soaked` `nautical` `golden-hour` `martial` `prophetic`

