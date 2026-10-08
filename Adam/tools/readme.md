# Adam — Creation Tools

Asset-creation tools for the **Adam** story (Genesis 1–5). Every tool is a
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

1. **Adam** — bare-headed, short hair, a short beard, wearing woven-linen tunic, in #6f4b32 over #d6b477, with #c99b46 accents.
2. **Eve** — a headscarf, crown braids, clean-shaven, wearing fine-linen traveller's cloak, in #365f67 over #b78d58, with #d3ad53 accents.
3. **Cain** — a wrapped scarf, a short beard, wearing herringbone-woven desert mantle, in #77414b over #d0aa78, with #c89749 accents.
4. **Abel** — a skullcap, shoulder-length waves, a short beard, wearing basket-weave work tunic, in #53613a over #c2a36b, with #b99045 accents.
5. **Serpent** — a hood, a receding hairline, a short beard, wearing dot-patterned tunic, in #67547a over #d8c39b, with #d0ad58 accents.
6. **Seth** — bare-headed, locs, a short beard, wearing traveller's cloak, in #875b34 over #c1a178, with #d0a34c accents.

## Scenes

These are the scene notes from `shot-designer/index.html` and `scene_designer.html`:

1. **Formed from Dust** — The Lord forms the man from the dust of the ground and breathes life into his nostrils. Stage: a mound of dark soil under a first sunrise, the figure rising as breath enters; ochre earth, cool morning blue, the first ribs of light over a newborn world.

2. **The Garden** — God plants Eden in the east and sets the man among every tree pleasant to the eye, with the river dividing into four heads. Stage: a lush riverside garden, pomegranate and fig, gold and green; the man walking among the trees, lion and lamb at the water's edge; soft diffused light through leaves.

3. **Together** — The animals are brought to Adam for naming, and from his side God forms the woman. Stage: a shaded clearing at dusk, creatures gathering in pairs, the man reaching toward the new companion; rose-gold evening light, a sense of completion.

4. **The Boundary** — The man and woman dwell freely in the garden, permitted every fruit except the tree of the knowledge of good and evil. Stage: the garden's heart, one broad tree set apart in a circle of light; the couple walking away from it; abundance everywhere, one still point of restraint.

5. **The Choice** — The serpent, craftier than any beast, questions the command and the woman takes the fruit. Stage: the forbidden tree in shadow, a coiled serpent in the branches, the woman's hand reaching; dappled light turning colder, the first tension in an idyll.

6. **Hiding** — They hear the Lord walking in the garden at the cool of the day and hide among the trees. Stage: tall grasses and fig leaves at evening, two figures crouched, guilty and bare; a searching shaft of light moving through the grove.

7. **East of Eden** — The couple is sent from the garden; cherubim and a flaming sword guard the way to the tree of life. Stage: the garden gate at dawn behind them, a wall of flame and wings before it; the pair walking into a harsher, rockier land; silhouetted against a burning threshold.

8. **Cain and Abel** — The brothers bring offerings — the Lord respects Abel's flock and not Cain's produce, and anger smoulders. Stage: two altars on a bare hill, one heaped with grain, one with lamb's wool and fat; smoke rising, the brothers apart; a cold wind over stubble fields.

9. **The Field** — Cain rises against Abel in the field, and the blood cries from the ground. Stage: an isolated furrowed field under a heavy sky, a fallen figure and a stunned brother; crows gathering; the first murder in muted browns and grey light.

10. **A New Line** — Cain goes out as a wanderer, and Adam and Eve bear Seth to replace Abel; the line of faith begins. Stage: a tent by a river at dusk, a newborn child, Eve's quiet gratitude; distant hills, the first stars, a lamp in the doorway.

## Textures

Textures required for the scenes, generated in Texture Forge (`STORY_TEXTURE_CONFIG`):

| Texture | Material | Used in scenes |
| --- | --- | --- |
| `leaves` | Leaves (Foliage) | Formed from Dust; The Garden; Together; The Boundary; The Choice; Hiding; East of Eden; The Field |
| `grass` | Grass (Foliage) | Formed from Dust; Hiding; Cain and Abel; The Field; A New Line |
| `water_still` | Still Water (Water) | The Garden; The Boundary; Hiding; Cain and Abel; A New Line |
| `stone` | Stone (Structure) | East of Eden; Cain and Abel |
| `wood_oak` | Oak Plank (Wood) | The Garden; The Boundary; The Choice; Hiding; East of Eden |
| `fabric_weave` | Woven Linen (Fabric) | Cain and Abel; A New Line |


---

**Navigation:** [← Source of Truth Overview](../SOURCE-OF-TRUTH-OVERVIEW.md) | [Adam Design SOT](../__docs/adam-design-source-of-truth.md)
