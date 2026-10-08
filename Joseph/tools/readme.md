# Joseph — Creation Tools

Asset-creation tools for the **Joseph** story (Genesis 37–47). Every tool is a
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

1. **Joseph Young** — bare-headed, a short beard, wearing fine-linen tunic, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Joseph** — a shepherd's headwrap, wavy hair, a short beard, wearing fine-linen traveller's cloak, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Jacob** — bare-headed, a short beard, wearing basket-weave traveller's cloak, in #77414b over #d0aa78, with #c89749 accents.
4. **Reuben** — a skullcap, shoulder-length waves, a short beard, wearing basket-weave work tunic, in #53613a over #c2a36b, with #b99045 accents.
5. **Judah** — a hood, a receding hairline, a short beard, wearing dot-patterned tunic, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Benjamin** — bare-headed, locs, a short beard, wearing traveller's cloak, in #875b34 over #c1a178, with #d0a34c accents.
7. **Potiphar** — a shepherd's headwrap, shaved sides, a short beard, wearing woven-linen desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
8. **Potiphars Wife** — bare-headed, crown braids, clean-shaven, wearing fine-linen work tunic, in #365f67 over #b78d58, with #d3ad53 accents.
9. **Cupbearer** — a skullcap, short hair, a short beard, wearing herringbone-woven tunic, in #77414b over #d0aa78, with #c89749 accents.
10. **Baker** — a hood, wavy hair, a short beard, wearing basket-weave traveller's cloak, in #53613a over #c2a36b, with #b99045 accents.
11. **Pharaoh** — a pharaoh crown, a short beard, wearing fine-linen royal robes, in #67547a over #d8c39b, with #d0ad58 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **The Coloured Robe** — Jacob loves Joseph best, makes him a coat of many colours, and the brothers hate him for his dreams. Stage: a sunlit field of wheat at noon, a boy in a long bright coat among his brothers, a sheaf bowing in the dream; gold stubble, a cold wind of envy.

2. **Dreams and the Pit** — The brothers throw Joseph into an empty pit, then sell him to Ishmaelites for twenty shekels of silver. Stage: a dry pit in the wilderness at dusk, a boy at the bottom looking up, the brothers eating bread at the top; a caravan arriving, the sun going down like a wound.

3. **Potiphar's House** — Joseph is bought by Potiphar, and the Lord prospers all he touches, until the wife's false witness sends him to prison. Stage: an Egyptian villa at midday, a trusted steward at a table, a burning accusation, a torn garment; marble, shade, and a door closing.

4. **The Prison** — In prison Joseph tends the king's cupbearer and baker, and interprets their dreams — one restored, one hanged. Stage: a stone prison cell at dawn, two men in a dungeon, a cup and a basket of birds on a table; a dream's hope and a dream's doom.

5. **Pharaoh's Dreams** — Pharaoh dreams of seven fat cows and seven lean, seven full ears and seven thin; Joseph is called from the dungeon to interpret. Stage: a throne room by the Nile at dawn, a king in gold, a summoned prisoner, seven fat and seven gaunt cattle in the dream's smoke; a single meaning, a nation listening.

6. **Storehouses** — Joseph is made governor, and Egypt gathers the grain of seven plenty into storehouses, city by city. Stage: a Nile landscape in high summer, fields of wheat, great storehouses with sealed doors, scribes and ox-carts; a nation's patience, measured in grain.

7. **The Brothers Arrive** — The brothers come to buy grain in Egypt, bow before Joseph, and do not know him. Stage: a grain hall at midday, a governor in Egyptian robes, ten shepherds bowing low, a search for truth in a false bottom; a cup, a silver, a recognition withheld.

8. **Benjamin's Cup** — Joseph plants his silver cup in Benjamin's sack, and offers to keep the thief as his slave. Stage: a grain hall at dawn, a steward with a cup, the brothers returning in fear, a cup found in the youngest's sack; a test of love for the father's son.

9. **Revealed** — Joseph can no longer contain himself, and the brothers see his face, and he says: I am Joseph your brother. Stage: a great hall at midday, all the court standing back, a man weeping on his brothers' necks, the world turning over; light on the floor, and a long embrace.

10. **Goshen** — Jacob and all his household settle in Goshen, the best of the land, and Joseph provides for them all. Stage: a green delta at dawn, a family arriving with flocks, the governor's chariot waiting, a father and son falling into each other's arms; the best of the land, in the years of famine.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `fabric_dots` | Polka & Print (Fabric) | (general texture — all scenes) |
| `stone` | Stone (Structure) | The Prison |
| `wall_brick` | Brick Wall (Structure) | (general texture — all scenes) |
| `mosaic` | Mosaic (Structure) | (general texture — all scenes) |
| `hammered_gold` | Tabernacle Gold (Moses) | The Coloured Robe; Pharaoh's Dreams |
| `egypt_mud_brick` | Egyptian Mud Brick (Moses) | Potiphar's House; Storehouses; The Brothers Arrive |

