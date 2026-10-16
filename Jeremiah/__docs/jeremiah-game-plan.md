# Jeremiah — Story Game Plan

## North star

Can truth be spoken and hope planted while a city collapses? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | The Call | Touch the right words to the young prophet’s mouth. | `listen-respond` | `listen_respond_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Almond Branch | Spot signs that God is watching over the word. | `look-closely` | `look_closely_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | At the Temple Gate | Separate ritual confidence from justice. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | The Scroll | Dictate to Baruch and rebuild the burned scroll. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | The Potter | Reshape the clay while it remains workable. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | The Yoke | Carry the warning despite Hananiah’s easy promise. | `listen-respond` | `listen_respond_4x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Cistern | Coordinate Ebed-melech’s rope rescue. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Buy the Field | Complete a land purchase while siege closes in. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | The Fall of Jerusalem | Guide survivors through the breached city. | `find-path` | `find_path_18x9.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Lament and Hope | Pair grief lines with stubborn hope. | `match-it-up` | `match_it_up_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./jeremiah-design-source-of-truth.md) | [Music SOT](./jeremiah-music-source-of-truth.md) | [SFX SOT](./jeremiah-sfx-source-of-truth.md) | [Game Plan](./jeremiah-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | The Call | memory | Touch the right words to the young prophet’s mouth. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 2 | The Almond Branch | sequence | Spot signs that God is watching over the word. | Repeat a short visual signal sequence; add one signal after each round. |
| 3 | At the Temple Gate | route | Separate ritual confidence from justice. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 4 | The Scroll | stack | Dictate to Baruch and rebuild the burned scroll. | Place a moving building piece over a marked foundation; use a wide timing window. |
| 5 | The Potter | faith-crafting | Reshape the clay while it remains workable. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 6 | The Yoke | crossing | Carry the warning despite Hananiah’s easy promise. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 7 | The Cistern | packing | Coordinate Ebed-melech’s rope rescue. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |
| 8 | Buy the Field | search | Complete a land purchase while siege closes in. | Reveal safe locations using adjacent-count clues; a mistaken choice gives a hint, never an explosion. |
| 9 | The Fall of Jerusalem | picture | Guide survivors through the breached city. | Fill a small picture grid from row and column clues; provide a reveal-one-cell hint. |
| 10 | Lament and Hope | order | Pair grief lines with stubborn hope. | Slide illustrated tiles into the story order; allow an easy reset and step hint. |

### Faith crafting: chapter 5

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Clay, Water, Flax. Goal: **Vessel, Belt**.

- Clay + Water → **Wet Clay**. Soft and workable.
- Wet Clay + Wet Clay → **Vessel**. Shaped on the wheel.
- Flax + Flax → **Belt**. A linen belt.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

Chapter assignments follow the current manifest and canonical story actions.
<!-- faith-games:end -->
