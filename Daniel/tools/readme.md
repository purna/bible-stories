# Daniel — Creation Tools

Asset-creation tools for the **Daniel** story (Daniel 1–12). Every tool is a
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

1. **Daniel Young** — a shepherd's headwrap, a short beard, wearing herringbone-woven desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Daniel** — a hood, wavy hair, a short beard, wearing herringbone-woven prophet's mantle, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Hananiah** — a wrapped scarf, a short beard, wearing herringbone-woven desert mantle, in #77414b over #d0aa78, with #c89749 accents.
4. **Mishael** — a skullcap, shoulder-length waves, a short beard, wearing basket-weave work tunic, in #53613a over #c2a36b, with #b99045 accents.
5. **Azariah** — a hood, a receding hairline, a short beard, wearing dot-patterned tunic, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Nebuchadnezzar** — a royal diadem, shoulder-length waves, a short beard, wearing dot-patterned royal robes, in #875b34 over #c1a178, with #d0a34c accents.
7. **Belshazzar** — a royal diadem, a short beard, wearing fine-linen royal robes, in #6f4b32 over #d6b477, with #c99b46 accents.
8. **Darius** — a royal diadem, shoulder-length waves, a short beard, wearing dot-patterned royal robes, in #365f67 over #b78d58, with #d3ad53 accents.
9. **Court Official** — a skullcap, short hair, a short beard, wearing herringbone-woven tunic, in #77414b over #d0aa78, with #c89749 accents.
10. **Accusers** — a hood, wavy hair, a short beard, wearing basket-weave traveller's cloak, in #53613a over #c2a36b, with #b99045 accents.
11. **Angel** — bare-headed, a short beard, wearing dot-patterned desert mantle, in #67547a over #d8c39b, with #d0ad58 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **Exile and the Table** — Daniel and his friends, carried to Babylon, refuse the king's food and ask for ten days of vegetables and water. Stage: a Babylonian court cafeteria in torchlight, trays of rich food beside a humble plate of pulses; four resolute youths; jewelled walls, shadowed arcades.

2. **The Great Statue** — Nebuchadnezzar dreams of a colossal statue — gold head, silver chest, bronze belly, iron legs, feet of clay — shattered by a stone that becomes a mountain. Stage: the dream image towering in a night sky over Babylon, metals graded top to bottom, a stone striking the feet; cold moonlight and a blast of light as it falls.

3. **The Furnace** — Shadrach, Meshach and Abednego are bound and cast into the blazing furnace, where a fourth figure like a son of the gods walks with them. Stage: a roaring furnace mouth on a Babylonian plain, soldiers flinging bound youths into white heat; inside, four figures unharmed; furnace orange, king and court watching from shaded terraces.

4. **The Proud King** — Nebuchadnezzar is driven from human society, eating grass like an ox until his reason returns. Stage: a royal garden gone wild, the king grown long-haired and wild-eyed among stalks and dew; gold and madness fading to humble green; a shaft of light as his sanity is restored.

5. **Writing on the Wall** — At Belshazzar's feast a hand writes on the plaster: mene, mene, tekel, upharsin — and Daniel reads the doom. Stage: a thousand-guest banquet hall, gold vessels looted from Jerusalem, candlelight and a ghostly disembodied hand tracing glowing letters on the wall; terror among the revellers.

6. **The Lions' Den** — Daniel is thrown into the lions' den for praying to his God; the lions are shut with him and an angel shuts their mouths. Stage: a stone pit under a pale dawn, lions pacing around an unharmed figure in prayer; the king hurrying at first light; cold stone, warm hope.

7. **Four Beasts** — Daniel sees the sea churned by four beasts — lion, bear, leopard, and a fourth with iron teeth and ten horns — before the Ancient of Days takes his throne. Stage: a stormy apocalyptic sea, beasts rising from foam, thrones of fire set in a court of millions; terrifying grandeur in ash and gold.

8. **The Ram and Goat** — The ram with two horns and the swift goat with one horn clash; the goat's horn breaks into four, and a little horn grows proud. Stage: a riverside plain at dusk, a two-horned ram charging, a goat hurtling from the west with a great horn; the horn splintering into four shards; purple and dusk light.

9. **Seventy Weeks** — The angel Gabriel explains seventy weeks decreed for the people and the holy city, until the Anointed One is cut off. Stage: an angel standing on a riverbank at twilight, scroll and measuring line in hand, the distant city on its hill; patient gold light, a sense of long promise.

10. **Final Vision** — Daniel sees the end: the Ancient of Days, the Son of Man given everlasting dominion, and the book of destiny. Stage: a river of fire and a heavenly court, a figure like a son of man approaching on the clouds; sealed scrolls opening; blinding white and deep ultramarine.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `wall_brick` | Brick Wall (Structure) | Exile and the Table; Writing on the Wall |
| `mosaic` | Mosaic (Structure) | (general texture — all scenes) |
| `hammered_gold` | Tabernacle Gold (Moses) | Exile and the Table; The Great Statue; The Furnace; The Proud King; Writing on the Wall; Four Beasts; The Ram and Goat; Seventy Weeks |
| `stone` | Stone (Structure) | Exile and the Table; The Great Statue; Writing on the Wall; The Lions' Den |
| `fabric_weave` | Woven Linen (Fabric) | (general texture — all scenes) |
| `water_still` | Still Water (Water) | Exile and the Table; Four Beasts; The Ram and Goat; Seventy Weeks; Final Vision |

