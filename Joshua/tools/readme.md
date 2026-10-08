# Joshua — Creation Tools

Asset-creation tools for the **Joshua** story (Joshua 1–24). Every tool is a
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

1. **Joshua** — bare-headed, short hair, a short beard, wearing scale-patterned military lorica, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Caleb** — a battle helmet, shaved sides, a short beard, wearing scale-patterned military lorica, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Rahab** — a royal diadem, crown braids, a short beard, wearing fine-linen court dress, in #77414b over #d0aa78, with #c89749 accents.
4. **Achan** — a skullcap, shoulder-length waves, a short beard, wearing basket-weave work tunic, in #53613a over #c2a36b, with #b99045 accents.
5. **Eleazar** — a turban, a receding hairline, a short beard, wearing fine-linen priestly ephod, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Israelite Scout** — a battle helmet, shaved sides, a short beard, wearing scale-patterned military lorica, in #875b34 over #c1a178, with #d0a34c accents.
7. **Gibeonite** — a shepherd's headwrap, shaved sides, a short beard, wearing woven-linen desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
8. **Tribal Leader** — a wrapped scarf, flowing hair, a short beard, wearing fine-linen work tunic, in #365f67 over #b78d58, with #d3ad53 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **Be Strong** — The Lord commissions Joshua: be strong and courageous, for the Lord your God is with you wherever you go. Stage: the plains of Moab at dawn, Moses gone, Joshua standing at the edge of the river, the people behind him; a new leader, a long road, the light coming up.

2. **Rahab and the Spies** — Two spies are hidden by Rahab the prostitute on the wall of Jericho, and she marks the scarlet cord in the window. Stage: a city wall at night, a rooftop with flax, two men in the dark, a scarlet cord at the window; the sound of a closing gate, a bargain of faith.

3. **Crossing Jordan** — The priests carry the ark into the Jordan, the waters stop, and the people cross on dry ground; twelve stones are taken from the riverbed. Stage: the river in flood, the ark in the water, the people crossing, the waters piled up; morning light, the first stones of a memorial.

4. **Jericho** — The people march around the city once a day for six days, and seven times on the seventh, and the walls fall. Stage: a walled city at dawn, a silent people marching, priests with rams' horns, the walls crumbling; dust, a shout, a city laid open.

5. **Achan's Hidden Goods** — Achan hides a Babylonian garment and silver from the spoil, and the loss at Ai is traced to him. Stage: a camp at dusk, a tent with a hidden seam, a man and his family among the stones; a search in the dark, a fire rising, a community's grief.

6. **Ai** — Joshua sets an ambush and takes Ai, and the people of Ai are taken captive. Stage: a ruined hill at dawn, a retreating force, an ambush in the fields, the city burning; smoke over a valley, a battle learned the hard way.

7. **The Gibeonites** — The Gibeonites come in worn clothes and dry bread, pretending to be from afar, and a covenant is made. Stage: a camp at noon, dusty travellers with patched sandals and dry bread, a treaty sealed; a leader's oath, a lesson in haste.

8. **The Long Campaign** — Five kings of the Amorites are defeated at Gibeon, and Joshua asks the sun to stand still over Gibeon. Stage: a plain at high noon, a battle in the open, the sun hanging in the sky, a hailstorm on the fleeing kings; the longest day of the year.

9. **Allot the Land** — The land is divided among the tribes at Shiloh, with Caleb's Hebron and the cities of refuge marked out. Stage: a great assembly at Shiloh, a map of boundaries, families lifting their inheritance; a tent of meeting, the land measured and given.

10. **Choose This Day** — Joshua gathers the people at Shechem and says: choose this day whom you will serve, but as for me and my house, we will serve the Lord. Stage: a great stone under the oaks of Shechem, an old man speaking, the people answering; a covenant renewed, the sun setting on a lifetime.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `stone` | Stone (Structure) | Rahab and the Spies; Crossing Jordan; Jericho; Achan's Hidden Goods; Choose This Day |
| `wall_brick` | Brick Wall (Structure) | Rahab and the Spies; Jericho |
| `desert_sand` | Wilderness Sand (Moses) | Be Strong; Jericho; The Gibeonites; The Long Campaign |
| `water_fast` | Fast Water (Water) | Be Strong; Crossing Jordan; Achan's Hidden Goods; The Gibeonites; The Long Campaign |
| `fabric_weave` | Woven Linen (Fabric) | Achan's Hidden Goods; The Gibeonites; Allot the Land |
| `wood_dark` | Dark Timber (Wood) | Rahab and the Spies; Crossing Jordan; Achan's Hidden Goods; Allot the Land |

