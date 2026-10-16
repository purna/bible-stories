# Elisha — Story Game Plan

## North star

How can everyday acts of mercy reveal faithful power? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | The Mantle | Leave the plough and follow Elijah. | `find-path` | `find_path_6x6.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Jordan | Strike the water and cross. | `find-path` | `path_of_moses.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | The Widow’s Oil | Collect jars and pour without waste. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | The Shunammite Room | Arrange a simple guest room. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | The Child | Climb to the room and persist in care. | `find-path` | `find_path_6x6.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Naaman | Guide the commander through seven Jordan immersions. | `find-path` | `path_of_moses.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Floating Axe | Mark where the borrowed iron fell. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | The Unseen Army | Reveal protection around the frightened servant. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | A Blind Feast | Lead enemies safely to a meal instead of an ambush. | `find-path` | `find_path_18x9.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./elisha-design-source-of-truth.md) | [Music SOT](./elisha-music-source-of-truth.md) | [SFX SOT](./elisha-sfx-source-of-truth.md) | [Game Plan](./elisha-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | The Mantle | memory | Leave the plough and follow Elijah. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 2 | The Jordan | route | Strike the water and cross. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 3 | The Widow’s Oil | faith-crafting | Collect jars and pour without waste. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 4 | The Shunammite Room | order | Arrange a simple guest room. | Slide illustrated tiles into the story order; allow an easy reset and step hint. |
| 5 | The Child | sequence | Climb to the room and persist in care. | Repeat a short visual signal sequence; add one signal after each round. |
| 6 | Naaman | crossing | Guide the commander through seven Jordan immersions. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 7 | The Floating Axe | stack | Mark where the borrowed iron fell. | Place a moving building piece over a marked foundation; use a wide timing window. |
| 8 | The Unseen Army | packing | Reveal protection around the frightened servant. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |
| 9 | A Blind Feast | search | Lead enemies safely to a meal instead of an ambush. | Reveal safe locations using adjacent-count clues; a mistaken choice gives a hint, never an explosion. |

### Faith crafting: chapter 3

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Clay, Oil, Salt. Goal: **Full Jar, Full Jar, Bowl**.

- Clay + Clay → **Jar**. Empty vessels borrowed from neighbours.
- Clay + Salt → **Bowl**. A new bowl with salt.
- Jar + Oil → **Full Jar**. Oil poured until it fills.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

Chapter assignments follow the current manifest and canonical story actions.
<!-- faith-games:end -->
