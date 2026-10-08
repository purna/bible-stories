# Isaiah — Creation Tools

Asset-creation tools for the **Isaiah** story (Isaiah 1–12, 36–40, 53, 65–66). Every tool is a
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

1. **Isaiah** — a shepherd's headwrap, short hair, a short beard, wearing herringbone-woven desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Uzziah** — a royal diadem, shoulder-length waves, a short beard, wearing dot-patterned royal robes, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Ahaz** — a royal diadem, a short beard, wearing fine-linen royal robes, in #77414b over #d0aa78, with #c89749 accents.
4. **Hezekiah** — a royal diadem, shoulder-length waves, a short beard, wearing dot-patterned royal robes, in #53613a over #c2a36b, with #b99045 accents.
5. **Shear Jashub** — a hood, a receding hairline, a short beard, wearing dot-patterned tunic, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Mahershalalhashbaz** — bare-headed, locs, a short beard, wearing traveller's cloak, in #875b34 over #c1a178, with #d0a34c accents.
7. **Seraph** — a shepherd's headwrap, shaved sides, a short beard, wearing woven-linen desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
8. **Royal Envoy** — a wrapped scarf, flowing hair, a short beard, wearing fine-linen work tunic, in #365f67 over #b78d58, with #d3ad53 accents.
9. **Sennacherib** — a skullcap, short hair, a short beard, wearing herringbone-woven tunic, in #77414b over #d0aa78, with #c89749 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **A City in Need** — The Lord indicts a city full of sacrifices but no justice; the hands are full of blood. Stage: a temple courtyard with a heap of offerings, a city behind its wall, a widow and an orphan in the street; a bright altar, a dark street; the same sun on both.

2. **The Holy Throne** — In the year King Uzziah died, Isaiah sees the Lord on a throne, high and lifted up, with seraphim crying holy, holy, holy. Stage: a temple in a vision, the throne filling the hall, a train of fire, six-winged seraphim, an altar coal touching the prophet's lips; blinding, trembling light.

3. **The Vineyard Song** — The Lord sings of a vineyard planted on a fertile hill that yielded wild grapes instead of justice. Stage: a terraced vineyard at harvest, a stone watchtower, a winepress; grapes rotting on the vine; a golden hillside with a sad song over it.

4. **Immanuel Sign** — To faithless Ahaz the prophet gives a sign: the young woman is with child and shall call his name Immanuel — God with us. Stage: a king on a throne at the end of a conduit, a prophet refusing a sign, a child on the road beyond; winter light, the first promise of a birth.

5. **The Assyrian Shadow** — The Assyrian advances like a river, and the surviving stump of Jesse stands as a banner for the peoples. Stage: a great army crossing a plain, a felled tree with a living shoot, a banner raised on a hill; a dark flood of bronze and a single green branch.

6. **Hezekiah's Crisis** — Sennacherib's letters threaten Jerusalem; Hezekiah spreads the letter before the Lord, and the angel strikes the camp. Stage: a royal chamber at night, a letter on a table, the king in prayer; dawn light through the windows, a camp of silent tents beyond the walls.

7. **Comfort My People** — A voice cries: prepare the way of the Lord in the wilderness, every valley shall be exalted. Stage: a desert road being built at dawn, a voice in the waste land, the glory of the Lord to be revealed; a smooth highway rising over the sand.

8. **The Servant** — The servant is despised and pierced for our transgressions, and by his wounds we are healed. Stage: a figure on a lonely road at dusk, shadowed by a crowd, wounds in his hands; a lantern carried in the dark; the quietest, darkest scene of the book.

9. **New Creation** — The Lord promises new heavens and a new earth, where the wolf and lamb feed together and the city needs no sun. Stage: a rebuilt city on a hill, a lion and a lamb at its gate, children in the streets; warm, golden, endless light.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `stone` | Stone (Structure) | A City in Need; The Holy Throne; The Vineyard Song; Hezekiah's Crisis; New Creation |
| `wall_brick` | Brick Wall (Structure) | A City in Need; Hezekiah's Crisis |
| `hammered_gold` | Tabernacle Gold (Moses) | A City in Need; The Vineyard Song; New Creation |
| `fabric_weave` | Woven Linen (Fabric) | Hezekiah's Crisis |
| `desert_sand` | Wilderness Sand (Moses) | The Assyrian Shadow; Comfort My People |
| `water_still` | Still Water (Water) | The Holy Throne; The Assyrian Shadow |

