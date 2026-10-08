# Enoch — Creation Tools

Asset-creation tools for the **Enoch** story (Genesis 5:21–24). Every tool is a
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

1. **Enoch** — a shepherd's headwrap, short hair, a short beard, wearing herringbone-woven desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Jared** — a shepherd's headwrap, wavy hair, a short beard, wearing fine-linen traveller's cloak, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Methuselah** — a wrapped scarf, a short beard, wearing herringbone-woven desert mantle, in #77414b over #d0aa78, with #c89749 accents.
4. **Family Member** — a skullcap, shoulder-length waves, a short beard, wearing basket-weave work tunic, in #53613a over #c2a36b, with #b99045 accents.
5. **Neighbour** — bare-headed, a receding hairline, a short beard, wearing woven-linen work tunic, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Traveller** — bare-headed, locs, a short beard, wearing basket-weave work tunic, in #875b34 over #c1a178, with #d0a34c accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **A Family Record** — The generations from Adam are recorded, and Jared fathers Enoch, who walks in a line of long-lived fathers and sons. Stage: a family register in a tent at dusk, names spoken aloud, a child held up; lamplight on a written scroll, the long line of ancestors behind.

2. **The First Walk** — Enoch begins a daily walk — a habit of quiet steps that makes room for the presence of God. Stage: a dawn road through early fields, a lone figure walking, the city behind; cool morning light, birds lifting.

3. **A Son Named Methuselah** — Enoch fathers Methuselah and a home is prepared for the child. Stage: a small house at sunrise, a newborn in swaddling cloth, the father at the door; a lamp lit in the window, a warm quiet room.

4. **Years of Faithfulness** — Three hundred years of small, repeated acts — teaching, tending, giving — with no fanfare. Stage: the changing seasons of a single street: sowing, harvest, rain, repair; the same figure walking the road; light shifting from spring gold to autumn amber.

5. **A Warning** — Enoch prophesies: the Lord comes with ten thousands of his holy ones to judge all. Stage: a crowded market square at midday, a lone voice rising, the crowd turning; the sky darkening at the edges; a still point of dread.

6. **Walking with God** — The record repeats: Enoch walked with God — a companionship of daily faithfulness. Stage: a road at dusk, two figures walking side by side, one visible, one as light; the last light of day on a quiet path.

7. **Taken** — Enoch is not, for God takes him — no grave, no death, only the road that ends in light. Stage: a hilltop road at sunrise, the figure fading into a shining mist; the city below stirring awake; a doorway of light at the horizon.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `grass` | Grass (Foliage) | The First Walk; Taken |
| `stone` | Stone (Structure) | (general texture — all scenes) |
| `wood_oak` | Oak Plank (Wood) | Years of Faithfulness |
| `fabric_weave` | Woven Linen (Fabric) | A Family Record; A Son Named Methuselah |
| `water_still` | Still Water (Water) | Years of Faithfulness |
| `leaves` | Leaves (Foliage) | The First Walk; Years of Faithfulness; Walking with God; Taken |

