# Abraham — Story Game Plan

## North star

Will Abraham trust the promise when fulfilment seems impossible? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | The Call | Follow the road markers out of Haran. | `find-path` | `find_path_6x6.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | Egypt and Return | Choose honest repairs after a fearful mistake. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Lot Chooses | Survey the land and give Lot first choice. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Rescue of Lot | Plan a fast night rescue without taking spoil. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Covenant Stars | Trace the promised constellation. | `match-it-up` | `match_it_up_3x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Hagar in the Wilderness | Find water and listen before acting. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Visitors | Prepare hospitality before the guests depart. | `gather-with-care` | `good_samaritan.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Sodom and Gomorrah | Guide Lot’s household away without looking back. | `find-path` | `find_path_18x9_adv.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | Isaac Is Born | Assemble a celebration tent. | `fit-pieces` | `fit_pieces_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Moriah | Climb, gather wood, and respond to the provided ram. | `find-path` | `find_path_9x9.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./abraham-design-source-of-truth.md) | [Music SOT](./abraham-music-source-of-truth.md) | [SFX SOT](./abraham-sfx-source-of-truth.md) | [Game Plan](./abraham-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | The Call | stack | Follow the road markers out of Haran. | Place a moving building piece over a marked foundation; use a wide timing window. |
| 2 | Egypt and Return | memory | Choose honest repairs after a fearful mistake. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 3 | Lot Chooses | sequence | Survey the land and give Lot first choice. | Repeat a short visual signal sequence; add one signal after each round. |
| 4 | Rescue of Lot | packing | Plan a fast night rescue without taking spoil. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |
| 5 | Covenant Stars | picture | Trace the promised constellation. | Fill a small picture grid from row and column clues; provide a reveal-one-cell hint. |
| 6 | Hagar in the Wilderness | route | Find water and listen before acting. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 7 | The Visitors | faith-crafting | Prepare hospitality before the guests depart. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 8 | Sodom and Gomorrah | crossing | Guide Lot’s household away without looking back. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 9 | Isaac Is Born | search | Assemble a celebration tent. | Reveal safe locations using adjacent-count clues; a mistaken choice gives a hint, never an explosion. |
| 10 | Moriah | order | Climb, gather wood, and respond to the provided ram. | Slide illustrated tiles into the story order; allow an easy reset and step hint. |

### Faith crafting: chapter 7

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Flax, Wood, Grain, Water. Goal: **Tent, Bread**.

- Flax + Flax → **Rope**. Twist fibre with fibre.
- Rope + Rope + Wood → **Tent**. Cord, cord and a pole.
- Grain + Grain + Water → **Bread**. Ground grain bound with water.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

Chapter assignments follow the current manifest and canonical story actions.
<!-- faith-games:end -->
