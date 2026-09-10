# Esther — Story Game Plan

## North star

Will hidden identity become courageous advocacy at the right moment? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | The Banquet | Navigate the palace feast and hear Vashti’s refusal. | `find-path` | `find_path_6x6.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | A New Queen | Prepare Esther while protecting her identity. | `gather-with-care` | `good_samaritan.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | The Gate Plot | Carry Mordecai’s warning into the royal record. | `find-path` | `find_path_18x9.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Haman’s Decree | Trace the decree as it spreads across the empire. | `find-path` | `find_path_9x9.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | For Such a Time | Fast, gather courage, and approach the throne. | `gather-with-care` | `manna_drop.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | The First Banquet | Invite the king and Haman without revealing too soon. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Sleepless Night | Find Mordecai’s forgotten service in the chronicles. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | The Second Banquet | Name the threat clearly at the decisive moment. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | A New Decree | Send defensive orders before the deadline. | `match-it-up` | `match_it_up_3x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Purim | Assemble gifts, food, and remembrance for every district. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | The Banquet | **Find the Faithful Path** | `find-path` | `find_path_6x6.html` | Navigate the palace feast and hear Vashti’s refusal. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “The Banquet” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 2 | A New Queen | **Gather with Care** | `gather-with-care` | `good_samaritan.html` | Prepare Esther while protecting her identity. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “A New Queen” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 3 | The Gate Plot | **Find the Faithful Path** | `find-path` | `find_path_18x9.html` | Carry Mordecai’s warning into the royal record. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “The Gate Plot” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 4 | Haman’s Decree | **Find the Faithful Path** | `find-path` | `find_path_9x9.html` | Trace the decree as it spreads across the empire. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Haman’s Decree” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 5 | For Such a Time | **Gather with Care** | `gather-with-care` | `manna_drop.html` | Fast, gather courage, and approach the throne. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “For Such a Time” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 6 | The First Banquet | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_4x1.html` | Invite the king and Haman without revealing too soon. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The First Banquet” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 7 | The Sleepless Night | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_3x2.html` | Find Mordecai’s forgotten service in the chronicles. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Sleepless Night” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 8 | The Second Banquet | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_4x1.html` | Name the threat clearly at the decisive moment. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Second Banquet” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 9 | A New Decree | **See the Pattern** | `match-it-up` | `match_it_up_3x4.html` | Send defensive orders before the deadline. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “A New Decree” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |
| 10 | Purim | **Fit the Pieces** | `fit-pieces` | `fit_pieces_4x3.html` | Assemble gifts, food, and remembrance for every district. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “Purim” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |

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
