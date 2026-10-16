# Job — Story Game Plan

## North star

Can faith remain honest when suffering refuses a simple explanation? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | A Blameless Life | Tend Job’s household and practice generous justice. | `keep-balance` | `keep_balance_x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Accuser | Observe the heavenly challenge without controlling it. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Loss upon Loss | Receive each messenger and sit with the silence. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Seven Days | Keep vigil without offering explanations. | `keep-balance` | `keep_balance_x3_v2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Job Speaks | Build an honest lament from grief and protest. | `fit-pieces` | `fit_pieces_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | The Friends | Identify when counsel becomes accusation. | `match-it-up` | `match_it_up_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Elihu | Listen, test claims, and resist easy scoring. | `listen-respond` | `listen_respond_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Out of the Whirlwind | Explore questions about creation. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | Job Responds | Release the demand to master every answer. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Restoration | Rebuild community without treating new gifts as replacements. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./job-design-source-of-truth.md) | [Music SOT](./job-music-source-of-truth.md) | [SFX SOT](./job-sfx-source-of-truth.md) | [Game Plan](./job-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | A Blameless Life | memory | Tend Job’s household and practice generous justice. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 2 | The Accuser | sequence | Observe the heavenly challenge without controlling it. | Repeat a short visual signal sequence; add one signal after each round. |
| 3 | Loss upon Loss | route | Receive each messenger and sit with the silence. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 4 | Seven Days | packing | Keep vigil without offering explanations. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |
| 5 | Job Speaks | stack | Build an honest lament from grief and protest. | Place a moving building piece over a marked foundation; use a wide timing window. |
| 6 | The Friends | faith-crafting | Identify when counsel becomes accusation. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 7 | Elihu | crossing | Listen, test claims, and resist easy scoring. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 8 | Out of the Whirlwind | search | Explore questions about creation. | Reveal safe locations using adjacent-count clues; a mistaken choice gives a hint, never an explosion. |
| 9 | Job Responds | picture | Release the demand to master every answer. | Fill a small picture grid from row and column clues; provide a reveal-one-cell hint. |
| 10 | Restoration | order | Rebuild community without treating new gifts as replacements. | Slide illustrated tiles into the story order; allow an easy reset and step hint. |

### Faith crafting: chapter 6

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Stone, Wood, Flax. Goal: **Altar, Cloth**.

- Flax + Flax → **Cloth**. Woven for mourning.
- Stone + Stone + Wood → **Altar**. Stacked stones and timber.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

Chapter assignments follow the current manifest and canonical story actions.
<!-- faith-games:end -->
