# Samuel — Story Game Plan

## North star

Will a listener speak truth when people demand the wrong kind of power? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | The Boy at Shiloh | Complete temple tasks beside Eli. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Voice at Night | Listen three times and answer correctly. | `listen-respond` | `listen_respond_4x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | A Hard Message | Tell Eli the whole message without embellishment. | `listen-respond` | `listen_respond_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | The Ark Captured | Track the cost of treating the Ark like a charm. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Ebenezer | Raise a memorial stone after deliverance. | `fit-pieces` | `fit_pieces_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | A King Demanded | Hear the elders and explain the tradeoffs. | `listen-respond` | `listen_respond_4x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Saul Chosen | Find Saul among the baggage. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Saul’s First Victory | Rally the people and refuse revenge. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | The Rejected King | Compare obedience with impressive sacrifice. | `look-closely` | `look_closely_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | David Anointed | Look past height and choose the shepherd son. | `look-closely` | `look_closely_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./samuel-design-source-of-truth.md) | [Music SOT](./samuel-music-source-of-truth.md) | [SFX SOT](./samuel-sfx-source-of-truth.md) | [Game Plan](./samuel-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | The Boy at Shiloh | memory | Complete temple tasks beside Eli. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 2 | The Voice at Night | faith-crafting | Listen three times and answer correctly. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 3 | A Hard Message | sequence | Tell Eli the whole message without embellishment. | Repeat a short visual signal sequence; add one signal after each round. |
| 4 | The Ark Captured | stack | Track the cost of treating the Ark like a charm. | Place a moving building piece over a marked foundation; use a wide timing window. |
| 5 | Ebenezer | route | Raise a memorial stone after deliverance. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 6 | A King Demanded | crossing | Hear the elders and explain the tradeoffs. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 7 | Saul Chosen | search | Find Saul among the baggage. | Reveal safe locations using adjacent-count clues; a mistaken choice gives a hint, never an explosion. |
| 8 | Saul’s First Victory | packing | Rally the people and refuse revenge. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |
| 9 | The Rejected King | picture | Compare obedience with impressive sacrifice. | Fill a small picture grid from row and column clues; provide a reveal-one-cell hint. |
| 10 | David Anointed | order | Look past height and choose the shepherd son. | Slide illustrated tiles into the story order; allow an easy reset and step hint. |

### Faith crafting: chapter 2

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Olive, Clay. Goal: **Oil Flask, Lamp**.

- Olive + Olive → **Oil**. Press the fruit.
- Clay + Clay → **Flask**. Fire-hardened earth.
- Flask + Oil → **Oil Flask**. A vessel filled for anointing.
- Clay + Oil → **Lamp**. A clay bowl that burns.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

Chapter assignments follow the current manifest and canonical story actions.
<!-- faith-games:end -->
