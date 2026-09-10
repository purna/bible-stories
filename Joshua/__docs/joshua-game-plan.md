# Joshua — Story Game Plan

## North star

Will courage remain rooted in instruction rather than conquest for its own sake? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | Be Strong | Meditate on the instruction before crossing. | `find-path` | `find_path_6x6.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | Rahab and the Spies | Hide the scouts and mark the scarlet cord. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Crossing Jordan | Carry twelve memorial stones from the riverbed. | `find-path` | `path_of_moses.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Jericho | March the pattern, sound the trumpets, protect Rahab. | `ready-then-act` | `ready_then_act_multibar_balanced.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Achan’s Hidden Goods | Trace the community’s loss to the buried objects. | `match-it-up` | `match_it_up_3x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Ai | Set the ambush without repeating earlier presumption. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Gibeonites | Inspect the worn supplies and face a rushed oath. | `look-closely` | `look_closely_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | The Long Campaign | Resolve territory challenges without spectacle. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | Allot the Land | Distribute inheritance among tribes. | `keep-balance` | `keep_balance_x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Choose This Day | Place household stones beside the covenant witness. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | Be Strong | **Find the Faithful Path** | `find-path` | `find_path_6x6.html` | Meditate on the instruction before crossing. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Be Strong” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 2 | Rahab and the Spies | **Watch and Move** | `watch-and-move` | `watch_move_river_crossing_easy.html` | Hide the scouts and mark the scarlet cord. | Hold to observe; release or tap a destination when sight-lines are clear. | Observe a repeating movement pattern, move during a safe opening, and reach the marked point. | Complete the action, settle the scene, then reveal the canonical “Rahab and the Spies” outcome and scripture reference. | Detection freezes the moment and rewinds to the previous cover point without losing progress. |
| 3 | Crossing Jordan | **Find the Faithful Path** | `find-path` | `path_of_moses.html` | Carry twelve memorial stones from the riverbed. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Crossing Jordan” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 4 | Jericho | **Ready, Then Act** | `ready-then-act` | `ready_then_act_multibar_balanced.html` | March the pattern, sound the trumpets, protect Rahab. | Press/hold and release inside a broad highlighted timing window. | Watch a slow readable rhythm, prepare the action, and release once at the story’s decisive beat. | Complete the action, settle the scene, then reveal the canonical “Jericho” outcome and scripture reference. | The timing window widens after a miss and reduced-motion mode replaces movement with a clear progress ring. |
| 5 | Achan’s Hidden Goods | **See the Pattern** | `match-it-up` | `match_it_up_3x4.html` | Trace the community’s loss to the buried objects. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “Achan’s Hidden Goods” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |
| 6 | Ai | **Watch and Move** | `watch-and-move` | `watch_move_river_crossing_easy.html` | Set the ambush without repeating earlier presumption. | Hold to observe; release or tap a destination when sight-lines are clear. | Observe a repeating movement pattern, move during a safe opening, and reach the marked point. | Complete the action, settle the scene, then reveal the canonical “Ai” outcome and scripture reference. | Detection freezes the moment and rewinds to the previous cover point without losing progress. |
| 7 | The Gibeonites | **Look Closely** | `look-closely` | `look_closely_3x3.html` | Inspect the worn supplies and face a rushed oath. | Select evidence in the panel, then choose the statement it supports. | Inspect two or three clues, reveal their meaning, and make a considered response. | Complete the action, settle the scene, then reveal the canonical “The Gibeonites” outcome and scripture reference. | Unexamined evidence remains highlighted; the player can revise before confirming. |
| 8 | The Long Campaign | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_4x1.html` | Resolve territory challenges without spectacle. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Long Campaign” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 9 | Allot the Land | **Keep the Balance** | `keep-balance` | `keep_balance_x3.html` | Distribute inheritance among tribes. | Drag limited tokens between two or three clearly labelled needs. | Notice which need is falling, make one adjustment, and keep every need inside the safe band for a short cycle. | Complete the action, settle the scene, then reveal the canonical “Allot the Land” outcome and scripture reference. | The game pauses before a meter empties and explains one helpful adjustment; no irreversible failure state. |
| 10 | Choose This Day | **Fit the Pieces** | `fit-pieces` | `fit_pieces_4x3.html` | Place household stones beside the covenant witness. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “Choose This Day” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |

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
