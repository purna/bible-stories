# Joseph — Story Game Plan

## North star

Can betrayal be transformed into wise service and reconciliation? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | The Coloured Robe | Assemble the robe and notice the family tension. | `fit-pieces` | `fit_pieces_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | Dreams and the Pit | Order the dreams, then find a path through betrayal. | `match-it-up` | `match_it_up_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Potiphar’s House | Manage the household with integrity. | `keep-balance` | `keep_balance_x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | The Prison | Care for prisoners and interpret two dreams. | `keep-balance` | `keep_balance_x3_v2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Pharaoh’s Dreams | Pair cows and grain with seven-year cycles. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Storehouses | Plan grain reserves across Egypt. | `find-path` | `find_path_18x9.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Brothers Arrive | Test recognition while distributing food. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Benjamin’s Cup | Trace the hidden cup and Judah’s offer. | `match-it-up` | `match_it_up_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | Revealed | Choose the moment Joseph names himself. | `look-closely` | `look_closely_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Goshen | Settle the family and preserve the famine record. | `keep-balance` | `keep_balance_x3_v2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./joseph-design-source-of-truth.md) | [Music SOT](./joseph-music-source-of-truth.md) | [SFX SOT](./joseph-sfx-source-of-truth.md) | [Game Plan](./joseph-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | The Coloured Robe | memory | Assemble the robe and notice the family tension. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 2 | Dreams and the Pit | order | Order the dreams, then find a path through betrayal. | Slide illustrated tiles into the story order; allow an easy reset and step hint. |
| 3 | Potiphar’s House | sequence | Manage the household with integrity. | Repeat a short visual signal sequence; add one signal after each round. |
| 4 | The Prison | route | Care for prisoners and interpret two dreams. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 5 | Pharaoh’s Dreams | catch | Pair cows and grain with seven-year cycles. | Tap the requested moving story objects; ignore unrelated objects without a penalty. |
| 6 | Storehouses | crossing | Plan grain reserves across Egypt. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 7 | The Brothers Arrive | faith-crafting | Test recognition while distributing food. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 8 | Benjamin’s Cup | search | Trace the hidden cup and Judah’s offer. | Reveal safe locations using adjacent-count clues; a mistaken choice gives a hint, never an explosion. |
| 9 | Revealed | stack | Choose the moment Joseph names himself. | Place a moving building piece over a marked foundation; use a wide timing window. |
| 10 | Goshen | packing | Settle the family and preserve the famine record. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |

### Faith crafting: chapter 7

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Grain, Clay, Wood. Goal: **Granary**.

- Clay + Clay → **Jar**. Fire-hardened earth.
- Jar + Jar + Grain → **Granary**. Jars filled and stored against famine.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

Chapter assignments follow the current manifest and canonical story actions.
<!-- faith-games:end -->
