# Jacob — Story Game Plan

## North star

Can a grasping deceiver become someone who receives blessing without stealing it? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | The Birthright | Weigh hunger against a lasting inheritance. | `look-closely` | `look_closely_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Stolen Blessing | Assemble the disguise, then witness its cost. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Bethel | Build the stone pillar after the ladder dream. | `fit-pieces` | `fit_pieces_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Rachel at the Well | Move the stone and water the flock. | `look-closely` | `sheep_count.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Laban’s Bargain | Track changing wages and wedding promises. | `watch-and-move` | `watch_move_river_crossing_easy.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | The Flocks | Sort speckled and spotted animals fairly. | `look-closely` | `sheep_count.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Leaving Haran | Pack the camp before Laban catches up. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | The Night Wrestling | Hold on through the night and receive a new name. | `ready-then-act` | `ready_then_act_multibar_balanced.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | Meeting Esau | Arrange gifts, then step forward unarmed. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Joseph’s Coats | Recognise favouritism forming in the household. | `match-it-up` | `match_it_up_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | The Birthright | **Look Closely** | `look-closely` | `look_closely_3x3.html` | Weigh hunger against a lasting inheritance. | Select evidence in the panel, then choose the statement it supports. | Inspect two or three clues, reveal their meaning, and make a considered response. | Complete the action, settle the scene, then reveal the canonical “The Birthright” outcome and scripture reference. | Unexamined evidence remains highlighted; the player can revise before confirming. |
| 2 | The Stolen Blessing | **Fit the Pieces** | `fit-pieces` | `fit_pieces_4x3.html` | Assemble the disguise, then witness its cost. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “The Stolen Blessing” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 3 | Bethel | **Fit the Pieces** | `fit-pieces` | `fit_pieces_4x4.html` | Build the stone pillar after the ladder dream. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “Bethel” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 4 | Rachel at the Well | **Gather with Care** | `look-closely` | `sheep_count.html` | Move the stone and water the flock. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “Rachel at the Well” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 5 | Laban’s Bargain | **Watch and Move** | `watch-and-move` | `watch_move_river_crossing_easy.html` | Track changing wages and wedding promises. | Hold to observe; release or tap a destination when sight-lines are clear. | Observe a repeating movement pattern, move during a safe opening, and reach the marked point. | Complete the action, settle the scene, then reveal the canonical “Laban’s Bargain” outcome and scripture reference. | Detection freezes the moment and rewinds to the previous cover point without losing progress. |
| 6 | The Flocks | **See the Pattern** | `look-closely` | `sheep_count.html` | Sort speckled and spotted animals fairly. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “The Flocks” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |
| 7 | Leaving Haran | **Gather with Care** | `gather-with-care` | `manna_drop.html` | Pack the camp before Laban catches up. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “Leaving Haran” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 8 | The Night Wrestling | **Ready, Then Act** | `ready-then-act` | `ready_then_act_multibar_balanced.html` | Hold on through the night and receive a new name. | Press/hold and release inside a broad highlighted timing window. | Watch a slow readable rhythm, prepare the action, and release once at the story’s decisive beat. | Complete the action, settle the scene, then reveal the canonical “The Night Wrestling” outcome and scripture reference. | The timing window widens after a miss and reduced-motion mode replaces movement with a clear progress ring. |
| 9 | Meeting Esau | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_3x2.html` | Arrange gifts, then step forward unarmed. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “Meeting Esau” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 10 | Joseph’s Coats | **See the Pattern** | `match-it-up` | `match_it_up_4x4.html` | Recognise favouritism forming in the household. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “Joseph’s Coats” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |

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
