# Abraham — Story Game Plan

## North star

Will Abraham trust the promise when fulfilment seems impossible? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Completion signal |
|---:|---|---|---|
| 1 | The Call | Follow the road markers out of Haran. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | Egypt and Return | Choose honest repairs after a fearful mistake. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Lot Chooses | Survey the land and give Lot first choice. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | Rescue of Lot | Plan a fast night rescue without taking spoil. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Covenant Stars | Trace the promised constellation. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Hagar in the Wilderness | Find water and listen before acting. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Visitors | Prepare hospitality before the guests depart. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Sodom and Gomorrah | Guide Lot’s household away without looking back. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | Isaac Is Born | Assemble a celebration tent. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Moriah | Climb, gather wood, and respond to the provided ram. | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | The Call | **Find the Faithful Path** | Follow the road markers out of Haran. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “The Call” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 2 | Egypt and Return | **Fit the Pieces** | Choose honest repairs after a fearful mistake. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “Egypt and Return” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 3 | Lot Chooses | **Watch and Move** | Survey the land and give Lot first choice. | Hold to observe; release or tap a destination when sight-lines are clear. | Observe a repeating movement pattern, move during a safe opening, and reach the marked point. | Complete the action, settle the scene, then reveal the canonical “Lot Chooses” outcome and scripture reference. | Detection freezes the moment and rewinds to the previous cover point without losing progress. |
| 4 | Rescue of Lot | **Watch and Move** | Plan a fast night rescue without taking spoil. | Hold to observe; release or tap a destination when sight-lines are clear. | Observe a repeating movement pattern, move during a safe opening, and reach the marked point. | Complete the action, settle the scene, then reveal the canonical “Rescue of Lot” outcome and scripture reference. | Detection freezes the moment and rewinds to the previous cover point without losing progress. |
| 5 | Covenant Stars | **See the Pattern** | Trace the promised constellation. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “Covenant Stars” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |
| 6 | Hagar in the Wilderness | **Gather with Care** | Find water and listen before acting. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “Hagar in the Wilderness” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 7 | The Visitors | **Gather with Care** | Prepare hospitality before the guests depart. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “The Visitors” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 8 | Sodom and Gomorrah | **Find the Faithful Path** | Guide Lot’s household away without looking back. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Sodom and Gomorrah” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 9 | Isaac Is Born | **Fit the Pieces** | Assemble a celebration tent. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “Isaac Is Born” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 10 | Moriah | **Find the Faithful Path** | Climb, gather wood, and respond to the provided ram. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Moriah” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |

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
