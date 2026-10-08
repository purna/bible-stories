# The Chariot of Fire

**Mood board 7 of 7** — Eiljah (1 Kings 17–19, 21; 2 Kings 2)

| | |
| --- | --- |
| Data file | `../data/act7_chariot.json` |
| SVG assets | `../assets/svg/act_07_chariot/` |
| 3D scene | `eiljah-chariot` in `../tools/shot-designer/scenes/` |
| Particle mode | wind_chariot — wind_chariot |
| Game beat | Distinguish wind, quake, fire, and quiet. — ordered rhythm |

> "The time came for the LORD to take Elijah up to heaven in a whirlwind. Elijah and Elisha travelled together from Gilgal."

## Director notes

At Horeb the Lord passes in wind, earthquake and fire — and speaks in a sound of sheer silence; Elijah wraps his face in his mantle. Stage: a cave mouth on the mountain, the prophet listening in the dark, the wind outside bending the scrub; an enormous stillness in the frame.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_07_chariot/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_07_chariot/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `elijah_act7_a_background.svg`, `elijah_act7_a_middle_ground.svg`, and `elijah_act7_a_foreground.svg`.
- `b_core_action/` contains `elijah_act7_b_background.svg`, `elijah_act7_b_middle_ground.svg`, and `elijah_act7_b_foreground.svg`.
- `c_resolve/` contains `elijah_act7_c_background.svg`, `elijah_act7_c_middle_ground.svg`, and `elijah_act7_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a cave mouth on the mountain, the prophet listening in the dark, the wind outside bending the scrub |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#ffde7d` (pale) → `#ff914d` (light)
- **Vignette:** radial gradient centred at 50% 50% — the eye lands here first
- **Ambience:** wind_chariot particles drift across the panels (wind_chariot)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `eiljah-chariot`

- **File:** `../tools/shot-designer/scenes/eiljah-chariot.js`, registered in `scenes/manifest.json`
- **Lighting:** wind_chariot — wind_chariot; hemisphere + key light tuned to the 2D palette
- **Set:** a cave mouth on the mountain, the prophet listening in the dark, the wind outside bending the scrub
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`firelight` `prophetic` `lofty` `subterranean`

