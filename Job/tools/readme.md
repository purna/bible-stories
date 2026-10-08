# Job — Creation Tools

Asset-creation tools for the **Job** story (Job 1–42). Every tool is a
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

1. **Job** — a shepherd's headwrap, short hair, a short beard, wearing herringbone-woven desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Job’s Wife** — a hood, crown braids, clean-shaven, wearing herringbone-woven prophet's mantle, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Eliphaz** — a wrapped scarf, a short beard, wearing herringbone-woven desert mantle, in #77414b over #d0aa78, with #c89749 accents.
4. **Bildad** — a skullcap, shoulder-length waves, a short beard, wearing basket-weave work tunic, in #53613a over #c2a36b, with #b99045 accents.
5. **Zophar** — a hood, a receding hairline, a short beard, wearing dot-patterned tunic, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Elihu** — bare-headed, locs, a short beard, wearing traveller's cloak, in #875b34 over #c1a178, with #d0a34c accents.
7. **Messenger** — a shepherd's headwrap, shaved sides, a short beard, wearing woven-linen desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
8. **Young Job** — a hood, a short beard, wearing herringbone-woven prophet's mantle, in #365f67 over #b78d58, with #d3ad53 accents.
9. **Restored Daughter** — bare-headed, a side braid, clean-shaven, wearing fine-linen tunic, in #77414b over #d0aa78, with #c89749 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **A Blameless Life** — Job is blameless and upright, with seven sons, three daughters, and great flocks; he offers burnt offerings for his children. Stage: a rich household at sunrise in the land of Uz, sheep and camels and tents, a father praying for his children; a golden, ordered world.

2. **The Accuser** — In the heavenly court the Lord asks Satan about Job; the adversary asks for permission to test him, and the hand of loss begins. Stage: a cosmic court, a throne of light and a figure in shadow, the earth in miniature below; a single day that will undo everything.

3. **Loss upon Loss** — The messengers come one after another: the oxen, the donkeys, the fire, the wind — and the children. Stage: a ruined threshold at dusk, one messenger after another arriving, a great house going silent; a single figure on the ground, the sky empty of birds.

4. **Seven Days** — Job's three friends sit with him seven days and nights, and no one speaks, for his grief is very great. Stage: a heap of ashes outside a city, four figures seated in silence, the sun crossing the sky above them; a week measured in light and shadow.

5. **Job Speaks** — Job opens his mouth and curses the day of his birth, and calls for the grave to come. Stage: a man on a dunghill at midnight, his body scarred, the first words of a long lament; the stars wheeling overhead; a voice rising into the dark.

6. **The Friends** — Eliphaz, Bildad and Zophar argue: the righteous prosper, the wicked fall — therefore repent, Job. Stage: a desert camp at dawn, three men in flowing robes, a fourth in ashes, the argument turning from comfort to accusation; wind, dust, long shadows.

7. **Elihu** — The young Elihu burns with anger at Job's self-justification and the friends' failure; he speaks of God speaking in dreams and in pain. Stage: a circle of listeners at noon, a young man rising, his cloak bright with indignation; the older men stilled; a still, hot air.

8. **Out of the Whirlwind** — The Lord answers Job out of the whirlwind: where were you when I laid the earth's foundation? Stage: a storm on the horizon, a whirlwind forming, a figure in the dark at its centre; the heavens opening, the earth trembling; a question no one can answer.

9. **Job Responds** — Job answers the Lord: I had heard of you by the hearing of the ear, but now my eye sees you; therefore I repent in dust and ashes. Stage: a man kneeling as the storm breaks, his hand over his mouth, the whirlwind withdrawing; the first rain in years; a quiet, broken peace.

10. **Restoration** — The Lord restores Job's fortunes twofold: flocks, children, daughters of beauty, and a long life. Stage: a household again, tents full of children, camels in the shade, a new generation at the door; evening light and music; a table set for a feast.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `desert_sand` | Wilderness Sand (Moses) | The Friends; Job Responds |
| `stone` | Stone (Structure) | (general texture — all scenes) |
| `fabric_weave` | Woven Linen (Fabric) | A Blameless Life; The Friends; Elihu; Restoration |
| `wood_oak` | Oak Plank (Wood) | Elihu |
| `grass` | Grass (Foliage) | Loss upon Loss; Job Speaks |
| `water_still` | Still Water (Water) | Seven Days; Job Responds |

