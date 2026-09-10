# Samuel — Story Game Plan

## North star

Will a listener speak truth when people demand the wrong kind of power? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | The Boy at Shiloh | Complete temple tasks beside Eli. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Voice at Night | Listen three times and answer correctly. | `listen-respond` | `listen_respond_4x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | A Hard Message | Tell Eli the whole message without embellishment. | `listen-respond` | `listen_respond_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | The Ark Captured | Track the cost of treating the Ark like a charm. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Ebenezer | Raise a memorial stone after deliverance. | `fit-pieces` | `fit_pieces_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | A King Demanded | Hear the elders and explain the tradeoffs. | `listen-respond` | `listen_respond_4x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Saul Chosen | Find Saul among the baggage. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Saul’s First Victory | Rally the people and refuse revenge. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | The Rejected King | Compare obedience with impressive sacrifice. | `look-closely` | `look_closely_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | David Anointed | Look past height and choose the shepherd son. | `look-closely` | `look_closely_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | The Boy at Shiloh | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_3x2.html` | Complete temple tasks beside Eli. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Boy at Shiloh” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 2 | The Voice at Night | **Listen and Respond** | `listen-respond` | `listen_respond_4x2.html` | Listen three times and answer correctly. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “The Voice at Night” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 3 | A Hard Message | **Listen and Respond** | `listen-respond` | `listen_respond_3x2.html` | Tell Eli the whole message without embellishment. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “A Hard Message” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 4 | The Ark Captured | **Watch and Move** | `watch-and-move` | `watch_move_river_crossing_easy.html` | Track the cost of treating the Ark like a charm. | Hold to observe; release or tap a destination when sight-lines are clear. | Observe a repeating movement pattern, move during a safe opening, and reach the marked point. | Complete the action, settle the scene, then reveal the canonical “The Ark Captured” outcome and scripture reference. | Detection freezes the moment and rewinds to the previous cover point without losing progress. |
| 5 | Ebenezer | **Fit the Pieces** | `fit-pieces` | `fit_pieces_3x3.html` | Raise a memorial stone after deliverance. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “Ebenezer” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 6 | A King Demanded | **Listen and Respond** | `listen-respond` | `listen_respond_4x2.html` | Hear the elders and explain the tradeoffs. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “A King Demanded” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 7 | Saul Chosen | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_3x2.html` | Find Saul among the baggage. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “Saul Chosen” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 8 | Saul’s First Victory | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_4x1.html` | Rally the people and refuse revenge. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “Saul’s First Victory” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 9 | The Rejected King | **Look Closely** | `look-closely` | `look_closely_3x3.html` | Compare obedience with impressive sacrifice. | Select evidence in the panel, then choose the statement it supports. | Inspect two or three clues, reveal their meaning, and make a considered response. | Complete the action, settle the scene, then reveal the canonical “The Rejected King” outcome and scripture reference. | Unexamined evidence remains highlighted; the player can revise before confirming. |
| 10 | David Anointed | **Look Closely** | `look-closely` | `look_closely_4x3.html` | Look past height and choose the shepherd son. | Select evidence in the panel, then choose the statement it supports. | Inspect two or three clues, reveal their meaning, and make a considered response. | Complete the action, settle the scene, then reveal the canonical “David Anointed” outcome and scripture reference. | Unexamined evidence remains highlighted; the player can revise before confirming. |

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
