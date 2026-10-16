# David — Story Game Plan

## North star

What does faithful leadership do with power, failure, and repentance? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | Anointed | Identify the overlooked shepherd among Jesse’s sons. | `match-it-up` | `match_it_up_3x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | Goliath | Time a sling throw after refusing heavy armour. | `ready-then-act` | `david_goliath.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Saul’s Court | Play a calming melody while watching Saul’s mood. | `listen-respond` | `listen_respond_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Covenant Friends | Exchange signals with Jonathan unseen. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | The Wilderness | Escape Saul and spare him in the cave. | `find-path` | `find_path_18x9_adv.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Abigail | Deliver provisions before anger becomes violence. | `gather-with-care` | `good_samaritan.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Throne | Resolve petitions without favouritism. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Bathsheba and Uriah | Confront the irreversible harm rather than hiding it. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | Nathan’s Parable | Recognise the king inside the story and repent. | `match-it-up` | `match_it_up_3x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Absalom | Navigate divided loyalties without celebrating loss. | `find-path` | `find_path_9x9.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 11 | The Census | Choose responsibility during the plague. | `tap-sequence` | `plagues_tap.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 12 | Solomon | Pass plans and wisdom to the next king. | `keep-balance` | `keep_balance_x3_v2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./david-design-source-of-truth.md) | [Music SOT](./david-music-source-of-truth.md) | [SFX SOT](./david-sfx-source-of-truth.md) | [Game Plan](./david-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | Anointed | memory | Identify the overlooked shepherd among Jesse’s sons. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 2 | Goliath | faith-crafting | Time a sling throw after refusing heavy armour. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 3 | Saul's Court | sequence | Play a calming melody while watching Saul’s mood. | Repeat a short visual signal sequence; add one signal after each round. |
| 4 | Covenant Friends | route | Exchange signals with Jonathan unseen. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 5 | The Wilderness | crossing | Escape Saul and spare him in the cave. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 6 | Abigail | stack | Deliver provisions before anger becomes violence. | Place a moving building piece over a marked foundation; use a wide timing window. |
| 7 | The Throne | packing | Resolve petitions without favouritism. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |
| 8 | Bathsheba and Uriah | search | Confront the irreversible harm rather than hiding it. | Reveal safe locations using adjacent-count clues; a mistaken choice gives a hint, never an explosion. |
| 9 | Nathan's Parable | picture | Recognise the king inside the story and repent. | Fill a small picture grid from row and column clues; provide a reveal-one-cell hint. |
| 10 | Absalom | order | Navigate divided loyalties without celebrating loss. | Slide illustrated tiles into the story order; allow an easy reset and step hint. |
| 11 | The Census | code | Choose responsibility during the plague. | Arrange symbols and use position clues to revise the answer; clues remain visible. |
| 12 | Solomon | catch | Pass plans and wisdom to the next king. | Tap the requested moving story objects; ignore unrelated objects without a penalty. |

### Faith crafting: chapter 2

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Stone, Flax, Water. Goal: **Sling, Smooth Stone, Smooth Stone**.

- Flax + Flax → **Sling**. Braided strands with a pouch.
- Stone + Water → **Smooth Stone**. Rubbed smooth in the brook.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

Chapter assignments follow the current manifest and canonical story actions.
<!-- faith-games:end -->
