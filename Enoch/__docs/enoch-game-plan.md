# Enoch — Story Game Plan

## North star

What does it mean to walk faithfully across an ordinary lifetime? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | A Family Record | Place Enoch correctly in the generations. | `fit-pieces` | `fit_pieces_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The First Walk | Choose a daily route that serves neighbours. | `find-path` | `find_path_9x9.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | A Son Named Methuselah | Prepare the home for a new child. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Years of Faithfulness | Complete repeated small acts without a fame meter. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | A Warning | Deliver a hard truth without cruelty. | `listen-respond` | `listen_respond_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Walking with God | Follow a quiet path as the landscape changes. | `find-path` | `find_path_18x9.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Taken | Let go of the route and enter the final light. | `find-path` | `find_path_6x6.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./enoch-design-source-of-truth.md) | [Music SOT](./enoch-music-source-of-truth.md) | [SFX SOT](./enoch-sfx-source-of-truth.md) | [Game Plan](./enoch-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | A Family Record | memory | Place Enoch correctly in the generations. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 2 | The First Walk | faith-crafting | Choose a daily route that serves neighbours. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 3 | A Son Named Methuselah | sequence | Prepare the home for a new child. | Repeat a short visual signal sequence; add one signal after each round. |
| 4 | Years of Faithfulness | route | Complete repeated small acts without a fame meter. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 5 | A Warning | crossing | Deliver a hard truth without cruelty. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 6 | Walking with God | stack | Follow a quiet path as the landscape changes. | Place a moving building piece over a marked foundation; use a wide timing window. |
| 7 | Taken | packing | Let go of the route and enter the final light. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |

### Faith crafting: chapter 2

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Wood, Flax, Water. Goal: **Staff, Sandals, Waterskin**.

- Wood + Flax → **Staff**. Timber bound with fibre.
- Flax + Flax → **Sandals**. Woven strips for the road.
- Flax + Water → **Waterskin**. Woven fibre that holds water.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

Chapter assignments follow the current manifest and canonical story actions.
<!-- faith-games:end -->
