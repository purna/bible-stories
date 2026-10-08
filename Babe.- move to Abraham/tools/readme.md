# Babel — Creation Tools

Asset-creation tools for the **Babel** story (Genesis 11:1–9). Every tool is a
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

### Texture Forge — `texture-forge.html`

Seamless SVG material generator. Open `texture-forge.html` in a browser.

- Generates the story's textures (listed in the Textures section below).
- Adjust pattern parameters per material, then export repeating SVG patterns.
- Textures feed the SVG scene backgrounds and foregrounds in `../assets/svg/`.
- The story's texture set is configured by `STORY_TEXTURE_CONFIG` at the top of the file.

## Characters

These are the character notes from `character-designer/index.html`:

1. **Noah** — bare-headed, short hair, a short beard, wearing woven-linen tunic, in #6f4c2d over #c7a56a, with #b78a3d accents.
2. **Nimrod** — bare-headed, close-cropped hair, a full round beard, wearing woven-linen tunic, in #6f4c2d over #c7a56a, with #b78a3d accents.
3. **Builder** — a headscarf, braided hair, a short beard, wearing woven-linen tunic, in #6f4c2d over #c7a56a, with #b78a3d accents.
4. **The Voice** — a turban, flowing hair, a short beard, wearing woven-linen tunic, in #6f4c2d over #c7a56a, with #b78a3d accents.

## Scenes

These are the scene notes from `shot-designer/index.html`:

1. **The Brick** — The people of Shinar make brick and burn it thoroughly, building a city of fired clay on the plain. Stage: a brickfield at noon, kilns smoking, workers mixing straw and clay, moulds lining the ground; ochre dust, kiln orange, the first city rising.

2. **The Tower** — They say: come, let us build a tower with its top in the heavens. Stage: a great ziggurat rising from the plain, scaffolding and ramps, workers hauling brick; the tower catching the evening sun; ambition in mortar and clay.

3. **The Summit** — The tower climbs toward the heavens, and the city spreads around its base. Stage: the summit scaffolding at dusk, the city below in lamps, the sky darkening overhead; a silhouette of the tower against the last light.

4. **The Confusion** — The Lord confuses their language, and they cannot understand one another. Stage: the building site at midday, workers gesturing in sudden misunderstanding, bricks tumbling, the work stopping; a babble of sound frozen in the frame; bright, bewildered light.

5. **The Scattering** — The Lord scatters them over the face of all the earth, and the city is abandoned. Stage: the plain at dawn, families packing and parting every way, the tower silent behind them; dust rising on empty roads; the city left unfinished.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `stone` | Stone (Structure) | (general texture — all scenes) |
| `brick` | Tower Brick (Babel) | The Brick; The Tower; The Summit; The Confusion; The Scattering |
| `tar` | Tar Pit (Babel) | The Tower; The Summit |
| `leaves` | Leaves (Foliage) | (general texture — all scenes) |

