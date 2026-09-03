# Enoch — Story Game Plan

## North star

What does it mean to walk faithfully across an ordinary lifetime? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Completion signal |
|---:|---|---|---|
| 1 | A Family Record | Place Enoch correctly in the generations. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The First Walk | Choose a daily route that serves neighbours. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | A Son Named Methuselah | Prepare the home for a new child. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Years of Faithfulness | Complete repeated small acts without a fame meter. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | A Warning | Deliver a hard truth without cruelty. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Walking with God | Follow a quiet path as the landscape changes. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Taken | Let go of the route and enter the final light. | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | A Family Record | **Fit the Pieces** | Place Enoch correctly in the generations. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “A Family Record” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 2 | The First Walk | **Find the Faithful Path** | Choose a daily route that serves neighbours. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “The First Walk” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 3 | A Son Named Methuselah | **Gather with Care** | Prepare the home for a new child. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “A Son Named Methuselah” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 4 | Years of Faithfulness | **Complete the Story Beat** | Complete repeated small acts without a fame meter. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “Years of Faithfulness” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 5 | A Warning | **Listen and Respond** | Deliver a hard truth without cruelty. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “A Warning” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 6 | Walking with God | **Find the Faithful Path** | Follow a quiet path as the landscape changes. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Walking with God” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 7 | Taken | **Find the Faithful Path** | Let go of the route and enter the final light. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Taken” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |

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
