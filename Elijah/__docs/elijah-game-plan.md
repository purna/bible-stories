# Elijah — Story Game Plan

## North star

Can zeal mature into listening, mercy, and faithful succession? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | The Drought | Follow ravens to daily bread by the brook. | `find-path` | `find_path_6x6.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Widow’s Jar | Measure flour and oil without exhausting either. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | The Child Restored | Carry the child upstairs and persist in prayer. | `listen-respond` | `listen_respond_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Mount Carmel | Repair the altar with twelve stones. | `story-builder` | `temple_builder.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | The Rain Returns | Spot the small cloud and race from the storm. | `look-closely` | `look_closely_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Under the Broom Tree | Rest, eat, and accept care before travelling. | `keep-balance` | `keep_balance_x3_v2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Quiet Voice | Distinguish wind, quake, fire, and quiet. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Naboth’s Vineyard | Expose the false testimony behind the seizure. | `look-closely` | `look_closely_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | Chariots of Fire | Cross the Jordan and pass the mantle to Elisha. | `find-path` | `path_of_moses.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./elijah-design-source-of-truth.md) | [Music SOT](./elijah-music-source-of-truth.md) | [SFX SOT](./elijah-sfx-source-of-truth.md) | [Game Plan](./elijah-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | The Drought | memory | Complete a visual task based on the “The Drought” comic panels. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 2 | The Widow of Zarephath | faith-crafting | Complete a visual task based on the “The Widow of Zarephath” comic panels. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 3 | Mount Carmel | sequence | Complete a visual task based on the “Mount Carmel” comic panels. | Repeat a short visual signal sequence; add one signal after each round. |
| 4 | The Flight to Horeb | route | Complete a visual task based on the “The Flight to Horeb” comic panels. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 5 | The Still, Small Voice | crossing | Complete a visual task based on the “The Still, Small Voice” comic panels. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 6 | Naboth's Vineyard | stack | Complete a visual task based on the “Naboth's Vineyard” comic panels. | Place a moving building piece over a marked foundation; use a wide timing window. |
| 7 | The Chariot of Fire | packing | Complete a visual task based on the “The Chariot of Fire” comic panels. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |

### Faith crafting: chapter 2

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Stone, Wood, Grain, Water. Goal: **Altar, Cake**.

- Stone + Stone + Wood → **Altar**. Stones stacked with timber.
- Grain + Water → **Cake**. The widow's last flour and oil.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

**Narrative reconciliation needed:** the live chapter count differs from the canonical plan or has no canonical entry. This table follows the current manifest; review story actions against the actual panels before coding.
<!-- faith-games:end -->
