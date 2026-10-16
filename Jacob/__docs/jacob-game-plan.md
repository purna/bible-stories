# Jacob — Story Game Plan

## North star

Can a grasping deceiver become someone who receives blessing without stealing it? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | The Birthright | Weigh hunger against a lasting inheritance. | `look-closely` | `look_closely_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Stolen Blessing | Assemble the disguise, then witness its cost. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Bethel | Build the stone pillar after the ladder dream. | `fit-pieces` | `fit_pieces_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Rachel at the Well | Move the stone and water the flock. | `look-closely` | `sheep_count.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Laban’s Bargain | Track changing wages and wedding promises. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | The Flocks | Sort speckled and spotted animals fairly. | `look-closely` | `sheep_count.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Leaving Haran | Pack the camp before Laban catches up. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | The Night Wrestling | Hold on through the night and receive a new name. | `ready-then-act` | `ready_then_act_multibar_balanced.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | Meeting Esau | Arrange gifts, then step forward unarmed. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Joseph’s Coats | Recognise favouritism forming in the household. | `match-it-up` | `match_it_up_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./jacob-design-source-of-truth.md) | [Music SOT](./jacob-music-source-of-truth.md) | [SFX SOT](./jacob-sfx-source-of-truth.md) | [Game Plan](./jacob-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | The Birthright | memory | Weigh hunger against a lasting inheritance. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 2 | The Stolen Blessing | sequence | Assemble the disguise, then witness its cost. | Repeat a short visual signal sequence; add one signal after each round. |
| 3 | Bethel | faith-crafting | Build the stone pillar after the ladder dream. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 4 | Rachel at the Well | catch | Move the stone and water the flock. | Tap the requested moving story objects; ignore unrelated objects without a penalty. |
| 5 | Laban’s Bargain | route | Track changing wages and wedding promises. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 6 | The Flocks | crossing | Sort speckled and spotted animals fairly. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 7 | Leaving Haran | stack | Pack the camp before Laban catches up. | Place a moving building piece over a marked foundation; use a wide timing window. |
| 8 | The Night Wrestling | packing | Hold on through the night and receive a new name. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |
| 9 | Meeting Esau | order | Arrange gifts, then step forward unarmed. | Slide illustrated tiles into the story order; allow an easy reset and step hint. |
| 10 | Joseph’s Coats | search | Recognise favouritism forming in the household. | Reveal safe locations using adjacent-count clues; a mistaken choice gives a hint, never an explosion. |

### Faith crafting: chapter 3

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Stone, Wood, Flax, Oil. Goal: **Pillar, Staff**.

- Wood + Flax → **Staff**. Timber bound with fibre.
- Stone + Stone + Oil → **Pillar**. Stones set up and anointed.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

Chapter assignments follow the current manifest and canonical story actions.
<!-- faith-games:end -->
