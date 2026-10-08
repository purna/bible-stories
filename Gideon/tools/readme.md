# Gideon — Creation Tools

Asset-creation tools for the **Gideon** story (Judges 6–8). Every tool is a
standalone HTML file: open it in any modern browser — no server is required,
`file://` works. The tools are also linked in the story's credits footer
(`../index.html`), which the information modal surfaces as the credits panel.

## Tools

### Character Designer — `character-designer/index.html`

Browser-based character portrait generator. Open `character-designer/index.html` in any modern browser — it works from `file://`, no server needed.

- Choose a preset from the list (the story's characters, defined in `character_presets.js`).
- Adjust face, hair, beard, hat and clothing, and tune the palette.
- Export the portrait as SVG for use in the comic, or copy the preset JSON to add variants.
- Finished character assets live in `../assets/characters/` (one `.json` + one `.svg` per character).

### Shot Designer — `shot-designer/index.html`

3D scene composer built on three.js. Open `shot-designer/index.html` in a browser.

- Pick a scene from the listbox — scenes are registered in `scenes/manifest.json`.
- Fly the camera, set keyframes, and build shot timelines with transitions and easing curves.
- Export stills (PNG .zip) or video (MP4 via WebCodecs), or export the scene as 3D JSON/JS.
- Scenes are ES modules in `scenes/` exporting `build(group)`; shared building blocks live in `scenes/lib/lowpoly.js`.
- Add a scene: write `scenes/<id>.js` following the existing files, then add an entry to `scenes/manifest.json`.

### Scene Designer — `scene_designer.html`

2D scene staging app for laying out each scene before SVG export. Open `scene_designer.html` in a browser.

- The scene list and its one-line briefs live in the `data-scenes` attribute; full director notes are in the comment at the top of the file and in this README.
- The renderer is inline in `scene_designer.html`, so this story’s scene designer can be edited independently.
- Use it to position characters and props per scene, then export the staged scene.

### Texture Forge — `texture-forge.html`

Seamless SVG material generator. Open `texture-forge.html` in a browser.

- Generates the story's textures (listed in the Textures section below).
- Adjust pattern parameters per material, then export repeating SVG patterns.
- Textures feed the SVG scene backgrounds and foregrounds in `../assets/svg/`.
- The story's texture set is configured by `STORY_TEXTURE_CONFIG` at the top of the file.

## Characters

These are the character notes from `character-designer/index.html`:

1. **Gideon** — a shepherd's headwrap, short hair, a short beard, wearing herringbone-woven desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Angel** — bare-headed, wavy hair, a short beard, wearing woven-linen desert mantle, in #8a7a4a over #e8d9b0, with #ffd700 accents.
3. **Joash** — a shepherd's headwrap, wavy hair, a short beard, wearing fine-linen traveller's cloak, in #365f67 over #b78d58, with #d3ad53 accents.
4. **Midianite Soldier** — bare-headed, locs, a short beard, wearing basket-weave work tunic, in #875b34 over #c1a178, with #d0a34c accents.
5. **Midianite King** — a wrapped scarf, a short beard, wearing herringbone-woven desert mantle, in #77414b over #d0aa78, with #c89749 accents.
6. **Purah** — a skullcap, wavy hair, a short beard, wearing woven-linen work tunic, in #4a5a3a over #c9a06a, with #a88a3a accents.
7. **Ephraimite** — bare-headed, a receding hairline, a short beard, wearing woven-linen work tunic, in #67547a over #d8c39b, with #d0ad58 accents.
8. **Israelite Warrior** — a skullcap, shoulder-length waves, a short beard, wearing basket-weave work tunic, in #53613a over #c2a36b, with #b99045 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **The Winepress** — Gideon threshes wheat in a winepress to hide it from Midian, and the angel of the Lord appears under the oak at Ophrah. Stage: a hidden winepress in a vineyard at dawn, a man beating wheat, a figure in shining raiment beneath the oak; dust, shadow, and the first gleam of the divine messenger.

2. **The Sign** — Gideon prepares a young goat and unleavened cakes; fire consumes the offering on the rock and the angel vanishes. Stage: a rock at the oak's shade, a meat offering on a stone, a flame rising from it; the terrified Gideon; the morning lit by one sudden fire.

3. **The Fleece** — Gideon lays a wool fleece on the threshing floor: dew on the fleece alone, then dry fleece on wet ground. Stage: a threshing floor at dawn, a single fleece glistening with dew, the ground around it parched; silence, patience, and a second night reversed.

4. **The Army Reduced** — Thirty-two thousand men drink at the spring; those who lap like dogs are three hundred, and God reduces the army to them. Stage: a stream at a desert spring, an army kneeling, the water glinting; three hundred hands cupping the water; morning light on a thinning host.

5. **The Dream** — Gideon creeps to the Midianite camp with Purah and hears a dream: a barley cake rolls into the camp and flattens a tent. Stage: a vast night camp of countless fires, the men moving between tents, a dreamer and his companion; starlight and firelight, a murmuring army.

6. **The Battle** — The three hundred shatter jars, light torches, blow trumpets, and shout for the Lord and for Gideon; the host turns on itself. Stage: the midnight camp erupting in flame and trumpet, torchlight sweeping the tents, panic in the dark; the valley blazing like a battlefield of light.

7. **The Victory** — The Midianite kings are pursued to Karkor and captured, and Israel is freed for forty years; Gideon refuses the crown. Stage: a desert ford at dawn, the kings in purple caught by the river, the exhausted army triumphant; a man refusing a crown; long light over a quiet land.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `wheat_stalks` | Wheat Stalks (Gideon) | The Winepress; The Fleece; The Dream; The Battle |
| `rock_surface` | Rock Surface (Gideon) | The Sign |
| `wool_fleece` | Wool Fleece (Gideon) | The Sign; The Fleece |
| `water_ripple` | Water Ripple (Gideon) | The Army Reduced; The Victory |
| `clay_jar` | Clay Jar (Gideon) | The Army Reduced; The Battle |
| `trumpet_horn` | Trumpet Horn (Gideon) | The Battle |
| `torch_flame` | Torch Flame (Gideon) | The Sign; The Army Reduced; The Dream; The Battle; The Victory |
| `camel_hair` | Camel Hair (Gideon) | The Army Reduced; The Victory |
| `tent_fabric` | Tent Fabric (Gideon) | The Dream; The Battle |
| `sword_iron` | Sword Iron (Gideon) | The Army Reduced; The Dream; The Battle; The Victory |

