# Esther — Creation Tools

Asset-creation tools for the **Esther** story (Esther 1–9). Every tool is a
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

1. **Esther** — a royal diadem, crown braids, clean-shaven, wearing fine-linen court dress, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Mordecai** — a shepherd's headwrap, wavy hair, a short beard, wearing fine-linen traveller's cloak, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Ahasuerus** — a royal diadem, a short beard, wearing fine-linen royal robes, in #77414b over #d0aa78, with #c89749 accents.
4. **Vashti** — a royal diadem, crown braids, clean-shaven, wearing dot-patterned court dress, in #53613a over #c2a36b, with #b99045 accents.
5. **Haman** — a hood, a receding hairline, a short beard, wearing dot-patterned tunic, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Zeresh** — a royal diadem, crown braids, clean-shaven, wearing dot-patterned court dress, in #875b34 over #c1a178, with #d0a34c accents.
7. **Hathach** — a shepherd's headwrap, shaved sides, a short beard, wearing woven-linen desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
8. **Palace Guard** — a battle helmet, shaved sides, a short beard, wearing scale-patterned military lorica, in #365f67 over #b78d58, with #d3ad53 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **The Banquet** — King Ahasuerus feasts in Susa for a hundred and eighty days, and Queen Vashti refuses his summons. Stage: a Persian palace hall with blue and gold glazed bricks, a thousand couches, wine; the queen withdrawing from the far doorway; torchlight and marble.

2. **A New Queen** — Esther, a Jewish orphan in the care of Mordecai, is taken to the king and wins the crown. Stage: a harem court at dawn, young women in myrrh and perfumes, Esther stepping forward; a crown lifted; rose and gold light.

3. **The Gate Plot** — Mordecai overhears two eunuchs plotting against the king and saves him; the deed is written in the royal record. Stage: the king's gate at midday, a figure in the shadow of a column, scribes at work; a whispered warning; a narrow, tense street.

4. **Haman's Decree** — Haman the Agagite persuades the king to destroy the Jews; the decree rides out to every province. Stage: a great hall, Haman in high honour, the sealed parchment on a table; couriers galloping past a map of the empire; cold shadow and a rising drum of hoofbeats.

5. **For Such a Time** — Mordecai's plea comes to Esther: relief will come from another quarter — and who knows but you have come to the kingdom for such a time? Stage: a courtyard with a purple canopy, Mordecai in sackcloth beyond the gate, Esther in the doorway weighing her life; midday stillness.

6. **The First Banquet** — Esther invites the king and Haman to a banquet and asks them to return the next night — her request still unspoken. Stage: a banquet table in a shaded colonnade, the king with his ring, Haman swollen with pride, the queen veiled and composed; evening lamplight.

7. **The Sleepless Night** — The king cannot sleep, and the record of Mordecai's saved life is read aloud — the night turns. Stage: a sleepless king in a dim throne room, a scribe reading the chronicle; a rooster crowing in the dark; a single lamp turning the room.

8. **The Second Banquet** — Esther names her people and her enemy; Haman pleads on the couch and is hanged on the gallows he built for Mordecai. Stage: the banquet hall again, the queen risen, the king's face in shadow, Haman dragged from the couch; a garden visible through the columns, a gallows in the dark beyond.

9. **A New Decree** — The king gives Haman's house to Esther and Mordecai, and a new decree lets the Jews defend themselves. Stage: the royal gate at dawn, a new seal on a fresh scroll, riders lining up; light breaking over the city; a relieved crowd at the gates.

10. **Purim** — The Jews feast and send gifts, and the days of Purim are fixed — a feast of reversal. Stage: a city street in festival light, tables of food, children in costume, a scroll unrolled; warm lanterns, the sound of celebration.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `mosaic` | Mosaic (Structure) | (general texture — all scenes) |
| `hammered_gold` | Tabernacle Gold (Moses) | The Banquet; A New Queen; The First Banquet |
| `fabric_weave` | Woven Linen (Fabric) | For Such a Time; The First Banquet |
| `fabric_dots` | Polka & Print (Fabric) | (general texture — all scenes) |
| `stone` | Stone (Structure) | The Gate Plot; For Such a Time; A New Decree |
| `wood_dark` | Dark Timber (Wood) | The Sleepless Night; The Second Banquet |


---

**Navigation:** [← Source of Truth Overview](../SOURCE-OF-TRUTH-OVERVIEW.md) | [Esther Design SOT](../__docs/esther-design-source-of-truth.md)
