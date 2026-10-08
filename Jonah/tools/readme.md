# Jonah — Creation Tools

Asset-creation tools for the **Jonah** story (Jonah 1–4). Every tool is a
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

1. **Jonah** — a shepherd's headwrap, short hair, a short beard, wearing herringbone-woven desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Ship Captain** — bare-headed, wavy hair, a short beard, wearing basket-weave work tunic, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Sailor** — bare-headed, a short beard, wearing woven-linen work tunic, in #77414b over #d0aa78, with #c89749 accents.
4. **King Of Nineveh** — a royal diadem, crown braids, clean-shaven, wearing dot-patterned court dress, in #53613a over #c2a36b, with #b99045 accents.
5. **Ninevite** — a hood, a receding hairline, a short beard, wearing dot-patterned tunic, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Child** — bare-headed, a short beard, wearing fine-linen tunic, in #875b34 over #c1a178, with #d0a34c accents.
7. **Messenger** — a shepherd's headwrap, shaved sides, a short beard, wearing woven-linen desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **Run to the Sea** — Jonah flees to Joppa and boards a ship bound for Tarshish, paying the fare to go the other way from God. Stage: a busy port at dawn, a man hurrying down the gangplank with a bag, the sea opening wide, a ship's prow pointed west; gulls and a fast heartbeat.

2. **The Storm** — The Lord sends a great wind, the ship threatens to break, and the sailors cast lots and find Jonah. Stage: a ship at night in a storm, waves like mountains, the crew desperate, a sleeping man below deck; lightning on the mast, a frightened circle of seamen.

3. **Into the Deep** — The sailors hurl Jonah into the sea and the sea grows calm; a great fish swallows him. Stage: a black sea at midnight, a figure sinking into the deep, a great shadow rising beneath him; the water calming behind the boat; the last light at the surface.

4. **Prayer Below** — Jonah prays from the fish's belly, from the belly of Sheol, and his prayer reaches the temple. Stage: a dark, red-lit interior, a man kneeling in a vast shadow, prayer rising like smoke; the walls of the deep around him; a single shaft of light from far above.

5. **Second Call** — The word of the Lord comes a second time: arise, go to Nineveh, the great city. Stage: a shoreline at dawn, a man walking out of the sea, a long road to the east; dry land, a new commission, the city a speck on the horizon.

6. **The Warning** — Jonah enters Nineveh a day's journey and cries: yet forty days, and Nineveh shall be overthrown. Stage: a vast city of walls and gardens at noon, a lone foreign voice echoing at the gate; a crowd gathering, a king on a distant throne; a single sentence over a whole empire.

7. **Nineveh Repents** — The people believe, from the greatest to the least, and the king rises from his throne and sits in ashes. Stage: a city covered in sackcloth, a throne turned to ashes, beasts and people fasting, a king in mourning; the whole city holding its breath.

8. **The Plant** — God makes a plant to shade Jonah, and Jonah is glad; then a worm attacks it, and the sun beats on his head. Stage: a booth on a hill above the city, a gourd growing in a single night, a man sheltering, a worm in the morning; a hot day, a lost shade.

9. **The Question** — God asks Jonah: should not I have compassion on Nineveh, that great city with more than a hundred and twenty thousand? Stage: the booth at evening, a man and a question, a city in the distance full of lamps; the last light of the day over a city that did not know its right hand from its left.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `water_fast` | Fast Water (Water) | Run to the Sea; The Storm; Into the Deep; Prayer Below; Second Call |
| `water_still` | Still Water (Water) | Run to the Sea; The Storm; Into the Deep; Prayer Below; Second Call |
| `wood_dark` | Dark Timber (Wood) | Run to the Sea; The Storm; Prayer Below |
| `desert_sand` | Wilderness Sand (Moses) | The Question |
| `leaves` | Leaves (Foliage) | Into the Deep; The Warning; The Plant |
| `fabric_weave` | Woven Linen (Fabric) | Nineveh Repents |

