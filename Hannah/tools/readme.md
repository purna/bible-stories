# Hannah — Creation Tools

Asset-creation tools for the **Hannah** story (1 Samuel 1–2). Every tool is a
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

1. **Hannah** — a shepherd's headwrap, a side braid, clean-shaven, wearing herringbone-woven desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Elkanah** — a shepherd's headwrap, wavy hair, a short beard, wearing fine-linen traveller's cloak, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Peninnah** — a wrapped scarf, shoulder-length waves, clean-shaven, wearing herringbone-woven desert mantle, in #77414b over #d0aa78, with #c89749 accents.
4. **Eli** — a turban, shoulder-length waves, a short beard, wearing fine-linen priestly ephod, in #53613a over #c2a36b, with #b99045 accents.
5. **Samuel Child** — a hood, a short beard, wearing herringbone-woven desert mantle, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Temple Woman** — a headscarf, flowing hair, clean-shaven, wearing traveller's cloak, in #875b34 over #c1a178, with #d0a34c accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **The Journey to Shiloh** — Elkanah's household travels the annual road to worship at Shiloh, where the ark and Eli's sons keep the tabernacle. Stage: a hill country road at dawn, a family with donkeys and provisions, the tabernacle rising on the horizon; morning light, the sound of a travelling household.

2. **At the Table** — At the feast Elkanah gives Hannah a double portion, while Peninnah provokes her for her barrenness. Stage: a long table in the temple court, food and drink, two wives opposite each other; a double portion of meat, a heavy silence; firelight and grief.

3. **Silent Prayer** — Hannah prays without a sound, lips moving only; the vow: a son given back to the Lord. Stage: the tabernacle interior at twilight, a woman kneeling by a post, a lamp between the holy place and the door; the first candle in the dark; no sound in the frame.

4. **Misunderstood** — Eli watches her and thinks she is drunk; she answers, 'No, my lord, I am a woman troubled in spirit.' Stage: the old priest at the entrance, hand on the doorpost, the woman defending her prayer; a narrow doorway, lamplight on two faces.

5. **Remembered** — The family returns home, and Hannah's prayer is remembered; a child is conceived. Stage: a house in the hill country at sunrise, a doorway, a hopeful morning; the road behind and the road ahead; a quiet room being prepared.

6. **The Little Robe** — Each year Hannah weaves a little robe and brings it to Samuel at Shiloh as he grows in the Lord's presence. Stage: a loom at work, a tiny linen robe, the boy in a linen ephod at the tabernacle door; a mother's hands, a child's growing frame; warm, domestic light.

7. **Given Back** — Hannah and Elkanah bring the weaned child to the temple and lend him to the Lord for life. Stage: the tabernacle courtyard at midday, the small boy with his mother, Eli receiving him; a child walking into the holy shadow; a vow made visible.

8. **Hannah's Song** — Hannah sings: the Lord makes poor and makes rich, brings low and lifts up; the Lord's anointed will be exalted. Stage: a woman standing in the temple court, arms lifted, the ark behind her; light on the courtyard stones; a song rising with the morning.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `fabric_weave` | Woven Linen (Fabric) | The Little Robe |
| `stone` | Stone (Structure) | At the Table; Given Back; Hannah's Song |
| `wood_oak` | Oak Plank (Wood) | (general texture — all scenes) |
| `hammered_gold` | Tabernacle Gold (Moses) | The Little Robe; Given Back; Hannah's Song |
| `grass` | Grass (Foliage) | The Journey to Shiloh; Remembered |
| `water_still` | Still Water (Water) | At the Table |


---

**Navigation:** [← Source of Truth Overview](../SOURCE-OF-TRUTH-OVERVIEW.md) | [Hannah Design SOT](../__docs/hannah-design-source-of-truth.md)
