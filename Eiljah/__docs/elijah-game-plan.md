# Elijah — Story Game Plan

## North star

Can zeal mature into listening, mercy, and faithful succession? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | The Drought | Follow ravens to daily bread by the brook. | `find-path` | `find_path_6x6.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Widow’s Jar | Measure flour and oil without exhausting either. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | The Child Restored | Carry the child upstairs and persist in prayer. | `listen-respond` | `listen_respond_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Mount Carmel | Repair the altar with twelve stones. | `story-builder` | `temple_builder.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | The Rain Returns | Spot the small cloud and race from the storm. | `look-closely` | `look_closely_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Under the Broom Tree | Rest, eat, and accept care before travelling. | `keep-balance` | `keep_balance_x3_v2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Quiet Voice | Distinguish wind, quake, fire, and quiet. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Naboth’s Vineyard | Expose the false testimony behind the seizure. | `look-closely` | `look_closely_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | Chariots of Fire | Cross the Jordan and pass the mantle to Elisha. | `find-path` | `path_of_moses.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

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

| Act | Chapter | Mini-game | Game engine type | Example prototype | Objective | Input | Core loop | Completion and story payoff | Gentle retry / accessibility |
|---:|---|---|---|---|---|---|---|---|---|
| 1 | The Drought | **Find the Faithful Path** | `find-path` | `find_path_6x6.html` | Follow ravens to daily bread by the brook. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “The Drought” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 2 | The Widow’s Jar | **Fit the Pieces** | `fit-pieces` | `fit_pieces_4x3.html` | Measure flour and oil without exhausting either. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “The Widow’s Jar” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 3 | The Child Restored | **Listen and Respond** | `listen-respond` | `listen_respond_3x2.html` | Carry the child upstairs and persist in prayer. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “The Child Restored” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 4 | Mount Carmel | **Fit the Pieces** | `story-builder` | `temple_builder.html` | Repair the altar with twelve stones. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “Mount Carmel” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 5 | The Rain Returns | **Look Closely** | `look-closely` | `look_closely_3x3.html` | Spot the small cloud and race from the storm. | Select evidence in the panel, then choose the statement it supports. | Inspect two or three clues, reveal their meaning, and make a considered response. | Complete the action, settle the scene, then reveal the canonical “The Rain Returns” outcome and scripture reference. | Unexamined evidence remains highlighted; the player can revise before confirming. |
| 6 | Under the Broom Tree | **Keep the Balance** | `keep-balance` | `keep_balance_x3_v2.html` | Rest, eat, and accept care before travelling. | Drag limited tokens between two or three clearly labelled needs. | Notice which need is falling, make one adjustment, and keep every need inside the safe band for a short cycle. | Complete the action, settle the scene, then reveal the canonical “Under the Broom Tree” outcome and scripture reference. | The game pauses before a meter empties and explains one helpful adjustment; no irreversible failure state. |
| 7 | The Quiet Voice | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_3x2.html` | Distinguish wind, quake, fire, and quiet. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Quiet Voice” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 8 | Naboth’s Vineyard | **Look Closely** | `look-closely` | `look_closely_4x3.html` | Expose the false testimony behind the seizure. | Select evidence in the panel, then choose the statement it supports. | Inspect two or three clues, reveal their meaning, and make a considered response. | Complete the action, settle the scene, then reveal the canonical “Naboth’s Vineyard” outcome and scripture reference. | Unexamined evidence remains highlighted; the player can revise before confirming. |
| 9 | Chariots of Fire | **Find the Faithful Path** | `find-path` | `path_of_moses.html` | Cross the Jordan and pass the mantle to Elisha. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Chariots of Fire” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |

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
