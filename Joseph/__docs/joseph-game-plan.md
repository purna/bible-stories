# Joseph — Story Game Plan

## North star

Can betrayal be transformed into wise service and reconciliation? The game stays simple: one understandable action per chapter, a short narrative payoff, then a clear continue state. Mechanics support the text instead of rewriting it.

## Chapter plan

| # | Chapter | Simple playable action | Completion signal |
|---:|---|---|---|
| 1 | The Coloured Robe | Assemble the robe and notice the family tension. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 2 | Dreams and the Pit | Order the dreams, then find a path through betrayal. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 3 | Potiphar’s House | Manage the household with integrity. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 4 | The Prison | Care for prisoners and interpret two dreams. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 5 | Pharaoh’s Dreams | Pair cows and grain with seven-year cycles. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 6 | Storehouses | Plan grain reserves across Egypt. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 7 | The Brothers Arrive | Test recognition while distributing food. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 8 | Benjamin’s Cup | Trace the hidden cup and Judah’s offer. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 9 | Revealed | Choose the moment Joseph names himself. | The scene resolves, the scripture reference appears, and Continue unlocks. |
| 10 | Goshen | Settle the family and preserve the famine record. | The scene resolves, the scripture reference appears, and Continue unlocks. |

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
| 1 | The Coloured Robe | **Fit the Pieces** | Assemble the robe and notice the family tension. | Drag or select pieces and snap them into highlighted positions. | Inspect the outline, choose one piece, place it, then see the structure respond. | Complete the action, settle the scene, then reveal the canonical “The Coloured Robe” outcome and scripture reference. | An incorrect piece returns gently to the tray; its correct area glows after two attempts. |
| 2 | Dreams and the Pit | **See the Pattern** | Order the dreams, then find a path through betrayal. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “Dreams and the Pit” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |
| 3 | Potiphar’s House | **Keep the Balance** | Manage the household with integrity. | Drag limited tokens between two or three clearly labelled needs. | Notice which need is falling, make one adjustment, and keep every need inside the safe band for a short cycle. | Complete the action, settle the scene, then reveal the canonical “Potiphar’s House” outcome and scripture reference. | The game pauses before a meter empties and explains one helpful adjustment; no irreversible failure state. |
| 4 | The Prison | **Keep the Balance** | Care for prisoners and interpret two dreams. | Drag limited tokens between two or three clearly labelled needs. | Notice which need is falling, make one adjustment, and keep every need inside the safe band for a short cycle. | Complete the action, settle the scene, then reveal the canonical “The Prison” outcome and scripture reference. | The game pauses before a meter empties and explains one helpful adjustment; no irreversible failure state. |
| 5 | Pharaoh’s Dreams | **Gather with Care** | Pair cows and grain with seven-year cycles. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “Pharaoh’s Dreams” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 6 | Storehouses | **Find the Faithful Path** | Plan grain reserves across Egypt. | Tap/click adjacent waypoints or use arrow keys to move one step. | Read the environment, choose the next safe waypoint, and advance the group toward the destination. | Complete the action, settle the scene, then reveal the canonical “Storehouses” outcome and scripture reference. | A risky route pauses with a visual hint and returns the player to the last safe waypoint. |
| 7 | The Brothers Arrive | **Gather with Care** | Test recognition while distributing food. | Tap or drag the needed items into a basket, jar, pen, or marked area. | Read the short need list, collect one suitable item at a time, and stop when there is enough. | Complete the action, settle the scene, then reveal the canonical “The Brothers Arrive” outcome and scripture reference. | Extra or unsuitable items slide back with a calm hint; there is no timer unless the story requires urgency. |
| 8 | Benjamin’s Cup | **See the Pattern** | Trace the hidden cup and Judah’s offer. | Drag cards, symbols, people, or objects into matching slots. | Inspect visual clues, make one match, receive immediate context, and complete the small pattern. | Complete the action, settle the scene, then reveal the canonical “Benjamin’s Cup” outcome and scripture reference. | A mismatch remains available and highlights one relevant clue rather than marking failure. |
| 9 | Revealed | **Look Closely** | Choose the moment Joseph names himself. | Select evidence in the panel, then choose the statement it supports. | Inspect two or three clues, reveal their meaning, and make a considered response. | Complete the action, settle the scene, then reveal the canonical “Revealed” outcome and scripture reference. | Unexamined evidence remains highlighted; the player can revise before confirming. |
| 10 | Goshen | **Keep the Balance** | Settle the family and preserve the famine record. | Drag limited tokens between two or three clearly labelled needs. | Notice which need is falling, make one adjustment, and keep every need inside the safe band for a short cycle. | Complete the action, settle the scene, then reveal the canonical “Goshen” outcome and scripture reference. | The game pauses before a meter empties and explains one helpful adjustment; no irreversible failure state. |

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
