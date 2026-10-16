# Joshua — Story Game Plan

## North star

Will courage remain rooted in instruction rather than conquest for its own sake? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | Be Strong | Meditate on the instruction before crossing. | `find-path` | `find_path_6x6.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | Rahab and the Spies | Hide the scouts and mark the scarlet cord. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Crossing Jordan | Carry twelve memorial stones from the riverbed. | `find-path` | `path_of_moses.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Jericho | March the pattern, sound the trumpets, protect Rahab. | `ready-then-act` | `ready_then_act_multibar_balanced.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Achan’s Hidden Goods | Trace the community’s loss to the buried objects. | `match-it-up` | `match_it_up_3x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Ai | Set the ambush without repeating earlier presumption. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Gibeonites | Inspect the worn supplies and face a rushed oath. | `look-closely` | `look_closely_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | The Long Campaign | Resolve territory challenges without spectacle. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | Allot the Land | Distribute inheritance among tribes. | `keep-balance` | `keep_balance_x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Choose This Day | Place household stones beside the covenant witness. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./joshua-design-source-of-truth.md) | [Music SOT](./joshua-music-source-of-truth.md) | [SFX SOT](./joshua-sfx-source-of-truth.md) | [Game Plan](./joshua-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | Be Strong | route | Meditate on the instruction before crossing. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 2 | Rahab and the Spies | stack | Hide the scouts and mark the scarlet cord. | Place a moving building piece over a marked foundation; use a wide timing window. |
| 3 | Crossing Jordan | faith-crafting | Carry twelve memorial stones from the riverbed. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 4 | Jericho | sequence | March the pattern, sound the trumpets, protect Rahab. | Repeat a short visual signal sequence; add one signal after each round. |
| 5 | Achan’s Hidden Goods | search | Trace the community’s loss to the buried objects. | Reveal safe locations using adjacent-count clues; a mistaken choice gives a hint, never an explosion. |
| 6 | Ai | memory | Set the ambush without repeating earlier presumption. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 7 | The Gibeonites | crossing | Inspect the worn supplies and face a rushed oath. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 8 | The Long Campaign | packing | Resolve territory challenges without spectacle. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |
| 9 | Allot the Land | picture | Distribute inheritance among tribes. | Fill a small picture grid from row and column clues; provide a reveal-one-cell hint. |
| 10 | Choose This Day | order | Place household stones beside the covenant witness. | Slide illustrated tiles into the story order; allow an easy reset and step hint. |

### Faith crafting: chapter 3

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Clay, Wood, Stone. Goal: **Horn, Horn, Memorial**.

- Clay + Clay + Wood → **Horn**. Earth shaped around a wooden core.
- Stone + Stone + Stone → **Memorial**. Three stones from the river.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

Chapter assignments follow the current manifest and canonical story actions.
<!-- faith-games:end -->
