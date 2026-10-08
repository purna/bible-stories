# Ruth — Creation Tools

Asset-creation tools for the **Ruth** story (Ruth 1–4). Every tool is a
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

1. **Ruth** — a veil, a side braid, clean-shaven, wearing woven-linen tunic, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Naomi** — a headscarf, crown braids, clean-shaven, wearing fine-linen traveller's cloak, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Orpah** — a wrapped scarf, shoulder-length waves, clean-shaven, wearing herringbone-woven desert mantle, in #77414b over #d0aa78, with #c89749 accents.
4. **Boaz** — a shepherd's headwrap, shoulder-length waves, a short beard, wearing basket-weave traveller's cloak, in #53613a over #c2a36b, with #b99045 accents.
5. **Kinsman Redeemer** — a hood, a receding hairline, a short beard, wearing dot-patterned tunic, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Field Overseer** — a battle helmet, shaved sides, a short beard, wearing scale-patterned military lorica, in #875b34 over #c1a178, with #d0a34c accents.
7. **Bethlehem Woman** — a wrapped scarf, a side braid, clean-shaven, wearing woven-linen desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
8. **Obed** — a wrapped scarf, flowing hair, a short beard, wearing fine-linen work tunic, in #365f67 over #b78d58, with #d3ad53 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **Leaving Moab** — Naomi, with her daughters-in-law, leaves Moab for Bethlehem, and Orpah turns back; Ruth clings to Naomi and to her people. Stage: a road at dawn, a widow and her two daughters-in-law, the Moabite hills behind; one turning, one continuing; the road to a new land.

2. **Your People** — Ruth says: your people shall be my people, and your God my God; they arrive in Bethlehem at the beginning of the barley harvest. Stage: a small town at the start of the harvest, two women at the gate, the fields green around them; the first light of a new life.

3. **Gleaning** — Ruth gathers behind the reapers in the field of Boaz, and he lets her glean among the sheaves and drink from the water. Stage: a barley field at noon, a reaper's line, a young woman gathering, the owner watching from the shade; grain, kindness, the first meeting.

4. **Boaz Notices** — Boaz speaks to Ruth and tells her to stay with his servants, and praises her for all she has done for Naomi. Stage: a field at evening, a man in the shade of a wall, a woman at his feet; the kindness of a landowner, a blessing being spoken.

5. **At the Threshing Floor** — Ruth goes to the threshing floor at Naomi's word, uncovers Boaz's feet, and asks him to spread his cloak over her. Stage: a threshing floor at night, a heap of grain, a man sleeping in his cloak, a woman at his feet; the quietest, most careful scene of the book.

6. **At the Gate** — Boaz sits at the city gate with the elders, and the nearer kinsman is asked to redeem; he refuses, and Boaz takes Ruth. Stage: a city gate at noon, ten elders in a circle, a sandal passed, a woman at the edge of the meeting; the transaction of a life.

7. **Redeemed** — The people bless Ruth and Boaz, and they are married, and the Lord gives them a son. Stage: a wedding feast at evening, a village in lamps, a couple at the door, a house being prepared; a blessing being spoken.

8. **Obed** — The women say: a son has been born to Naomi, and they name him Obed, the father of Jesse, the father of David. Stage: a house at dawn, a newborn child, a grandmother holding him, the women of the neighbourhood at the door; a line beginning.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `grass` | Grass (Foliage) | Leaving Moab; Your People; Gleaning; Boaz Notices |
| `fabric_weave` | Woven Linen (Fabric) | At the Threshing Floor |
| `wood_oak` | Oak Plank (Wood) | At the Threshing Floor |
| `stone` | Stone (Structure) | Your People; Boaz Notices; At the Gate |
| `water_still` | Still Water (Water) | Gleaning; At the Threshing Floor |
| `leaves` | Leaves (Foliage) | Gleaning; Boaz Notices |


---

**Navigation:** [← Source of Truth Overview](../SOURCE-OF-TRUTH-OVERVIEW.md) | [Ruth Design SOT](../__docs/ruth-design-source-of-truth.md)
