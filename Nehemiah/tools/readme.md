# Nehemiah — Creation Tools

Asset-creation tools for the **Nehemiah** story (Nehemiah 1–13). Every tool is a
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

1. **Nehemiah** — bare-headed, short hair, a short beard, wearing woven-linen tunic, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Artaxerxes** — a royal diadem, shoulder-length waves, a short beard, wearing dot-patterned royal robes, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Hanani** — a wrapped scarf, a short beard, wearing herringbone-woven desert mantle, in #77414b over #d0aa78, with #c89749 accents.
4. **Sanballat** — a skullcap, shoulder-length waves, a short beard, wearing basket-weave work tunic, in #53613a over #c2a36b, with #b99045 accents.
5. **Tobiah** — a hood, a receding hairline, a short beard, wearing dot-patterned tunic, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Geshem** — bare-headed, locs, a short beard, wearing traveller's cloak, in #875b34 over #c1a178, with #d0a34c accents.
7. **Ezra** — a shepherd's headwrap, shaved sides, a short beard, wearing woven-linen desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
8. **Eliashib** — a wrapped scarf, flowing hair, a short beard, wearing fine-linen work tunic, in #365f67 over #b78d58, with #d3ad53 accents.
9. **Wall Builder** — bare-headed, short hair, a short beard, wearing woven-linen work tunic, in #77414b over #d0aa78, with #c89749 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **Bad News** — Hanani comes from Judah and tells Nehemiah that the wall of Jerusalem is broken and its people are in trouble. Stage: a palace court at Susa in winter, a cupbearer hearing a report, a map of a ruined city; a man turning to prayer, his face in the light.

2. **Before the King** — Nehemiah asks the king for letters and timber, and the king grants what he asks, and he goes to the governors beyond the river. Stage: a royal throne room at noon, a cupbearer standing, a king with his sceptre, a scroll of letters; the favour of a monarch, a journey beginning.

3. **Night Inspection** — Nehemiah rises by night with a few men and inspects the broken walls and gates, telling no one. Stage: a ruined city at midnight, a torch in the rubble, a man on foot by the wall; a broken gate, a pool, a valley of darkness; the plan being made in silence.

4. **Rise and Build** — The people build, each family by its own gate, from the sheep gate to the tower of the ovens. Stage: a city of builders at dawn, a wall rising stone by stone, each family by its section; the sound of hammers, a woman, a goldsmith, a priest, all building.

5. **Sword and Trowel** — The builders work with one hand and hold a sword in the other, and the work is done with the sound of the trumpet. Stage: a wall under construction at noon, a man with a trowel in one hand and a sword in the other, a trumpet on the wall; the work going on under arms.

6. **The Outcry** — The people cry out against the Jewish nobles who charge interest, and Nehemiah charges them to give back the fields and the interest. Stage: a courtyard at midday, a crowd of the poor, a governor listening, a money lender's ledger; the debt being cancelled, a people set free.

7. **Plots and Rumours** — Sanballat and Geshem send messages to lure Nehemiah to the plain of Ono, and he answers: I am doing a great work. Stage: a wall at dusk, a servant with a letter, a governor refusing to come down; a false prophet shut into a room, a wall growing in the light.

8. **The Wall Completed** — The wall is finished in fifty-two days, and the enemies are afraid, knowing the work was done with the help of God. Stage: a finished wall at sunrise, a city gate closed, a man on the wall looking out; the sound of a trumpet, the fear of the neighbours.

9. **The Book Read** — Ezra reads the law from dawn to midday, and the people weep and then feast, for the day is holy. Stage: a great square at noon, a wooden pulpit, a scroll of the law, the people listening, their hands lifted; the word being read, a city learning its own story.

10. **Reform** — Nehemiah reforms the city: the Sabbath is kept, the tithes are brought in, and the people are counted. Stage: a city gate at the close of the day, a guard at the gate on the Sabbath, a storehouse for the tithes, a register of the people; the work of a city being made holy.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `wall_brick` | Brick Wall (Structure) | Bad News; Night Inspection; Rise and Build; Sword and Trowel; Plots and Rumours; The Wall Completed |
| `stone` | Stone (Structure) | Bad News; Night Inspection; Rise and Build; Sword and Trowel; Plots and Rumours; The Wall Completed; Reform |
| `wood_oak` | Oak Plank (Wood) | Before the King; The Book Read |
| `fabric_weave` | Woven Linen (Fabric) | (general texture — all scenes) |
| `hammered_gold` | Tabernacle Gold (Moses) | Bad News; Rise and Build |
| `desert_sand` | Wilderness Sand (Moses) | Plots and Rumours |


---

**Navigation:** [← Source of Truth Overview](../SOURCE-OF-TRUTH-OVERVIEW.md) | [Nehemiah Design SOT](../__docs/nehemiah-design-source-of-truth.md)
