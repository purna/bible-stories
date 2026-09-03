# Babel — Story Game Plan

## North star

Will people seek shared flourishing or manufacture fame and control? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Completion signal |
|---:|---|---|---|
| 1 | One Language | Coordinate a village task with shared symbols. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Plain | Choose a safe settlement site. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Bake the Bricks | Mix and fire bricks to the right strength. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | A Name for Ourselves | Sort motives behind the tower plan. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | The Tower Rises | Balance height, safety, and care for workers. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Confusion | Communicate using gesture and visual clues. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Scattered | Guide families toward different horizons. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Nations | Complete a map mosaic celebrating many peoples. | The scene resolves, the scripture reference appears, and Continue unlocks. |

## Shared loop

1. Enter a layered comic panel and receive one clear objective.
2. Explore or complete a 30–90 second interaction.
3. Show the canonical story beat and its reference.
4. Offer a brief reflection choice with no false alternate ending.
5. Save chapter completion and move forward.

## Scope guardrails

Use no more than one primary mechanic and one optional discovery per chapter. Reuse navigation, dialogue, audio, and layer-loading systems from `__Template`. Reserve 3D for actions that benefit from depth; otherwise keep the middle ground empty and use SVG layers.

<!-- act-mini-games:start -->
## Simple game in every act

Each act contains one short, readable mini-game tied directly to its canonical story action. The target play time is **30–90 seconds** on a first attempt. These are participation mechanics, not alternate-history branches: completing the game advances the scripture-aligned event already defined by the story.

| Act | Chapter | Mini-game | Objective | Input | Core loop | Completion and story payoff | Gentle retry / accessibility |
|---:|---|---|---|---|---|---|---|
| 1 | One Language | **Complete the Story Beat** | Coordinate a village task with shared symbols. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “One Language” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 2 | The Plain | **Keep the Balance** | Choose a safe settlement site. | Drag limited tokens between two or three clearly labelled needs. | Notice which need is falling, make one adjustment, and keep every need inside the safe band for a short cycle. | Complete the action, settle the scene, then reveal the canonical “The Plain” outcome and scripture reference. | The game pauses before a meter empties and explains one helpful adjustment; no irreversible failure state. |
| 3 | Bake the Bricks | **Complete the Story Beat** | Mix and fire bricks to the right strength. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “Bake the Bricks” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 4 | A Name for Ourselves | **See the Pattern** | Sort motives behind the tower plan. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “A Name for Ourselves” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |
| 5 | The Tower Rises | **Keep the Balance** | Balance height, safety, and care for workers. | Drag limited tokens between two or three clearly labelled needs. | Notice which need is falling, make one adjustment, and keep every need inside the safe band for a short cycle. | Complete the action, settle the scene, then reveal the canonical “The Tower Rises” outcome and scripture reference. | The game pauses before a meter empties and explains one helpful adjustment; no irreversible failure state. |
| 6 | Confusion | **Complete the Story Beat** | Communicate using gesture and visual clues. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “Confusion” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 7 | Scattered | **Find the Faithful Path** | Guide families toward different horizons. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Scattered” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 8 | Nations | **See the Pattern** | Complete a map mosaic celebrating many peoples. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “Nations” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |

### Shared mini-game rules

- Teach the game inside the panel with one animated example; do not open a separate instruction screen.
- Support pointer, touch, keyboard and switch-style sequential focus. Tap targets are at least 44×44 CSS pixels.
- Do not require more than three simultaneous resources, eight draggable items, or one primary action verb per game.
- A first play should take 30–90 seconds; experienced replay should take under 45 seconds.
- No game-over screen, lives, score chasing, loot, combat grind, or canonical “bad ending.” Mistakes produce a clue and a quick retry.
- Pause camera movement and decorative animation while the player is reading instructions or choosing.
- Reduced-motion mode replaces timing, drag momentum and camera movement with discrete selection and progress states.
- Sound confirms actions but never carries required information without captions, shape, colour-independent icons, or motion-safe highlights.
- Save only completion and optional discovery flags. Restarting an act resets its mini-game locally without changing prior chapters.

### Implementation contract

Each act JSON should declare `game.id`, `game.type`, `game.objective`, `game.controls`, `game.success`, and `game.accessibility`. The interaction mounts inside the middle-ground layer, locks story navigation only while actively manipulated, calls the shared completion callback once, then settles all 3D/SVG elements before the scripture reference appears.
<!-- act-mini-games:end -->
