# Nehemiah — Story Game Plan

## North star

Can prayerful planning rebuild both walls and communal justice? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | Bad News | Map Jerusalem’s broken gates while Nehemiah prays. | `listen-respond` | `listen_respond_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | Before the King | Choose a clear request and realistic resources. | `look-closely` | `look_closely_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Night Inspection | Survey ruined walls without alerting opponents. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Rise and Build | Assign families to adjacent wall sections. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Sword and Trowel | Balance guarding with construction. | `keep-balance` | `keep_balance_x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | The Outcry | Cancel exploitative debts and restore fields. | `keep-balance` | `keep_balance_x3_v2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Plots and Rumours | Recognise distractions designed to stop the work. | `match-it-up` | `match_it_up_3x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | The Wall Completed | Close the final gap and set gatekeepers. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | The Book Read | Rebuild the platform and help the people understand. | `fit-pieces` | `fit_pieces_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Reform | Inspect storerooms and restore shared commitments. | `keep-balance` | `keep_balance_x3_v2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./nehemiah-design-source-of-truth.md) | [Music SOT](./nehemiah-music-source-of-truth.md) | [SFX SOT](./nehemiah-sfx-source-of-truth.md) | [Game Plan](./nehemiah-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | Bad News | memory | Map Jerusalem’s broken gates while Nehemiah prays. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 2 | Before the King | sequence | Choose a clear request and realistic resources. | Repeat a short visual signal sequence; add one signal after each round. |
| 3 | Night Inspection | stack | Survey ruined walls without alerting opponents. | Place a moving building piece over a marked foundation; use a wide timing window. |
| 4 | Rise and Build | route | Assign families to adjacent wall sections. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 5 | Sword and Trowel | packing | Balance guarding with construction. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |
| 6 | The Outcry | crossing | Cancel exploitative debts and restore fields. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 7 | Plots and Rumours | search | Recognise distractions designed to stop the work. | Reveal safe locations using adjacent-count clues; a mistaken choice gives a hint, never an explosion. |
| 8 | The Wall Completed | faith-crafting | Close the final gap and set gatekeepers. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 9 | The Book Read | picture | Rebuild the platform and help the people understand. | Fill a small picture grid from row and column clues; provide a reveal-one-cell hint. |
| 10 | Reform | order | Inspect storerooms and restore shared commitments. | Slide illustrated tiles into the story order; allow an easy reset and step hint. |

### Faith crafting: chapter 8

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Stone, Clay, Water, Wood. Goal: **Wall, Wall, Gate**.

- Clay + Water → **Mortar**. Clay slurry for binding.
- Stone + Stone + Mortar → **Wall**. Stones mortared together.
- Wood + Wood + Clay → **Gate**. Timber hung with clay hinges.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

Chapter assignments follow the current manifest and canonical story actions.
<!-- faith-games:end -->
