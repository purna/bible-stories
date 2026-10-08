# Ch.5 · The Dream

**Mood board 5 of 7** — Gideon (Judges 6–8)

| | |
| --- | --- |
| Data file | `../data/act5_the_dream.json` |
| SVG assets | `../assets/svg/act_05_the_dream/` |
| 3D scene | `gideon-the-dream` in `../tools/shot-designer/scenes/` |
| Particle mode | night — night |
| Game beat | Creep to the camp, overhear the barley cake dream. — pathfinding |

> "That night, the Lord says: arise, go down to the camp. I have given it into your hand."

## Director notes

Gideon creeps to the Midianite camp with Purah and hears a dream: a barley cake rolls into the camp and flattens a tent. Stage: a vast night camp of countless fires, the men moving between tents, a dreamer and his companion; starlight and firelight, a murmuring army.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_05_the_dream/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_05_the_dream/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `gideon_act5_a_background.svg`, `gideon_act5_a_middle_ground.svg`, and `gideon_act5_a_foreground.svg`.
- `b_core_action/` contains `gideon_act5_b_background.svg`, `gideon_act5_b_middle_ground.svg`, and `gideon_act5_b_foreground.svg`.
- `c_resolve/` contains `gideon_act5_c_background.svg`, `gideon_act5_c_middle_ground.svg`, and `gideon_act5_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: a vast night camp of countless fires, the men moving between tents, a dreamer and his companion |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#100a1a` (dark) → `#0a0502` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** night particles drift across the panels (night)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `gideon-the-dream`

- **File:** `../tools/shot-designer/scenes/gideon-the-dream.js`, registered in `scenes/manifest.json`
- **Lighting:** night — night; hemisphere + key light tuned to the 2D palette
- **Set:** a vast night camp of countless fires, the men moving between tents, a dreamer and his companion
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`nocturnal` `nomadic` `military-camp` `military` `dreamlike`

