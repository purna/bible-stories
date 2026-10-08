# Noah — Creation Tools

Asset-creation tools for the **Noah** story (Genesis 6–9). Every tool is a
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
- App logic is shared across stories: `../../shared-tools/scene-designer.js`.
- Use it to position characters and props per scene, then export the staged scene.

### Texture Forge — `texture-forge.html`

Seamless SVG material generator. Open `texture-forge.html` in a browser.

- Generates the story's textures (listed in the Textures section below).
- Adjust pattern parameters per material, then export repeating SVG patterns.
- Textures feed the SVG scene backgrounds and foregrounds in `../assets/svg/`.
- The story's texture set is configured by `STORY_TEXTURE_CONFIG` at the top of the file.

## Characters

These are the character notes from `character-designer/index.html`:

1. **Noah** — bare-headed, short hair, a short beard, wearing basket-weave traveller's cloak, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Noah’s Wife** — a shepherd's headwrap, crown braids, clean-shaven, wearing basket-weave traveller's cloak, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Shem** — a wrapped scarf, a short beard, wearing herringbone-woven desert mantle, in #77414b over #d0aa78, with #c89749 accents.
4. **Ham** — a skullcap, shoulder-length waves, a short beard, wearing basket-weave work tunic, in #53613a over #c2a36b, with #b99045 accents.
5. **Japheth** — a hood, a receding hairline, a short beard, wearing dot-patterned tunic, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Shems Wife** — a headscarf, flowing hair, clean-shaven, wearing traveller's cloak, in #875b34 over #c1a178, with #d0a34c accents.
7. **Hams Wife** — a wrapped scarf, a side braid, clean-shaven, wearing woven-linen desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
8. **Japheths Wife** — bare-headed, crown braids, clean-shaven, wearing fine-linen work tunic, in #365f67 over #b78d58, with #d3ad53 accents.
9. **Neighbour** — bare-headed, short hair, a short beard, wearing woven-linen work tunic, in #77414b over #d0aa78, with #c89749 accents.
10. **Animal Keeper** — a wrapped scarf, wavy hair, a short beard, wearing basket-weave work tunic, in #53613a over #c2a36b, with #b99045 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **The Warning** — The Lord warns Noah of the coming flood, and he is told to make an ark of gopher wood, for the earth is filled with violence. Stage: a plain at dusk, a man listening to a voice, the world behind him darkening, the first rain cloud on the horizon; a lone figure in a field.

2. **The Blueprint** — The ark is to be three hundred cubits long, fifty wide, and thirty high, with a roof, a door, and three decks. Stage: a man marking out the great hull with a line and a cubit rod, the shape of the ark in the dust; the light of a late afternoon on a plan of wood.

3. **The Long Build** — Noah and his sons gather timber, fit planks, and seal them with pitch, and the work goes on for a hundred and twenty years. Stage: a hillside workshop through the seasons, a hull rising, a family at work, the neighbours watching and mocking; a long, patient, quiet labour.

4. **The Gathering** — The animals come to Noah two by two, clean and unclean, and he brings them into the ark. Stage: the ark door at dawn, a line of creatures coming up the ramp, birds and beasts, a man and his sons guiding them; the world's parade, arriving.

5. **The Door Shuts** — The Lord shuts the door of the ark, and the fountains of the deep break up, and the windows of heaven are opened. Stage: the great door closing in a darkening sky, a family inside, the first rain beginning; a world shut in, a world washed out.

6. **Forty Days** — The rain falls forty days and forty nights, and the waters rise, and the ark floats on the face of the waters. Stage: the ark in a great sea of rain, the water over the hills, the animals in the dark below; a world of water, the rain never stopping, a lamp in the hold.

7. **The Long Wait** — Noah sends out a raven, then a dove; the dove returns with an olive leaf, and the waters are drying. Stage: the ark on a quiet sea at dawn, a dove returning to the window, a branch of olive in its beak; the first sign of the world coming back.

8. **Dry Ground** — The ark rests on the mountains of Ararat, and Noah opens the window and looks out on the new earth. Stage: a mountain peak at sunrise, the ark resting on the rock, the water gone from the valleys; a man stepping out onto the wet ground, the first day.

9. **The Covenant** — Noah builds an altar, offers burnt offerings, and the Lord sets the rainbow in the cloud as a sign of the covenant. Stage: an altar of stone on a mountain, the smoke rising, the sky clearing, a rainbow across the whole earth; a promise being made in colour and light.

10. **The Vineyard** — Noah plants a vineyard, drinks the wine, and is uncovered in his tent; Ham sees, Shem and Japheth cover him. Stage: a vineyard in the afternoon, a man resting in a tent, a son coming in with a garment, the father's shame and blessing; the first vineyard, the first family, the first sorrow.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `wood_dark` | Dark Timber (Wood) | The Warning; The Blueprint; The Long Build; The Gathering; The Door Shuts; Forty Days; The Long Wait; Dry Ground; The Covenant |
| `water_fast` | Fast Water (Water) | The Warning; The Blueprint; The Long Build; The Door Shuts; Forty Days; The Long Wait; Dry Ground |
| `water_still` | Still Water (Water) | The Warning; The Long Build; The Door Shuts; Forty Days; The Long Wait; Dry Ground; The Covenant; The Vineyard |
| `fabric_weave` | Woven Linen (Fabric) | The Vineyard |
| `stone` | Stone (Structure) | Dry Ground; The Covenant |
| `leaves` | Leaves (Foliage) | The Warning; The Long Wait; The Vineyard |

