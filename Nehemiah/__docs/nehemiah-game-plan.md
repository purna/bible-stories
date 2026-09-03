# Nehemiah — Story Game Plan

## North star

Can prayerful planning rebuild both walls and communal justice? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Completion signal |
|---:|---|---|---|
| 1 | Bad News | Map Jerusalem’s broken gates while Nehemiah prays. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | Before the King | Choose a clear request and realistic resources. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Night Inspection | Survey ruined walls without alerting opponents. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Rise and Build | Assign families to adjacent wall sections. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Sword and Trowel | Balance guarding with construction. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | The Outcry | Cancel exploitative debts and restore fields. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | Plots and Rumours | Recognise distractions designed to stop the work. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | The Wall Completed | Close the final gap and set gatekeepers. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | The Book Read | Rebuild the platform and help the people understand. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Reform | Inspect storerooms and restore shared commitments. | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | Bad News | **Listen and Respond** | Map Jerusalem’s broken gates while Nehemiah prays. | Choose or hold the clearest phrase/sound when the visual noise settles. | Wait through competing signals, identify the meaningful cue, then respond with the matching action or phrase. | Complete the action, settle the scene, then reveal the canonical “Bad News” outcome and scripture reference. | Noise reduces gradually after a missed cue; captions and a visual pulse always provide equivalent information. |
| 2 | Before the King | **Look Closely** | Choose a clear request and realistic resources. | Select evidence in the panel, then choose the statement it supports. | Inspect two or three clues, reveal their meaning, and make a considered response. | Complete the action, settle the scene, then reveal the canonical “Before the King” outcome and scripture reference. | Unexamined evidence remains highlighted; the player can revise before confirming. |
| 3 | Night Inspection | **Watch and Move** | Survey ruined walls without alerting opponents. | Hold to observe; release or tap a destination when sight-lines are clear. | Observe a repeating movement pattern, move during a safe opening, and reach the marked point. | Complete the action, settle the scene, then reveal the canonical “Night Inspection” outcome and scripture reference. | Detection freezes the moment and rewinds to the previous cover point without losing progress. |
| 4 | Rise and Build | **Fit the Pieces** | Assign families to adjacent wall sections. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “Rise and Build” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 5 | Sword and Trowel | **Keep the Balance** | Balance guarding with construction. | Drag limited tokens between two or three clearly labelled needs. | Notice which need is falling, make one adjustment, and keep every need inside the safe band for a short cycle. | Complete the action, settle the scene, then reveal the canonical “Sword and Trowel” outcome and scripture reference. | The game pauses before a meter empties and explains one helpful adjustment; no irreversible failure state. |
| 6 | The Outcry | **Keep the Balance** | Cancel exploitative debts and restore fields. | Drag limited tokens between two or three clearly labelled needs. | Notice which need is falling, make one adjustment, and keep every need inside the safe band for a short cycle. | Complete the action, settle the scene, then reveal the canonical “The Outcry” outcome and scripture reference. | The game pauses before a meter empties and explains one helpful adjustment; no irreversible failure state. |
| 7 | Plots and Rumours | **See the Pattern** | Recognise distractions designed to stop the work. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “Plots and Rumours” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |
| 8 | The Wall Completed | **Complete the Story Beat** | Close the final gap and set gatekeepers. | Tap/click the highlighted story objects in a clear sequence. | Observe the panel, perform three small actions, and watch the canonical beat resolve. | Complete the action, settle the scene, then reveal the canonical “The Wall Completed” outcome and scripture reference. | The next valid object gains an outline after a pause; progress is never reset. |
| 9 | The Book Read | **Fit the Pieces** | Rebuild the platform and help the people understand. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “The Book Read” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 10 | Reform | **Keep the Balance** | Inspect storerooms and restore shared commitments. | Drag limited tokens between two or three clearly labelled needs. | Notice which need is falling, make one adjustment, and keep every need inside the safe band for a short cycle. | Complete the action, settle the scene, then reveal the canonical “Reform” outcome and scripture reference. | The game pauses before a meter empties and explains one helpful adjustment; no irreversible failure state. |

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
