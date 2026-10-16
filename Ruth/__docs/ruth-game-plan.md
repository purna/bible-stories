# Ruth — Story Game Plan

## North star

How can loyal kindness create belonging after loss? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | Leaving Moab | Pack lightly and choose whether to accompany Naomi. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | Your People | Follow the road to Bethlehem together. | `find-path` | `find_path_9x9.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Gleaning | Collect only grain left for gleaners. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Boaz Notices | Deliver water and protection instructions to the workers. | `gather-with-care` | `good_samaritan.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | At the Threshing Floor | Follow Naomi’s plan with restraint and clarity. | `find-path` | `find_path_6x6.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | At the Gate | Arrange witnesses and present the redemption choice. | `look-closely` | `look_closely_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Redeemed | Transfer the sandal and join the households. | `ready-then-act` | `ready_then_act_multibar_balanced.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Obed | Build the family line toward David. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./ruth-design-source-of-truth.md) | [Music SOT](./ruth-music-source-of-truth.md) | [SFX SOT](./ruth-sfx-source-of-truth.md) | [Game Plan](./ruth-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | Leaving Moab | memory | Pack lightly and choose whether to accompany Naomi. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 2 | Your People | sequence | Follow the road to Bethlehem together. | Repeat a short visual signal sequence; add one signal after each round. |
| 3 | Gleaning | faith-crafting | Collect only grain left for gleaners. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 4 | Boaz Notices | catch | Deliver water and protection instructions to the workers. | Tap the requested moving story objects; ignore unrelated objects without a penalty. |
| 5 | Threshing Floor | packing | Follow Naomi’s plan with restraint and clarity. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |
| 6 | At the Gate | order | Arrange witnesses and present the redemption choice. | Slide illustrated tiles into the story order; allow an easy reset and step hint. |
| 7 | Redeemed | route | Transfer the sandal and join the households. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 8 | Obed | stack | Build the family line toward David. | Place a moving building piece over a marked foundation; use a wide timing window. |

### Faith crafting: chapter 3

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Grain, Flax, Water. Goal: **Basket, Bread**.

- Grain + Grain → **Sheaf**. Gathered grain tied up.
- Flax + Flax → **Basket**. Woven reeds to carry the harvest.
- Sheaf + Water → **Bread**. Gleaned grain ground with water.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

Chapter assignments follow the current manifest and canonical story actions.
<!-- faith-games:end -->
