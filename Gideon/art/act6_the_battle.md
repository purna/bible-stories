# Ch.6 · The Battle

**Mood board 6 of 7** — Gideon (Judges 6–8)

| | |
| --- | --- |
| Data file | `../data/act6_the_battle.json` |
| SVG assets | `../assets/svg/act_06_the_battle/` |
| 3D scene | `gideon-the-battle` in `../tools/shot-designer/scenes/` |
| Particle mode | ember — firelight glow, warm orange accents against deep shadow |
| Game beat | Shatter jars, blow trumpets, hold torches high. — ordered rhythm |

> "Gideon divides the three hundred into three companies. Each man carries a trumpet, an empty jar, and a torch inside."

## Director notes

The three hundred shatter jars, light torches, blow trumpets, and shout for the Lord and for Gideon; the host turns on itself. Stage: the midnight camp erupting in flame and trumpet, torchlight sweeping the tents, panic in the dark; the valley blazing like a battlefield of light.

## 2D SVG composition

The scene uses three ordered SVG panels in `../assets/svg/act_06_the_battle/`. Each panel separates the view into background, middle-ground, and foreground SVG layers in `../assets/svg/act_06_the_battle/`. The middle ground carries the focal setting and props, with optional character staging.

- `a_establish/` contains `gideon_act6_a_background.svg`, `gideon_act6_a_middle_ground.svg`, and `gideon_act6_a_foreground.svg`.
- `b_core_action/` contains `gideon_act6_b_background.svg`, `gideon_act6_b_middle_ground.svg`, and `gideon_act6_b_foreground.svg`.
- `c_resolve/` contains `gideon_act6_c_background.svg`, `gideon_act6_c_middle_ground.svg`, and `gideon_act6_c_foreground.svg`.

The act JSON links the exports through `sceneLayers` in `../data/manifest.json` (or `../data/canon.json`).

| Panel | Beat | Content |
| --- | --- | --- |
| `a_establish` | establishing | wide framing of the setting: the midnight camp erupting in flame and trumpet, torchlight sweeping the tents, panic in the dark |
| `b_core_action` | core action | the scene's central movement and characters |
| `c_resolve` | resolution | the beat's outcome, holding the emotional note |

- **Palette:** `#1a0808` (dark) → `#0a0502` (dark)
- **Vignette:** radial gradient centred at 50% 30% — the eye lands here first
- **Ambience:** ember particles drift across the panels (firelight glow, warm orange accents against deep shadow)
- **Line work:** bold silhouettes for the focal element, lighter strokes for depth

## 3D three.js composition

**Shot Designer scene:** `gideon-the-battle`

- **File:** `../tools/shot-designer/scenes/gideon-the-battle.js`, registered in `scenes/manifest.json`
- **Lighting:** ember — firelight glow, warm orange accents against deep shadow; hemisphere + key light tuned to the 2D palette
- **Set:** the midnight camp erupting in flame and trumpet, torchlight sweeping the tents, panic in the dark
- **Camera:** 55mm lens, slow orbit from the establish framing to the core-action framing
- **Motion:** one repeating loop (water, fire, weather or figure movement) so the
  still frame and the animated shot read the same

## Mood

`firelight` `nocturnal` `military-camp` `battlefield`

