# Samuel — Creation Tools

Asset-creation tools for the **Samuel** story (1 Samuel 1–16). Every tool is a
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

1. **Samuel Child** — a shepherd's headwrap, a short beard, wearing herringbone-woven desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Samuel** — a hood, wavy hair, a short beard, wearing herringbone-woven prophet's mantle, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Hannah** — bare-headed, shoulder-length waves, clean-shaven, wearing herringbone-woven desert mantle, in #77414b over #d0aa78, with #c89749 accents.
4. **Eli** — a turban, shoulder-length waves, a short beard, wearing fine-linen priestly ephod, in #53613a over #c2a36b, with #b99045 accents.
5. **Saul** — a royal diadem, a short beard, wearing fine-linen royal robes, in #67547a over #d8c39b, with #d0ad58 accents.
6. **David Young** — a battle helmet, shaved sides, a short beard, wearing scale-patterned military lorica, in #875b34 over #c1a178, with #d0a34c accents.
7. **Jonathan** — bare-headed, short hair, a short beard, wearing scale-patterned military lorica, in #6f4b32 over #d6b477, with #c99b46 accents.
8. **Jesse** — a wrapped scarf, flowing hair, a short beard, wearing fine-linen work tunic, in #365f67 over #b78d58, with #d3ad53 accents.
9. **Agag** — bare-headed, shaved sides, a short beard, wearing scale-patterned military lorica, in #77414b over #d0aa78, with #c89749 accents.
10. **Israelite Elder** — a hood, wavy hair, a short beard, wearing basket-weave traveller's cloak, in #53613a over #c2a36b, with #b99045 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **The Boy at Shiloh** — Samuel, a child in a linen ephod, serves at the tabernacle before Eli the priest. Stage: the tabernacle court at dawn, a boy in a small ephod, an old priest on a chair by the doorpost; the ark in the dark behind, the lamp not yet gone out.

2. **The Voice at Night** — The Lord calls Samuel in the night; he runs to Eli three times before Eli says: speak, Lord, for your servant is listening. Stage: a dark temple at night, a boy waking, a lamp burning low, an old priest's hand; the fourth call, the answer, the light in the boy's eyes.

3. **A Hard Message** — Eli makes Samuel tell the whole message: the house of Eli will be judged, and no sacrifice can stop it. Stage: a chamber at first light, a boy trembling, an old man listening, a lamp going out; a prophecy delivered with tears.

4. **The Ark Captured** — The Philistines defeat Israel, the ark is taken, and Eli falls from his seat and breaks his neck at the gate. Stage: a battlefield at dusk, a camp in smoke, the ark in enemy hands, an old man falling at the gate; a town wailing, a line of captives.

5. **Ebenezer** — The Philistines return the ark, and Samuel sets a stone between Mizpah and Shen and calls it Ebenezer, saying: thus far the Lord has helped us. Stage: a field at dawn, a great stone being set up, the people gathered, the ark on a new cart; a victory and a memorial, the first light.

6. **A King Demanded** — The elders ask for a king, and Samuel is displeased; the Lord tells him to listen to the people and show them the cost of a king. Stage: a town gate at midday, a crowd of elders, a judge listening, a scroll of the king's rights; a request made, a warning given.

7. **Saul Chosen** — Saul is chosen by lot, and he is found hiding among the baggage, taller than any of the people. Stage: a town square at dawn, a great man being brought from the baggage, a crown of gold, a tall figure among a crowd; the first king of Israel.

8. **Saul's First Victory** — Nahash the Ammonite threatens Jabesh-gilead, and Saul cuts his oxen and sends the pieces through Israel; the people rally and win. Stage: a field of oxen at noon, a yoke of oxen cut in pieces, a trumpet being blown, the people coming up from the fields; a first victory.

9. **The Rejected King** — Saul disobeys at Gilgal and Samuel says: to obey is better than sacrifice, and the kingdom is torn from him. Stage: a battlefield at dusk, a king in torn robes, a prophet with a torn cloak, the sound of the sheep and the cattle; a kingdom ending, a door closing.

10. **David Anointed** — Samuel anoints David the youngest son of Jesse in Bethlehem, and the Spirit of the Lord comes upon him from that day. Stage: a Bethlehem hillside at golden hour, a boy among his brothers, a horn of oil, a shepherd's crook; the last son, the first light on a new king.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `stone` | Stone (Structure) | The Voice at Night; The Ark Captured; Ebenezer; A King Demanded |
| `wood_oak` | Oak Plank (Wood) | The Rejected King |
| `fabric_weave` | Woven Linen (Fabric) | The Boy at Shiloh; The Rejected King |
| `hammered_gold` | Tabernacle Gold (Moses) | Saul Chosen; David Anointed |
| `grass` | Grass (Foliage) | The Ark Captured; Ebenezer; Saul's First Victory; The Rejected King; David Anointed |
| `water_still` | Still Water (Water) | The Ark Captured |

