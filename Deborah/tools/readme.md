# Deborah — Creation Tools

Asset-creation tools for the **Deborah** story (Judges 4–5). Every tool is a
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

1. **Deborah** — a shepherd's headwrap, a side braid, clean-shaven, wearing herringbone-woven desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Barak** — a battle helmet, shaved sides, a short beard, wearing scale-patterned military lorica, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Jael** — a wrapped scarf, shoulder-length waves, clean-shaven, wearing herringbone-woven desert mantle, in #77414b over #d0aa78, with #c89749 accents.
4. **Sisera** — a battle helmet, short hair, a short beard, wearing scale-patterned military lorica, in #53613a over #c2a36b, with #b99045 accents.
5. **Jabin** — a royal diadem, a short beard, wearing fine-linen royal robes, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Israelite Scout** — a battle helmet, shaved sides, a short beard, wearing scale-patterned military lorica, in #875b34 over #c1a178, with #d0a34c accents.
7. **Village Woman** — a wrapped scarf, a side braid, clean-shaven, wearing woven-linen desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **Under the Palm** — Deborah, a prophetess and judge, sits beneath the Palm of Deborah between Ramah and Bethel, hearing the disputes of Israel. Stage: a broad palm casting dappled shade over limestone benches, Israelites climbing the hill country to seek judgment; warm late-morning light, olive-green and distant blue hills.

2. **The Summons** — Deborah sends for Barak son of Abinoam and charges him to muster ten thousand at Mount Tabor against Sisera's chariot army. Stage: a messenger crossing terraced fields, the judge's voice carrying, Barak weighing the risk; a woman's resolve against a soldier's doubt; midday clarity.

3. **Gather at Tabor** — The tribes rally on Tabor while Sisera marshals nine hundred iron chariots from Harosheth. Stage: a high hilltop mustering ground, spears glinting, campfires on the plain below; the enemy's chariot tracks darkening the valley; dawn assembly, mist on the heights.

4. **The Storm** — The Lord routs Sisera with a storm; the Kishon floods and the chariot wheels sink. Stage: a black sky over the plain, lightning, rain sheets, a river in spate swallowing iron wheels; Israelites pouring down the slope; thunderheads and flash-lit water.

5. **Sisera Flees** — Sisera abandons his chariot and flees on foot toward the tent of Jael, wife of Heber the Kenite. Stage: a lone figure staggering across a sodden field, mud and armour, a tent by the great tree in the distance; fading storm light, a lone tent lamp.

6. **Jael's Choice** — Jael welcomes Sisera with milk and a blanket, and when he sleeps she drives a tent peg through his temple. Stage: the dim interior of a goat-hair tent, a bowl of milk, a figure asleep, the hammer and peg in the firelight; the quietest, darkest stroke of the war.

7. **The Song** — Deborah and Barak sing the victory song — the stars fought from heaven, the river swept the enemy away. Stage: two figures on a rise above the plain, the army camped below in a ring of fires; the song rising over still water; the first clean light after the storm.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `fabric_weave` | Woven Linen (Fabric) | Sisera Flees; Jael's Choice |
| `wood_oak` | Oak Plank (Wood) | Under the Palm; Sisera Flees |
| `wall_brick` | Brick Wall (Structure) | The Storm |
| `stone` | Stone (Structure) | Under the Palm; The Storm; Jael's Choice |
| `grass` | Grass (Foliage) | Under the Palm; The Summons; Gather at Tabor; The Storm; Sisera Flees |
| `water_fast` | Fast Water (Water) | The Storm; Sisera Flees; The Song |

