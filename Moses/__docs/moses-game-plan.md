# Moses — Story Game Plan

## North star

Will a rescued people learn to trust the God who leads them through uncertainty? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | The Child in the River | Guide the basket through reeds while Miriam keeps watch. | `find-path` | path_of_moses.html | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Burning Bush | Herd sheep, approach the fire, and answer the call. | `listen-respond` | listen_respond_4x2.html | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Before the Throne | Match signs and warnings to each audience. | `match-it-up` | match_it_up_3x4.html | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Passover Night | Prepare the meal and mark the doorway before departure. | `gather-with-care` | manna_drop.html | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Through the Sea | Keep the people moving along the opened path. | `tap-sequence` | tap_sequence_3x2.html | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Bread in the Wilderness | Gather only enough manna for the day. | `gather-with-care` | manna_drop.html | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Water from Rock and Victory | Find water in the desert and prevail over attackers. | `listen-respond` | listen_respond_3x2.html | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Jethro's Advice and Sinai Arrival | Receive wisdom from Midian and reach the holy mountain. | `tap-sequence` | tap_sequence_4x1.html | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | Sinai: The Covenant Given | Navigate a provision-and-trust journey map. | `find-path` | path_of_moses.html | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | The Golden Calf | Appoint Joshua and identify the land from afar. | `match-it-up` | match_it_up_4x4.html | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 11 | Second Tablets and Tabernacle | Renew the covenant and begin building God's dwelling. | `find-path` | path_of_moses.html | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 12 | The Spies and Rebellion | Explore Canaan and face the consequences of unbelief. | `listen-respond` | listen_respond_4x2.html | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 13 | Wilderness Trials: Water, Serpents, and Balak | Journey through hardship and see God's provision. | `match-it-up` | match_it_up_3x4.html | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 14 | Moses' Final Reviews and Instructions | Prepare the next generation for the promised land. | `gather-with-care` | manna_drop.html | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 15 | Mount Nebo: Viewing the Promised Land | See the fulfillment of God's promise from afar. | `tap-sequence` | tap_sequence_3x2.html | The scene resolves, the scripture reference appears, and Continue unlocks. |
## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./moses-design-source-of-truth.md) | [Music SOT](./moses-music-source-of-truth.md) | [SFX SOT](./moses-sfx-source-of-truth.md) | [Game Plan](./moses-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | The Child in the River | route | Guide the basket through reeds while Miriam keeps watch. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 2 | The Burning Bush | memory | Herd sheep, approach the fire, and answer the call. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 3 | Before the Throne | sequence | Match signs and warnings to each audience. | Repeat a short visual signal sequence; add one signal after each round. |
| 4 | Passover Night | stack | Prepare the meal and mark the doorway before departure. | Place a moving building piece over a marked foundation; use a wide timing window. |
| 5 | Through the Sea | crossing | Keep the people moving along the opened path. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 6 | Bread in the Wilderness | catch | Gather only enough manna for the day. | Tap the requested moving story objects; ignore unrelated objects without a penalty. |
| 7 | Water from the Rock | packing | Find water in the desert and prevail over attackers. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |
| 8 | Jethro's Counsel | search | Receive wisdom from Midian and reach the holy mountain. | Reveal safe locations using adjacent-count clues; a mistaken choice gives a hint, never an explosion. |
| 9 | Thunder on Sinai | picture | Navigate a provision-and-trust journey map. | Fill a small picture grid from row and column clues; provide a reveal-one-cell hint. |
| 10 | The Golden Calf | order | Appoint Joshua and identify the land from afar. | Slide illustrated tiles into the story order; allow an easy reset and step hint. |
| 11 | The Second Tablets | code | Renew the covenant and begin building God's dwelling. | Arrange symbols and use position clues to revise the answer; clues remain visible. |
| 12 | The Spies and Rebellion | aim | Explore Canaan and face the consequences of unbelief. | Set direction and release toward a non-person target; simplify to a tap-to-aim control. |
| 13 | The Long Wilderness | connect | Journey through hardship and see God's provision. | Place tokens to connect a marked route; play a cooperative finite puzzle rather than competitive AI. |
| 14 | Moses' Final Words | faith-crafting | Prepare the next generation for the promised land. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 15 | Mount Nebo | lights | See the fulfillment of God's promise from afar. | Toggle a tile and its neighbours until the marked signal pattern is lit. |

### Faith crafting: chapter 14

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Flax, Wood. Goal: **Curtain, Frame**.

- Flax + Flax → **Cloth**. Weave fibres into cloth.
- Cloth + Cloth → **Curtain**. Join cloth panels.
- Wood + Wood → **Frame**. Fit two boards together.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

Chapter assignments follow the current manifest and canonical story actions.
<!-- faith-games:end -->
