# Abraham — Creation Tools

Asset-creation tools for the **Abraham** story (Genesis 12–22). Every tool is a
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

1. **Abraham** — a shepherd's headwrap, short hair, a short beard, wearing herringbone-woven desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Sarah** — a headscarf, crown braids, clean-shaven, wearing fine-linen traveller's cloak, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Lot** — bare-headed, a short beard, wearing basket-weave traveller's cloak, in #77414b over #d0aa78, with #c89749 accents.
4. **Hagar** — bare-headed, braided hair, clean-shaven, wearing basket-weave work tunic, in #53613a over #c2a36b, with #b99045 accents.
5. **Ishmael** — a hood, a receding hairline, a short beard, wearing dot-patterned tunic, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Isaac** — a shepherd's headwrap, locs, a short beard, wearing basket-weave traveller's cloak, in #875b34 over #c1a178, with #d0a34c accents.
7. **Melchizedek** — a turban, shaved sides, a short beard, wearing fine-linen priestly ephod, in #6f4b32 over #d6b477, with #c99b46 accents.
8. **Abimelech** — a wrapped scarf, flowing hair, a short beard, wearing fine-linen work tunic, in #365f67 over #b78d58, with #d3ad53 accents.
9. **Eliezer** — bare-headed, short hair, a short beard, wearing basket-weave traveller's cloak, in #77414b over #d0aa78, with #c89749 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **The Call** — Abram stands at the edge of Haran as a divine voice summons him toward an unseen land. Stage: a crowded Chaldean crossroads at dawn, clay houses and caravan tracks; Abram, Sarai and their goods mid-departure; long shadows, dust in the air, the road opening empty toward the horizon.

2. **Egypt and Return** — Famine drives Abram into Egypt, where fear leads him to present Sarai as his sister — and Pharaoh's household pays the price until the truth surfaces. Stage: Nile-side palace gates, Egyptian banners and linen, gold light; Abram returning across the wilderness with restitution, contrite and poorer.

3. **Lot Chooses** — Abram and Lot part ways as their herdsmen quarrel; Lot lifts his eyes to the well-watered Jordan plain and takes it. Stage: a wide hilltop overlooking the green Jordan valley and the distant soot of Sodom; Abram generous and calm, Lot eager; midday glare on the plain, shade on the heights.

4. **Rescue of Lot** — Four eastern kings overrun Sodom and take Lot captive; Abram arms his trained servants and pursues by night, routing the invaders and refusing any spoil. Stage: torchlit desert march, dust and silhouettes, a swift dawn battle north of Damascus; Abram refusing the king of Sodom's offer on a moonlit plain.

5. **Covenant Stars** — God promises Abram descendants as numberless as the stars and seals the covenant in fire. Stage: Abram alone outside his tent at midnight, wrapped in a cloak, staring into a sky crowded with stars; a smoking fire pot and blazing torch passing between cut animals; deep indigo, ember orange.

6. **Hagar in Wilderness** — Sarai's Egyptian maid Hagar flees into the desert of Shur, where an angel of the Lord meets her at a spring and promises a son, Ishmael. Stage: a lone palm and hot spring in bleached sand; Hagar seated, startled, water jar at her feet; white heat, trembling mirage light.

7. **The Visitors** — Three men appear by the oaks of Mamre; Abram runs to offer water, bread, curds and a dressed calf, and hears the promise of a son. Stage: a great tent door in noon light, Abram hastening with a bowl, Sarah listening from inside; three figures under a scorched oak; hospitality rendered in clay and linen.

8. **Sodom and Gomorrah** — Abram bargains for the cities and Lot escapes as fire and brimstone fall; Lot's wife looks back and becomes a pillar of salt. Stage: a smoking plain at first light, zoar in a valley below, a faint salt-white silhouette on the ridge; Abram on a height watching the smoke rise like a furnace.

9. **Isaac Is Born** — In old age Sarah bears Isaac — laughter — and the household feasts at his weaning. Stage: a shaded tent interior with woven hangings, a sleeping infant, Sarah's astonished joy; warm lamp light, the sound of celebration carried outside.

10. **Moriah** — God tests Abraham: take Isaac to Moriah and offer him as a burnt offering; at the last moment a ram is caught in the thicket. Stage: a bare stone mountain at dawn, wood stacked on Isaac's back, the altar of unhewn stone, the angel's hand staying the knife; a ram in a nearby thorn bush, cold gold light.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `desert_sand` | Wilderness Sand (Moses) | The Call; Egypt and Return; Lot Chooses; Rescue of Lot; Hagar in Wilderness; Sodom and Gomorrah |
| `stone` | Stone (Structure) | Egypt and Return; Sodom and Gomorrah; Moriah |
| `fabric_weave` | Woven Linen (Fabric) | Egypt and Return; Covenant Stars; The Visitors; Isaac Is Born |
| `wood_oak` | Oak Plank (Wood) | Covenant Stars; Hagar in Wilderness; The Visitors; Moriah |
| `water_still` | Still Water (Water) | Egypt and Return; Lot Chooses; Rescue of Lot; Covenant Stars; Hagar in Wilderness; The Visitors |
| `leaves` | Leaves (Foliage) | The Call; Lot Chooses; Hagar in Wilderness; The Visitors; Isaac Is Born |

