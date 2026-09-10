# Job — Story Game Plan

## North star

Can faith remain honest when suffering refuses a simple explanation? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Game engine type | Example prototype | Completion signal |
|---:|---|---|---|---|---|
| 1 | A Blameless Life | Tend Job’s household and practice generous justice. | `keep-balance` | `keep_balance_x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | The Accuser | Observe the heavenly challenge without controlling it. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Loss upon Loss | Receive each messenger and sit with the silence. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Seven Days | Keep vigil without offering explanations. | `keep-balance` | `keep_balance_x3_v2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Job Speaks | Build an honest lament from grief and protest. | `fit-pieces` | `fit_pieces_3x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | The Friends | Identify when counsel becomes accusation. | `match-it-up` | `match_it_up_4x4.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Elihu | Listen, test claims, and resist easy scoring. | `listen-respond` | `listen_respond_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Out of the Whirlwind | Explore questions about creation. | `tap-sequence` | `tap_sequence_4x1.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | Job Responds | Release the demand to master every answer. | `tap-sequence` | `tap_sequence_3x2.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Restoration | Rebuild community without treating new gifts as replacements. | `fit-pieces` | `fit_pieces_4x3.html` | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | A Blameless Life | **Keep the Balance** | `keep-balance` | `keep_balance_x3.html` | Tend Job’s household and practice generous justice. | Drag limited tokens between two or three clearly labelled needs. | Notice which need is falling, make one adjustment, and keep every need inside the safe band for a short cycle. | Complete the action, settle the scene, then reveal the canonical “A Blameless Life” outcome and scripture reference. | The game pauses before a meter empties and explains one helpful adjustment; no irreversible failure state. |
| 2 | The Accuser | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_4x1.html` | Observe the heavenly challenge without controlling it. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Accuser” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 3 | Loss upon Loss | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_3x2.html` | Receive each messenger and sit with the silence. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “Loss upon Loss” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 4 | Seven Days | **Keep the Balance** | `keep-balance` | `keep_balance_x3_v2.html` | Keep vigil without offering explanations. | Drag limited tokens between two or three clearly labelled needs. | Notice which need is falling, make one adjustment, and keep every need inside the safe band for a short cycle. | Complete the action, settle the scene, then reveal the canonical “Seven Days” outcome and scripture reference. | The game pauses before a meter empties and explains one helpful adjustment; no irreversible failure state. |
| 5 | Job Speaks | **Fit the Pieces** | `fit-pieces` | `fit_pieces_3x3.html` | Build an honest lament from grief and protest. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “Job Speaks” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 6 | The Friends | **See the Pattern** | `match-it-up` | `match_it_up_4x4.html` | Identify when counsel becomes accusation. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “The Friends” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |
| 7 | Elihu | **Listen and Respond** | `listen-respond` | `listen_respond_3x2.html` | Listen, test claims, and resist easy scoring. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “Elihu” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 8 | Out of the Whirlwind | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_4x1.html` | Explore questions about creation. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “Out of the Whirlwind” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 9 | Job Responds | **Complete the Story Beat** | `tap-sequence` | `tap_sequence_3x2.html` | Release the demand to master every answer. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “Job Responds” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 10 | Restoration | **Fit the Pieces** | `fit-pieces` | `fit_pieces_4x3.html` | Rebuild community without treating new gifts as replacements. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “Restoration” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |

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
