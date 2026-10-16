# Babel game plan

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | The Brick | memory | Complete a visual task based on the “The Brick” comic panels. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 2 | The Tower | faith-crafting | Complete a visual task based on the “The Tower” comic panels. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 3 | The Summit | sequence | Complete a visual task based on the “The Summit” comic panels. | Repeat a short visual signal sequence; add one signal after each round. |
| 4 | The Confusion | route | Complete a visual task based on the “The Confusion” comic panels. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 5 | The Scattering | crossing | Complete a visual task based on the “The Scattering” comic panels. | Move one lane at a time when the passage is clear; pause the lanes while reading. |

### Faith crafting: chapter 2

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Clay, Water, Straw. Goal: **Shared shelter**.

- Clay + Water + Straw → **Brick**. Mix, shape and dry a clay brick.
- Brick + Brick → **Shared shelter**. Use the bricks to care for neighbours.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

**Narrative reconciliation needed:** the live chapter count differs from the canonical plan or has no canonical entry. This table follows the current manifest; review story actions against the actual panels before coding.
<!-- faith-games:end -->
