# Jonah — Story Game Plan

## North star

Will the prophet accept mercy when it reaches people he resents? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | Run to the Sea | Choose cargo and board the ship going the wrong way. | `look-closely` | `look_closely_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Storm | Secure the deck and uncover Jonah’s flight. | `look-closely` | `look_closely_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Into the Deep | Navigate sinking currents toward the great fish. | `find-path` | `jonah_path.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Prayer Below | Reassemble Jonah’s prayer from psalm fragments. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Second Call | Walk the road to Nineveh. | `find-path` | `jonah_path.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | The Warning | Deliver the short message through the great city. | `listen-respond` | `listen_respond_4x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Nineveh Repents | Coordinate fasting from palace to livestock. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | The Plant | Manage shade, worm, and hot wind. | `keep-balance` | `keep_balance_x3_v2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | The Question | Compare Jonah’s pity for a plant with God’s pity for a city. | `keep-balance` | `keep_balance_x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./jonah-design-source-of-truth.md) | [Music SOT](./jonah-music-source-of-truth.md) | [SFX SOT](./jonah-sfx-source-of-truth.md) | [Game Plan](./jonah-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | Dialogue: Escaping | memory | Complete a visual task based on the “Dialogue: Escaping” comic panels. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 2 | Feeling Trapped | sequence | Complete a visual task based on the “Feeling Trapped” comic panels. | Repeat a short visual signal sequence; add one signal after each round. |
| 3 | The Mission | faith-crafting | Complete a visual task based on the “The Mission” comic panels. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 4 | Reflection | route | Complete a visual task based on the “Reflection” comic panels. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |

### Faith crafting: chapter 3

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Ash, Water, Reed, Flax. Goal: **Scroll, Sackcloth**.

- Ash + Water → **Ink**. Soot mixed with water.
- Reed + Ink → **Scroll**. Written warning.
- Flax + Flax → **Sackcloth**. Rough weave for repentance.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

**Narrative reconciliation needed:** the live chapter count differs from the canonical plan or has no canonical entry. This table follows the current manifest; review story actions against the actual panels before coding.
<!-- faith-games:end -->
