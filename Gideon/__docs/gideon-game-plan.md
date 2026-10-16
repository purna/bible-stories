# Gideon — Story Game Plan

## North star

When God calls the unlikely, will we trust His strength over our own? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Authority and review status

Revised 23 September 2026. These four Markdown files form one documentation set:

- [Design source of truth](gideon-design-source-of-truth.md): story scope, act names, canon, characters, materials and visual direction.
- [Game plan](gideon-game-plan.md): playable actions, completion, controls and accessibility.
- [Music source of truth](gideon-music-source-of-truth.md): score identity, cue filenames and music delivery.
- [SFX source of truth](gideon-sfx-source-of-truth.md): environmental/action cues, triggers and effects delivery.

Scripture controls events; the design document controls their adaptation. Each specialist file owns its detailed contract; linked summaries do not override it. “Act” and “chapter” mean the same numbered unit, 1–7.

This is a documentation revision, not confirmation of a working implementation. The supplied set did not include `gideon-story.json`, the Gideon runtime, audio assets, `__Template`, character presets or Texture Forge. Their paths and interfaces below are integration requirements to verify, not claims that they already exist. Prototype filenames are references for adaptation, not Gideon-ready implementations.

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.



---

**Navigation:** [← Source of Truth Overview](../../SOURCE-OF-TRUTH-OVERVIEW.md) | [Design SOT](./gideon-design-source-of-truth.md) | [Music SOT](./gideon-music-source-of-truth.md) | [SFX SOT](./gideon-sfx-source-of-truth.md) | [Game Plan](./gideon-game-plan.md)

<!-- faith-games:start -->
## Revised chapter games and faith crafting

**Planning update — not yet integrated into the live games.** This section supersedes earlier prototype assignments. Every challenge follows the final comic panel. Shared native modules; no frames. Each chapter in this story uses a different mechanic. Cross-story adaptations must change rules or interaction, not just labels. Full unique-mechanic review remains required before implementation.

Source: [HTML/CSS/JavaScript game collection](https://github.com/he-is-talha/html-css-javascript-games). Exact source folders and integration status are recorded in [the shared plan](../../__shared/chapter-games/story-game-plan.json). These are mechanic references, not imported code.

| Chapter | Story beat | Mechanic | Story action | Proposed rules |
|---:|---|---|---|---|
| 1 | The Winepress | memory | Complete a visual task based on the “The Winepress” comic panels. | Reveal pairs of illustrated story objects; matched pairs stay visible. |
| 2 | The Sign | sequence | Complete a visual task based on the “The Sign” comic panels. | Repeat a short visual signal sequence; add one signal after each round. |
| 3 | The Fleece | route | Complete a visual task based on the “The Fleece” comic panels. | Choose adjacent route cells to guide a marker to the goal; use taps instead of device tilt. |
| 4 | The Army Reduced | crossing | Complete a visual task based on the “The Army Reduced” comic panels. | Move one lane at a time when the passage is clear; pause the lanes while reading. |
| 5 | The Dream | stack | Complete a visual task based on the “The Dream” comic panels. | Place a moving building piece over a marked foundation; use a wide timing window. |
| 6 | The Battle | faith-crafting | Complete a visual task based on the “The Battle” comic panels. | Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. |
| 7 | The Victory | packing | Complete a visual task based on the “The Victory” comic panels. | Rotate and place a small set of fixed pieces into an outline; no falling timer. |

### Faith crafting: chapter 6

Gather materials → select recipe ingredients → combine → use the finished objects in the story scene. Materials: Wood, Cloth, Oil, Clay. Goal: **Covered torch**.

- Wood + Cloth + Oil → **Torch**. Wrap the timber and add oil.
- Torch + Clay → **Covered torch**. Cover the flame with a clay jar.

Use a visible recipe card and a three-slot bench; allow repeated ingredients. If a recipe has more than three ingredients, split it into sub-recipes. Materials are replenishable and unfinished work is saved. An unsuccessful combination returns every item. Use SVG material icons and visible labels, not emoji. Do not treat faith, patience or miracles as manufactured inventory items. The character prepares and responds; God acts in the narrative. Objects are a playful illustration, not a claim about historical manufacture.

### Mobile and completion requirements

At 320×568, use one scrolling column, 44px minimum targets, a two-column ingredient tray and a wrapping button row. Tap-select then tap-place must provide every drag action. Keep the chapter selector above the game. Text and buttons sit above the comic dots. Provide SVG icons, accessible labels, keyboard controls, visual equivalents for sound and reduced motion. No required typing, microphone, tilt or fast reaction. Skip → stays available until success; hide it after success and show Continue →. Save chapter reading, skipped challenges and game wins separately. Each game must expose mount, complete, skip and destroy hooks, including listener/timer cleanup.

**Narrative reconciliation needed:** the live chapter count differs from the canonical plan or has no canonical entry. This table follows the current manifest; review story actions against the actual panels before coding.
<!-- faith-games:end -->
