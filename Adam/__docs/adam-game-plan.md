# Adam — Story Game Plan


## ideas
https://codepen.io/andreamorosi/pen/NWMLPGy


## North star

Will humanity receive creation as a gift and accept the limits of trust? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | Formed from Dust | Gather the garden’s elements in creation order. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Garden | Tend the garden by planting seeds and pulling weeds before they spread. | `tend-garden` | `garde_game_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Together | Build a shared shelter and tend one plot together. | `fit-pieces` | `fit_pieces_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | The Boundary | Navigate abundance while leaving one tree untouched. | `find-path` | `find_path_9x9.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | The Choice | Spot the serpent’s half-truths in a dialogue puzzle. | `look-closely` | `look_closely_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Hiding | Follow footprints and admit what happened. | `find-path` | `find_path_18x9.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | East of Eden | Pack seeds and begin cultivation outside the garden. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Cain and Abel | Prepare offerings with care, then cool Cain’s anger. | `gather-with-care` | `good_samaritan.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | The Field | Witness consequence and mark a refuge path. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | A New Line | Plant a family tree from Seth onward. | `match-it-up` | `match_it_up_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./adam-design-source-of-truth.md) | [Music SOT](./adam-music-source-of-truth.md) | [SFX SOT](./adam-sfx-source-of-truth.md) | [Game Plan](./adam-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | Let There Be Light | memory | Complete a visual task based on the “Let There Be Light” comic panels. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 2 | The Garden | faith-crafting | Complete a visual task based on the “The Garden” comic panels. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 3 | Helper Suitable | sequence | Complete a visual task based on the “Helper Suitable” comic panels. | Repeat a short visual signal sequence; add one signal after each round. |
| 4 | The Temptation | route | Complete a visual task based on the “The Temptation” comic panels. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 5 | Exile | crossing | Complete a visual task based on the “Exile” comic panels. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 6 | West of the Divide | stack | Complete a visual task based on the “West of the Divide” comic panels. | Place a moving building piece over a marked foundation; use a wide timing window. |

### Faith crafting: chapter 2

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Seed, Water, Branch. Goal: **Garden**.

- Seed + Water → **Bed**. Seed and water in the soil.
- Bed + Bed + Branch → **Garden**. Two beds with a tree's care.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

**Narrative reconciliation needed:** the live chapter count differs from the canonical plan or has no canonical entry. This table follows the current manifest; review story actions against the actual panels before coding.
<!-- faith-games:end -->
