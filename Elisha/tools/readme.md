# Elisha — Creation Tools

Asset-creation tools for the **Elisha** story (1 Kings 19; 2 Kings 2–7). Every tool is a
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

1. **Elisha** — a shepherd's headwrap, short hair, a short beard, wearing herringbone-woven desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Elijah** — a hood, wavy hair, a short beard, wearing herringbone-woven prophet's mantle, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Widow** — a veil, shoulder-length waves, clean-shaven, wearing woven-linen work tunic, in #77414b over #d0aa78, with #c89749 accents.
4. **Shunammite Woman** — bare-headed, braided hair, clean-shaven, wearing basket-weave work tunic, in #53613a over #c2a36b, with #b99045 accents.
5. **Gehazi** — a hood, a receding hairline, a short beard, wearing dot-patterned tunic, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Naaman** — bare-headed, locs, a short beard, wearing traveller's cloak, in #875b34 over #c1a178, with #d0a34c accents.
7. **Servant Girl** — a wrapped scarf, a side braid, clean-shaven, wearing woven-linen work tunic, in #6f4b32 over #d6b477, with #c99b46 accents.
8. **King Of Israel** — a royal diadem, shoulder-length waves, a short beard, wearing dot-patterned royal robes, in #365f67 over #b78d58, with #d3ad53 accents.
9. **Syrian Commander** — bare-headed, shaved sides, a short beard, wearing scale-patterned military lorica, in #77414b over #d0aa78, with #c89749 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **The Mantle** — Elijah finds Elisha ploughing with twelve yoke of oxen; Elisha slaughters his oxen and follows, leaving the plough behind. Stage: a wide field at dawn, twelve oxen, a ploughman pausing mid-furrow; the old prophet's mantle cast over him; golden stubble and long shadows.

2. **The Jordan** — Elijah strikes the water with his mantle and the two cross on dry ground; Elisha inherits a double portion. Stage: the Jordan in flood, the river parting, two figures walking on the riverbed; churned water walls; early light.

3. **The Widow's Oil** — A widow of the sons of the prophets pours her little oil into borrowed jars until the oil fills every vessel and saves her sons from slavery. Stage: a poor cottage interior, jars lined up row on row, the oil streaming from one small flask; warm interior light, the widow's astonished hands.

4. **The Shunammite Room** — A great woman of Shunhem builds a chamber for Elisha with a bed, table, stool and lampstand. Stage: a rooftop guest chamber, whitewashed walls, a simple bed and lamp, the woman looking up as the prophet arrives; noon light through a lattice.

5. **The Child** — The Shunammite's son collapses in the field; she carries him to the room and lays him on Elisha's bed, and the prophet restores him. Stage: a field at midday, a child limp in his mother's arms, then the room with the boy breathing again; urgency, then quiet light.

6. **Naaman** — Naaman, commander of Aram, comes with horses and chariots to be healed of leprosy; Elisha sends him to wash seven times in the Jordan. Stage: a riverbank with a retinue of chariots and horsemen, the proud commander wading to his waist, seven immersions; water gleaming, pride yielding.

7. **The Floating Axe** — A borrowed axe head sinks in the Jordan; Elisha cuts a stick, throws it in, and the iron swims. Stage: a river bend at dawn, an axe glinting on the bed, a stick tossed from the bank, the iron rising; cool water, a small miracle.

8. **The Unseen Army** — The king of Aram surrounds Dothan; Elisha prays and the servant sees a mountain full of horses and chariots of fire. Stage: a dawn plain, a city under siege, a servant's eyes opening to an invisible army blazing on the hills; firelight on the clouds.

9. **A Blind Feast** — Elisha strikes the Aramean raiders with blindness, leads them into Samaria, and opens their eyes at a feast before sending them home. Stage: a great hall at night, lanterns, blindfolded warriors led to a table, then seeing in amazement; warm feast light, an astonishing mercy.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `water_still` | Still Water (Water) | The Jordan; The Shunammite Room; Naaman; The Floating Axe |
| `water_fast` | Fast Water (Water) | The Jordan; Naaman; The Floating Axe |
| `wood_oak` | Oak Plank (Wood) | (general texture — all scenes) |
| `stone` | Stone (Structure) | The Jordan; The Shunammite Room; The Unseen Army |
| `fabric_weave` | Woven Linen (Fabric) | The Mantle; The Jordan |
| `leaves` | Leaves (Foliage) | The Jordan |


---

**Navigation:** [← Source of Truth Overview](../SOURCE-OF-TRUTH-OVERVIEW.md) | [Elisha Design SOT](../__docs/elisha-design-source-of-truth.md)
