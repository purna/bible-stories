# Jacob — Creation Tools

Asset-creation tools for the **Jacob** story (Genesis 25–37). Every tool is a
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

1. **Jacob Young** — bare-headed, a short beard, wearing basket-weave traveller's cloak, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Jacob** — a shepherd's headwrap, wavy hair, a short beard, wearing basket-weave traveller's cloak, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Esau** — bare-headed, a short beard, wearing basket-weave traveller's cloak, in #77414b over #d0aa78, with #c89749 accents.
4. **Isaac** — a shepherd's headwrap, shoulder-length waves, a short beard, wearing basket-weave traveller's cloak, in #53613a over #c2a36b, with #b99045 accents.
5. **Rebekah** — a veil, clean-shaven, wearing dot-patterned tunic, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Laban** — bare-headed, locs, a short beard, wearing traveller's cloak, in #875b34 over #c1a178, with #d0a34c accents.
7. **Leah** — a wrapped scarf, a side braid, clean-shaven, wearing woven-linen desert mantle, in #6f4b32 over #d6b477, with #c99b46 accents.
8. **Rachel** — bare-headed, crown braids, clean-shaven, wearing fine-linen work tunic, in #365f67 over #b78d58, with #d3ad53 accents.
9. **Joseph Child** — bare-headed, a short beard, wearing fine-linen tunic, in #77414b over #d0aa78, with #c89749 accents.
10. **Angel** — a hood, wavy hair, a short beard, wearing basket-weave traveller's cloak, in #53613a over #c2a36b, with #b99045 accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **The Birthright** — Esau comes in exhausted from the field and sells his birthright for a single bowl of lentil stew. Stage: a camp kitchen at midday, a hunter gasping at the door, a pot of red stew steaming, two brothers bargaining; a bright, ordinary moment with a heavy price.

2. **The Stolen Blessing** — Rebekah dresses Jacob in Esau's clothes and goatskins; the blind Isaac feels the hands and blesses the wrong son. Stage: a tent at night, an old blind patriarch reaching out, a trembling younger son, the smell of the field in the garments; a lamp's last light, the blessing spoken.

3. **Bethel** — Jacob flees and sleeps with a stone for a pillow, dreaming of a ladder to heaven with angels ascending and descending. Stage: a night under the open sky, a lone figure on the ground, a great stair of light touching the sky; stars, and the Lord standing above it.

4. **Rachel at the Well** — At Haran Jacob rolls the stone from the well and waters Laban's flock for Rachel, and kisses her and weeps. Stage: a well in a highland pasture at noon, a great stone rolled aside, a shepherdess watering her sheep; a sudden meeting, water and tears.

5. **Laban's Bargain** — Laban deceives Jacob with Leah's veiled marriage, and Jacob serves seven more years for Rachel; the wages change like the weather. Stage: a wedding tent at night with a veil and a sister's face, a contract of years, a flock passing between the brothers-in-law; a lamp, a bargain, a long game.

6. **The Flocks** — Jacob breeds the flocks with peeled branches in the watering troughs, and the speckled and spotted increase. Stage: a river crossing with troughs, striped rods standing in the water, a great flock of goats, some dark, some speckled; morning light on a patient man's wealth.

7. **Leaving Haran** — Jacob flees Laban by night; Rachel hides the teraphim in a saddle and sits on them; the two camps meet on the hill of Gilead. Stage: a night crossing of a river, a caravan of tents and children, a woman hiding an idol; dawn overtaking a pursuit on a stony hill.

8. **The Night Wrestling** — Jacob wrestles a man by the Jabbok until daybreak, and his hip is touched; he is named Israel, for he strove with God. Stage: a riverbank in the dark before dawn, two figures locked, a hip given way, a name changed at sunrise; the first red light on the water.

9. **Meeting Esau** — Jacob sends gifts ahead and bows seven times; Esau runs to meet him, and they weep. Stage: a plain at dawn, a long line of gifts, a brother running with four hundred men; fear turning to a kiss; the sun climbing over a tent camp.

10. **Joseph's Coats** — Joseph is seventeen and his father loves him; the coat of many colours and the dreams of sheaves and stars set the brothers against him. Stage: a sunlit field of wheat, a boy in a long coat among his brothers, a sheaf bowing in a dream; gold stubble, a cold wind of envy.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `stone` | Stone (Structure) | Bethel; Rachel at the Well |
| `desert_sand` | Wilderness Sand (Moses) | Meeting Esau |
| `wood_oak` | Oak Plank (Wood) | The Flocks |
| `fabric_weave` | Woven Linen (Fabric) | The Stolen Blessing; Laban's Bargain; Leaving Haran; Meeting Esau; Joseph's Coats |
| `water_still` | Still Water (Water) | Rachel at the Well; The Flocks; Leaving Haran; The Night Wrestling |
| `grass` | Grass (Foliage) | The Birthright; The Stolen Blessing; Bethel; Rachel at the Well; Leaving Haran; The Night Wrestling; Joseph's Coats |


---

**Navigation:** [← Source of Truth Overview](../SOURCE-OF-TRUTH-OVERVIEW.md) | [Jacob Design SOT](../__docs/jacob-design-source-of-truth.md)
