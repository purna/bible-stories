# Deborah — Story Game Plan

## North star

Will courage and shared leadership answer oppression? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Completion signal |
|---:|---|---|---|
| 1 | Under the Palm | Hear disputes and restore a fair path. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Summons | Carry Deborah’s message to Barak. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Gather at Tabor | Rally tribes without alerting Sisera. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | The Storm | Use the flooded ground to break the chariot advantage. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Sisera Flees | Track the fleeing commander to Jael’s tent. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Jael’s Choice | Prepare hospitality, then protect the camp. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Song | Rebuild the victory song in call-and-response. | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | Under the Palm | **Listen and Respond** | Hear disputes and restore a fair path. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “Under the Palm” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 2 | The Summons | **Find the Faithful Path** | Carry Deborah’s message to Barak. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “The Summons” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 3 | Gather at Tabor | **Watch and Move** | Rally tribes without alerting Sisera. | Hold to observe; release or tap a destination when sight-lines are clear. | Observe a repeating movement pattern, move during a safe opening, and reach the marked point. | Complete the action, settle the scene, then reveal the canonical “Gather at Tabor” outcome and scripture reference. | Detection freezes the moment and rewinds to the previous cover point without losing progress. |
| 4 | The Storm | **Complete the Story Beat** | Use the flooded ground to break the chariot advantage. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Storm” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 5 | Sisera Flees | **Find the Faithful Path** | Track the fleeing commander to Jael’s tent. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Sisera Flees” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 6 | Jael’s Choice | **Gather with Care** | Prepare hospitality, then protect the camp. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “Jael’s Choice” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 7 | The Song | **Fit the Pieces** | Rebuild the victory song in call-and-response. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “The Song” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |

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
