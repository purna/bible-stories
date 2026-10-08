# Jeremiah — Creation Tools

Asset-creation tools for the **Jeremiah** story (Jeremiah 1–39, 31–32). Every tool is a
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

1. **Jeremiah** — a shepherd's headwrap, short hair, a short beard, wearing herringbone-woven desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Josiah** — a royal diadem, shoulder-length waves, a short beard, wearing dot-patterned royal robes, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Jehoiakim** — a royal diadem, a short beard, wearing fine-linen royal robes, in #77414b over #d0aa78, with #c89749 accents.
4. **Zedekiah** — a royal diadem, shoulder-length waves, a short beard, wearing dot-patterned royal robes, in #53613a over #c2a36b, with #b99045 accents.
5. **Baruch** — a hood, a receding hairline, a short beard, wearing dot-patterned tunic, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Ebed Melech** — bare-headed, locs, a short beard, wearing traveller's cloak, in #875b34 over #c1a178, with #d0a34c accents.
7. **Hananiah** — a shepherd's headwrap, shaved sides, a short beard, wearing woven-linen desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
8. **Temple Priest** — a turban, flowing hair, a short beard, wearing fine-linen priestly ephod, in #365f67 over #b78d58, with #d3ad53 accents.
9. **Babylonian Guard** — bare-headed, shaved sides, a short beard, wearing scale-patterned military lorica, in #77414b over #d0aa78, with #c89749 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **The Call** — The Lord touches the prophet's mouth and says: I have put my words in your mouth, to pluck up and to break down, to build and to plant. Stage: a young man at a village gate at dawn, a hand of light at his mouth, a branch of an almond tree nearby; a thin morning, a heavy commission.

2. **The Almond Branch** — The Lord shows a rod of an almond — the first to wake — to show that He watches over His word to perform it. Stage: a branch with pink blossoms in winter light, a hand holding it out, the prophet's eyes; the first blossom of the year against a cold sky.

3. **At the Temple Gate** — The Lord tells Jeremiah to stand at the temple gate and cry: trust not in the temple itself; do justice, hear the widow's plea. Stage: a temple gate at midday, a lone voice in a busy court, the poor and the blind at the steps; the stone of the temple and the people at its feet.

4. **The Scroll** — Baruch writes Jeremiah's words on a scroll; the king cuts it with a knife and burns it, column by column, and it is written again. Stage: a chamber by the fire, a scribe's reed and ink, a scroll being read aloud, a king's knife shearing it, the fire rising; the book being born again.

5. **The Potter** — The Lord sets the prophet by the potter's house: as clay in the potter's hand, so are you; the vessel is marred and remade. Stage: a potter's wheel turning in a courtyard, wet clay on the wheel, a vessel failing and returning to a lump; earthy colours, patient hands.

6. **The Yoke** — The Lord tells Jeremiah to make a yoke of leather and wood and wear it; Hananiah breaks the yoke and the prophet says the Lord will make yokes of iron. Stage: a market square at noon, a wooden yoke on a prophet's shoulders, a false prophet snapping it, an iron yoke in the shadow; a hot day, a cold word.

7. **The Cistern** — The officials cast Jeremiah into the cistern of Malchiah, in the court of the guard, and Ebed-melech the Cushite lifts him out with rags and ropes. Stage: a dark cistern with mud and water at the bottom, ropes and old clothes lowered from above; a rescuer's hand in the dark; the king's court in the light above.

8. **Buy the Field** — In the besieged city Jeremiah buys a field at Anathoth and seals the deed, for the Lord promises houses and fields will again be bought. Stage: a walled city under siege at dusk, a deed being sealed and buried in an earthen jar, a field beyond the walls; a candle in a siege lamp.

9. **The Fall of Jerusalem** — The city falls after a long siege; the king's sons are slain, the temple is burned, and the people are taken into exile. Stage: smoke over the city, a wall breached, a king fleeing by night, a fire on the temple hill; the last light of a long night.

10. **Lament and Hope** — The Lord promises a new covenant written on the heart, and a voice in Ramah is comforted: your work shall be rewarded. Stage: a woman weeping by a tent at dawn, the prophet pointing to a returning exodus, a green shoot in a ruined field; the first light of consolation.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `wall_brick` | Brick Wall (Structure) | Buy the Field; The Fall of Jerusalem |
| `stone` | Stone (Structure) | The Call; At the Temple Gate; Buy the Field; The Fall of Jerusalem |
| `wood_dark` | Dark Timber (Wood) | The Call; The Yoke; The Cistern |
| `fabric_weave` | Woven Linen (Fabric) | The Cistern; Lament and Hope |
| `desert_sand` | Wilderness Sand (Moses) | (general texture — all scenes) |
| `water_still` | Still Water (Water) | The Cistern; Buy the Field |

