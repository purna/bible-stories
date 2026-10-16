# Deborah — Story Game Plan

## North star

Will courage and shared leadership answer oppression? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | Under the Palm | Hear disputes and restore a fair path. | `listen-respond` | `listen_respond_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Summons | Carry Deborah’s message to Barak. | `find-path` | `find_path_9x9.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Gather at Tabor | Rally tribes without alerting Sisera. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | The Storm | Use the flooded ground to break the chariot advantage. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Sisera Flees | Track the fleeing commander to Jael’s tent. | `find-path` | `find_path_18x9_adv.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Jael’s Choice | Prepare hospitality, then protect the camp. | `gather-with-care` | `good_samaritan.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Song | Rebuild the victory song in call-and-response. | `fit-pieces` | `fit_pieces_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./deborah-design-source-of-truth.md) | [Music SOT](./deborah-music-source-of-truth.md) | [SFX SOT](./deborah-sfx-source-of-truth.md) | [Game Plan](./deborah-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | Under the Palm | memory | Hear disputes and restore a fair path. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 2 | The Summons | sequence | Carry Deborah’s message to Barak. | Repeat a short visual signal sequence; add one signal after each round. |
| 3 | Gather at Tabor | faith-crafting | Rally tribes without alerting Sisera. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 4 | The Storm | route | Use the flooded ground to break the chariot advantage. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 5 | Sisera Flees | stack | Track the fleeing commander to Jael’s tent. | Place a moving building piece over a marked foundation; use a wide timing window. |
| 6 | Jael’s Choice | crossing | Prepare hospitality, then protect the camp. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 7 | The Song | packing | Rebuild the victory song in call-and-response. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |

### Faith crafting: chapter 3

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Wood, Flax, Iron. Goal: **Banner, Banner, Peg**.

- Flax + Wood → **Banner**. Cloth on a pole.
- Wood + Iron → **Peg**. An iron-tipped tent stake.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

Chapter assignments follow the current manifest and canonical story actions.
<!-- faith-games:end -->
