# Daniel — Story Game Plan

## North star

How can faithful courage endure inside an empire built on fear? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | Exile and the Table | Build a respectful ten-day food test. | `fit-pieces` | `fit_pieces_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Great Statue | Reassemble the dream and its meaning. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | The Furnace | Keep the three friends together through the fire maze. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | The Proud King | Tend the humbled king until his reason returns. | `keep-balance` | `keep_balance_x3_v2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Writing on the Wall | Match the mysterious words to their warning. | `match-it-up` | `match_it_up_3x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | The Lions’ Den | Maintain Daniel’s prayer rhythm despite the decree. | `listen-respond` | `listen_respond_4x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Four Beasts | Identify symbols without attacking the vision. | `match-it-up` | `match_it_up_3x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | The Ram and Goat | Track the vision’s movements on a map. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | Seventy Weeks | Order prayer, confession, and hope. | `match-it-up` | `match_it_up_3x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Final Vision | Carry the sealed message to the riverbank. | `find-path` | `path_of_moses.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | Exile and the Table | **Fit the Pieces** | `fit-pieces` | `fit_pieces_3x3.html` | Build a respectful ten-day food test. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “Exile and the Table” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 2 | The Great Statue | **Fit the Pieces** | `fit-pieces` | `fit_pieces_4x3.html` | Reassemble the dream and its meaning. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “The Great Statue” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 3 | The Furnace | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_3x2.html` | Keep the three friends together through the fire maze. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Furnace” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 4 | The Proud King | **Keep the Balance** | `keep-balance` | `keep_balance_x3_v2.html` | Tend the humbled king until his reason returns. | Drag limited tokens between two or three clearly labelled needs. | Notice which need is falling, make one adjustment, and keep every need inside the safe band for a short cycle. | Complete the action, settle the scene, then reveal the canonical “The Proud King” outcome and scripture reference. | The game pauses before a meter empties and explains one helpful adjustment; no irreversible failure state. |
| 5 | Writing on the Wall | **See the Pattern** | `match-it-up` | `match_it_up_3x4.html` | Match the mysterious words to their warning. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “Writing on the Wall” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |
| 6 | The Lions’ Den | **Listen and Respond** | `listen-respond` | `listen_respond_4x2.html` | Maintain Daniel’s prayer rhythm despite the decree. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “The Lions’ Den” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 7 | Four Beasts | **See the Pattern** | `match-it-up` | `match_it_up_3x4.html` | Identify symbols without attacking the vision. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “Four Beasts” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |
| 8 | The Ram and Goat | **Watch and Move** | `watch-and-move` | `watch_move_river_crossing_easy.html` | Track the vision’s movements on a map. | Hold to observe; release or tap a destination when sight-lines are clear. | Observe a repeating movement pattern, move during a safe opening, and reach the marked point. | Complete the action, settle the scene, then reveal the canonical “The Ram and Goat” outcome and scripture reference. | Detection freezes the moment and rewinds to the previous cover point without losing progress. |
| 9 | Seventy Weeks | **See the Pattern** | `match-it-up` | `match_it_up_3x4.html` | Order prayer, confession, and hope. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “Seventy Weeks” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |
| 10 | Final Vision | **Find the Faithful Path** | `find-path` | `path_of_moses.html` | Carry the sealed message to the riverbank. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Final Vision” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |

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
