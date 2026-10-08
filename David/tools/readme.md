# David — Creation Tools

Asset-creation tools for the **David** story (1 Samuel 16 – 1 Kings 2). Every tool is a
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

1. **David Young** — bare-headed, short hair, a short beard, wearing scale-patterned military lorica, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **David** — a royal diadem, shoulder-length waves, a short beard, wearing dot-patterned royal robes, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Samuel** — bare-headed, a short beard, wearing herringbone-woven desert mantle, in #77414b over #d0aa78, with #c89749 accents.
4. **Saul** — a royal diadem, shoulder-length waves, a short beard, wearing dot-patterned royal robes, in #53613a over #c2a36b, with #b99045 accents.
5. **Jonathan** — bare-headed, shaved sides, a short beard, wearing scale-patterned military lorica, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Goliath** — a battle helmet, shaved sides, a short beard, wearing scale-patterned military lorica, in #875b34 over #c1a178, with #d0a34c accents.
7. **Abigail** — a wrapped scarf, a side braid, clean-shaven, wearing woven-linen desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
8. **Michal** — bare-headed, crown braids, clean-shaven, wearing fine-linen work tunic, in #365f67 over #b78d58, with #d3ad53 accents.
9. **Bathsheba** — a veil, shoulder-length waves, clean-shaven, wearing herringbone-woven tunic, in #77414b over #d0aa78, with #c89749 accents.
10. **Nathan** — a shepherd's headwrap, wavy hair, a short beard, wearing herringbone-woven prophet's mantle, in #53613a over #c2a36b, with #b99045 accents.
11. **Absalom** — bare-headed, a short beard, wearing dot-patterned desert mantle, in #67547a over #d8c39b, with #d0ad58 accents.
12. **Solomon** — a royal diadem, shoulder-length waves, a short beard, wearing dot-patterned royal robes, in #875b34 over #c1a178, with #d0a34c accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **Anointed** — Samuel anoints the youngest son of Jesse, a shepherd boy of Bethlehem, while his elder brothers watch in surprise. Stage: a Bethlehem hillside at golden hour, sheep around, oil poured on a ruddy boy's head; a horn of oil, distant town rooftops; warm ochre light.

2. **Goliath** — The Philistine giant struts between the armies; David refuses Saul's armour and steps out with staff, sling and five stones. Stage: the Valley of Elah, two armies on facing ridges, a nine-foot figure in bronze scale, a boy walking steadily toward him; dry heat, dust, a streambed glittering.

3. **Saul's Court** — David plays the lyre for Saul, and the king's torment eases while his jealousy stirs. Stage: a dim throne room at night, a boy with a harp, the king looming on a chair, a spear at his belt; firelight flickering on stone; tension beneath the melody.

4. **Covenant Friends** — Jonathan and David make a covenant, exchanging tokens — the robe, tunic, sword, bow and belt. Stage: a field outside the camp at dawn, two young men kneeling, a prince's robe passing to the shepherd; parted friends on a rising road; pale morning gold.

5. **The Wilderness** — David hides in the wilderness of En Gedi, and when Saul comes to relieve himself in a cave, David cuts off the hem of his robe and refuses to strike. Stage: a sun-baked cliff with dark cave mouths, sheep, a hidden figure watching the king pass; craggy grey-gold rock, shimmering heat.

6. **Abigail** — Abigail rides out with provisions to meet David before Nabal's foolishness becomes bloodshed, and she speaks peace. Stage: a donkey train descending a dry ravine at noon, a wise woman carrying loaves and wine, David's band armed on the ridge; terracotta, dust, and a tense standoff turning to grace.

7. **The Throne** — David is anointed king over all Israel at Hebron and takes Jerusalem, the city of Jebus, for his capital. Stage: a water shaft climbing to the city gate, warriors ascending, the king on a throne of stone on the citadel; olive hills, bronze light, banners.

8. **Bathsheba and Uriah** — From his roof David sees Bathsheba bathing; the deed that follows brings Uriah to the front line and judgment on the house. Stage: a royal rooftop at evening, a distant figure at her bath below, a sealed letter passing between hands; purple dusk, a heavy stillness.

9. **Nathan's Parable** — The prophet Nathan tells the rich man with many sheep who takes the poor man's one ewe lamb — and David condemns himself. Stage: a candlelit chamber, the prophet with a staff, the king listening; two flocks in the background, one rich, one poor; a single lamp and a long silence.

10. **Absalom** — Absalom's long hair catches in the branches of a great tree as his rebellion breaks in the forest of Ephraim; Joab strikes him down. Stage: a dense oak wood in rain, a royal mule at bay, tangled hair in the branches, a spear flash; cold green light, the king waiting on the road.

11. **The Census** — David counts the people and repents; the prophet Gad offers three choices, and a plague stalks Israel until the threshing floor of Araunah. Stage: a nation of tents under a wasting sky, a king on his rooftop in grief, an altar rising on a purchased threshing floor; grey light breaking warm.

12. **Solomon** — David charges Solomon to build the house of the Lord and walks in wisdom; the old king dies and the son reigns. Stage: Jerusalem's hill with a temple site marked out, father and son on a terrace, the kingdom passing; cedar light, a quiet benediction.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `stone` | Stone (Structure) | Goliath; Saul's Court; The Wilderness; The Throne; The Census; Solomon |
| `wood_oak` | Oak Plank (Wood) | Absalom |
| `fabric_weave` | Woven Linen (Fabric) | Covenant Friends; The Wilderness; The Census |
| `water_still` | Still Water (Water) | Abigail; The Throne; Bathsheba and Uriah; Absalom |
| `grass` | Grass (Foliage) | Anointed; Covenant Friends; The Throne; Nathan's Parable; Solomon |


---

**Navigation:** [← Source of Truth Overview](../SOURCE-OF-TRUTH-OVERVIEW.md) | [David Design SOT](../__docs/david-design-source-of-truth.md)
