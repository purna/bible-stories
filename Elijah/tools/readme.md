# Eiljah — Creation Tools

Asset-creation tools for the **Eiljah** story (1 Kings 17–19, 21; 2 Kings 2). Every tool is a
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

1. **Elijah** — a shepherd's headwrap, short hair, a short beard, wearing herringbone-woven desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Ahab** — a royal diadem, shoulder-length waves, a short beard, wearing dot-patterned royal robes, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Jezebel** — a royal diadem, crown braids, clean-shaven, wearing fine-linen court dress, in #77414b over #d0aa78, with #c89749 accents.
4. **Widow Of Zarephath** — a veil, braided hair, clean-shaven, wearing woven-linen work tunic, in #53613a over #c2a36b, with #b99045 accents.
5. **Widows Son** — a veil, a side braid, clean-shaven, wearing woven-linen work tunic, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Obadiah** — bare-headed, locs, a short beard, wearing traveller's cloak, in #875b34 over #c1a178, with #d0a34c accents.
7. **Prophet Of Baal** — a shepherd's headwrap, shaved sides, a short beard, wearing woven-linen desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
8. **Elisha** — a hood, flowing hair, a short beard, wearing herringbone-woven prophet's mantle, in #365f67 over #b78d58, with #d3ad53 accents.
9. **Naboth** — a skullcap, short hair, a short beard, wearing herringbone-woven tunic, in #77414b over #d0aa78, with #c89749 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **The Drought** — Elijah the Tishbite proclaims a drought and is sent to the brook Cherith, where ravens bring him bread and meat. Stage: a cracked brook bed in a limestone wadi, a lone prophet in patched cloth, ravens landing with crusts; dust, heat shimmer, a dry riverbed.

2. **The Widow's Jar** — At Zarephath a widow shares her last flour and oil, and Elijah keeps her jar and bowl from emptying through the drought. Stage: a tiny Phoenician kitchen, a handful of flour, a cruse of oil, a boy gathering sticks; a miracle of measure in a windowless room, one lamp.

3. **The Child Restored** — The widow's son falls ill and dies; Elijah carries him upstairs, stretches himself on the boy three times, and prays until life returns. Stage: a rooftop chamber at night, the prophet on the bed, the boy still, then stirring; a single oil lamp, deep shadow, held breath.

4. **Mount Carmel** — Elijah repairs the altar with twelve stones, drenches it with water, and calls down fire while the prophets of Baal cry out in vain. Stage: a ruined altar on a bare mountain headland, twelve stones, water running, a pillar of fire at dusk; the sea below, a crowd of prophets in panic.

5. **The Rain Returns** — Elijah prays seven times, a cloud no bigger than a man's hand rises over the sea, and he runs before Ahab's chariot to Jezreel. Stage: a headland at sunset, a small cloud, the sky darkening, the prophet running with his cloak flying; rain sweeping in, black clouds and gold rifts.

6. **Under the Broom Tree** — Fleeing Jezebel, Elijah collapses under a broom tree and asks to die; an angel wakes him with bread and water. Stage: a scorched wilderness, a lone broom bush, a sleeping figure, a shining messenger kneeling beside him; harsh noon light turning gentle.

7. **The Quiet Voice** — At Horeb the Lord passes in wind, earthquake and fire — and speaks in a sound of sheer silence; Elijah wraps his face in his mantle. Stage: a cave mouth on the mountain, the prophet listening in the dark, the wind outside bending the scrub; an enormous stillness in the frame.

8. **Naboth's Vineyard** — Ahab and Jezebel seize Naboth's ancestral vineyard by false witness, and Elijah confronts the king in the field. Stage: a vineyard on a terraced slope at harvest, a dead man's land being measured, the prophet appearing at the gate; ripe purple grapes, cold shadow.

9. **Chariots of Fire** — Elijah and Elisha cross the Jordan, and a chariot of fire with horses of fire separates them as Elijah goes up in a whirlwind. Stage: the river at dawn, a flaming chariot in a vortex, the mantle falling to the younger prophet; fire reflected on the water, the storm of glory.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `desert_sand` | Wilderness Sand (Moses) | The Drought; Under the Broom Tree |
| `stone` | Stone (Structure) | The Drought; Mount Carmel; The Quiet Voice; Naboth's Vineyard |
| `wood_oak` | Oak Plank (Wood) | The Rain Returns; Under the Broom Tree |
| `water_fast` | Fast Water (Water) | The Drought; The Child Restored; Mount Carmel; The Rain Returns; Under the Broom Tree; Chariots of Fire |
| `leaves` | Leaves (Foliage) | Under the Broom Tree; Naboth's Vineyard |
| `fabric_weave` | Woven Linen (Fabric) | The Drought; The Rain Returns; The Quiet Voice; Chariots of Fire |


---

**Navigation:** [← Source of Truth Overview](../SOURCE-OF-TRUTH-OVERVIEW.md) | [Elijah Design SOT](../__docs/elijah-design-source-of-truth.md)
