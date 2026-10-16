# Isaiah — Story Game Plan

## North star

How can holy vision produce truthful warning and durable hope? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | A City in Need | Identify worship separated from justice. | `match-it-up` | `match_it_up_3x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Holy Throne | Navigate the temple vision and answer the call. | `find-path` | `find_path_9x9.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | The Vineyard Song | Tend a vineyard that yields injustice. | `listen-respond` | `listen_respond_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Immanuel Sign | Carry hope to fearful King Ahaz. | `find-path` | `find_path_9x9.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | The Assyrian Shadow | Map the advancing empire and the surviving stump. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Hezekiah’s Crisis | Bring the threatening letter into prayer. | `listen-respond` | `listen_respond_4x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Comfort My People | Build a road of return through the wilderness. | `fit-pieces` | `fit_pieces_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | The Servant | Match suffering, justice, and healing motifs. | `match-it-up` | `match_it_up_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | New Creation | Restore a city garden where all can flourish. | `keep-balance` | `keep_balance_x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./isaiah-design-source-of-truth.md) | [Music SOT](./isaiah-music-source-of-truth.md) | [SFX SOT](./isaiah-sfx-source-of-truth.md) | [Game Plan](./isaiah-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | A City in Need | faith-crafting | Identify worship separated from justice. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 2 | The Holy Throne | memory | Navigate the temple vision and answer the call. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 3 | The Vineyard Song | sequence | Tend a vineyard that yields injustice. | Repeat a short visual signal sequence; add one signal after each round. |
| 4 | Immanuel Sign | route | Carry hope to fearful King Ahaz. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 5 | The Assyrian Shadow | crossing | Map the advancing empire and the surviving stump. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 6 | Hezekiah’s Crisis | stack | Bring the threatening letter into prayer. | Place a moving building piece over a marked foundation; use a wide timing window. |
| 7 | Comfort My People | packing | Build a road of return through the wilderness. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |
| 8 | The Servant | search | Match suffering, justice, and healing motifs. | Reveal safe locations using adjacent-count clues; a mistaken choice gives a hint, never an explosion. |
| 9 | New Creation | picture | Restore a city garden where all can flourish. | Fill a small picture grid from row and column clues; provide a reveal-one-cell hint. |

### Faith crafting: chapter 1

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Wood, Soot, Reed, Water. Goal: **Scroll, Coal**.

- Soot + Water → **Ink**. Soot mixed with water.
- Reed + Ink → **Scroll**. Written prophecy.
- Wood + Soot → **Coal**. A burning ember.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

Chapter assignments follow the current manifest and canonical story actions.
<!-- faith-games:end -->
