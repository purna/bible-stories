# Noah — Story Game Plan

## North star

Will faithful care persist through long preparation, crisis, and waiting? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | The Warning | Accept the Ark blueprint. | `listen-respond` | `listen_respond_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Blueprint | Measure the hull to the given proportions. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | The Long Build | Gather timber, fit planks, and seal with pitch. | `fit-pieces` | `fit_pieces_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | The Gathering | Pair animals and stock each pen. | `look-closely` | `build_the_ark_9x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | The Door Shuts | Finish the final checks and surrender control. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Forty Days | Feed, calm, and clean animal pens during the storm. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Long Wait | Send raven and doves at the right intervals. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Dry Ground | Release animals habitat by habitat. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | The Covenant | Build the altar and reveal the rainbow. | `story-builder` | `temple_builder_v1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | The Vineyard | Witness Noah’s failure and choose how the sons respond. | `look-closely` | `look_closely_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./noah-design-source-of-truth.md) | [Music SOT](./noah-music-source-of-truth.md) | [SFX SOT](./noah-sfx-source-of-truth.md) | [Game Plan](./noah-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | The Warning | stack | Accept the Ark blueprint. | Place a moving building piece over a marked foundation; use a wide timing window. |
| 2 | The Blueprint | memory | Measure the hull to the given proportions. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 3 | The Long Build | faith-crafting | Gather timber, fit planks, and seal with pitch. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 4 | The Gathering | catch | Pair animals and stock each pen. | Tap the requested moving story objects; ignore unrelated objects without a penalty. |
| 5 | The Door Shuts | sequence | Finish the final checks and surrender control. | Repeat a short visual signal sequence; add one signal after each round. |
| 6 | Forty Days | route | Feed, calm, and clean animal pens during the storm. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 7 | The Long Wait | crossing | Send raven and doves at the right intervals. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 8 | Dry Ground | packing | Release animals habitat by habitat. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |
| 9 | The Altar & the Covenant | search | Build the altar and reveal the rainbow. | Reveal safe locations using adjacent-count clues; a mistaken choice gives a hint, never an explosion. |
| 10 | The Vineyard | picture | Witness Noah’s failure and choose how the sons respond. | Fill a small picture grid from row and column clues; provide a reveal-one-cell hint. |

### Faith crafting: chapter 3

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Wood, Clay, Reed. Goal: **Ark**.

- Wood + Wood → **Plank**. Two pieces of the same timber.
- Wood + Clay → **Pitch**. Burn timber with earth for a sealant.
- Plank + Plank + Pitch → **Ark**. Beams, sealed within and without.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

Chapter assignments follow the current manifest and canonical story actions.
<!-- faith-games:end -->
