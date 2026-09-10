# Jeremiah — Story Game Plan

## North star

Can truth be spoken and hope planted while a city collapses? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | The Call | Touch the right words to the young prophet’s mouth. | `listen-respond` | `listen_respond_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Almond Branch | Spot signs that God is watching over the word. | `look-closely` | `look_closely_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | At the Temple Gate | Separate ritual confidence from justice. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | The Scroll | Dictate to Baruch and rebuild the burned scroll. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | The Potter | Reshape the clay while it remains workable. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | The Yoke | Carry the warning despite Hananiah’s easy promise. | `listen-respond` | `listen_respond_4x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Cistern | Coordinate Ebed-melech’s rope rescue. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Buy the Field | Complete a land purchase while siege closes in. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | The Fall of Jerusalem | Guide survivors through the breached city. | `find-path` | `find_path_18x9.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Lament and Hope | Pair grief lines with stubborn hope. | `match-it-up` | `match_it_up_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | The Call | **Listen and Respond** | `listen-respond` | `listen_respond_3x2.html` | Touch the right words to the young prophet’s mouth. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “The Call” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 2 | The Almond Branch | **Look Closely** | `look-closely` | `look_closely_4x3.html` | Spot signs that God is watching over the word. | Select evidence in the panel, then choose the statement it supports. | Inspect two or three clues, reveal their meaning, and make a considered response. | Complete the action, settle the scene, then reveal the canonical “The Almond Branch” outcome and scripture reference. | Unexamined evidence remains highlighted; the player can revise before confirming. |
| 3 | At the Temple Gate | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_3x2.html` | Separate ritual confidence from justice. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “At the Temple Gate” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 4 | The Scroll | **Fit the Pieces** | `fit-pieces` | `fit_pieces_4x3.html` | Dictate to Baruch and rebuild the burned scroll. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “The Scroll” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 5 | The Potter | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_3x2.html` | Reshape the clay while it remains workable. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Potter” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 6 | The Yoke | **Listen and Respond** | `listen-respond` | `listen_respond_4x2.html` | Carry the warning despite Hananiah’s easy promise. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “The Yoke” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 7 | The Cistern | **Watch and Move** | `watch-and-move` | `watch_move_river_crossing_easy.html` | Coordinate Ebed-melech’s rope rescue. | Hold to observe; release or tap a destination when sight-lines are clear. | Observe a repeating movement pattern, move during a safe opening, and reach the marked point. | Complete the action, settle the scene, then reveal the canonical “The Cistern” outcome and scripture reference. | Detection freezes the moment and rewinds to the previous cover point without losing progress. |
| 8 | Buy the Field | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_4x1.html` | Complete a land purchase while siege closes in. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “Buy the Field” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 9 | The Fall of Jerusalem | **Find the Faithful Path** | `find-path` | `find_path_18x9.html` | Guide survivors through the breached city. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “The Fall of Jerusalem” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 10 | Lament and Hope | **See the Pattern** | `match-it-up` | `match_it_up_4x4.html` | Pair grief lines with stubborn hope. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “Lament and Hope” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |

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
