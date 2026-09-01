# Bible Stories — Improvement Plan

This is the implementation roadmap arising from the item 5 review. It covers the five playable comics—Adam, Daniel, Elijah, Jonah, and Noah—and establishes foundations that David and Moses can inherit.

## Outcome

Each story should feel like a playable comic rather than a slideshow with optional buttons. A successful story will have:

1. A clear emotional and visual identity.
2. One signature mechanic derived from its central question.
3. Choices that cannot be skipped accidentally and produce visible consequences.
4. A foreground character or object anchoring every 3D/SVG scene.
5. Instrumental chapter music that supports reading and responds to important interactions.
6. Equivalent keyboard, pointer, and touch access.
7. Reliable loading, saving, offline behaviour, and error recovery.

## Architecture Decision

Do **not** rewrite all stories in a new engine. Evolve the existing system:

- **Three.js:** Adam, Daniel, and Jonah scenes where depth and camera movement matter.
- **SVG/DOM/Canvas:** Elijah and Noah, plus text, choices, HUDs, prompts, and accessible controls in every story.
- **Shared simulation state:** choices, progress, timers, chapter completion, and saves must live outside render objects.
- **Shared input boundary:** keyboard, touch, pointer, modal, choice, and game states route through one action map.
- **Shared asset manifests:** stable asset keys for SVG, characters, music, ambience, effects, maps, and textures.
- **OGG-first audio:** OGG for seamless loops, MP3 as fallback.

The common player shell should eventually provide:

```text
StoryShell
├── AssetLoader       story data, SVG, maps, audio and fallbacks
├── InputManager      next, previous, confirm, cancel, move and pause
├── ModalManager      info, pause and focus/input locking
├── ChoiceEngine      required choices, state effects and consequence text
├── AudioDirector     music, ambience, effects, ducking and chapter stems
├── SaveManager       chapter, line, decisions, meters and accessibility
└── Diagnostics       loading errors, missing assets and optional FPS panel
```

## Phase 0 — Shared Blockers

**Priority: Critical. Complete before adding more game scenes.**

### 0.1 Supported loading path

- Treat deployment or a local static preview server as the canonical runtime.
- Detect `file://` and show a friendly launch explanation instead of a silent blank story.
- Add visible recovery UI when story JSON, SVG, music, or a map fails.
- Decide whether a generated standalone bundle is required for true offline `file://` use.
- Verify all five stories from the root landing page and their direct URLs.

**Acceptance:** No story can leave the player on an unresponsive cover or empty panel without an explanation and recovery action.

### 0.2 Unified interaction lock

- Add explicit modes: `reading`, `choice`, `game`, `modal`, `transition`, and `paused`.
- Disable story navigation while a choice, game prompt, or info modal is active.
- Prevent a 3D drag from also becoming a story swipe.
- Ignore navigation keys originating from buttons, links, selects, or modal content.

**Acceptance:** A single gesture performs one action only; unanswered choices cannot be bypassed accidentally.

### 0.3 Accessible controls

- Provide keyboard equivalents for every pointer interaction.
- Use real buttons for hotspots where DOM interaction is appropriate.
- Add visible focus states, useful labels, and status announcements.
- Respect reduced-motion preferences in every story, including particles and camera motion.
- Verify touch targets are at least 44×44 pixels.

**Acceptance:** Every story and signature game loop is completable using keyboard alone and touch alone.

### 0.4 Shared verification harness

- Add smoke tests for cover → chapter → choice → next chapter → replay.
- Add checks for missing story data, SVGs, audio pairs, maps, and character files.
- Capture desktop and mobile screenshots for one representative state per chapter.
- Add console-error and WebGL-context checks.

**Acceptance:** A repeatable test reports failures per story and preserves screenshot evidence.

## Phase 1 — Repair Existing Game Systems

### 1.1 Jonah playable panels

- Count only required hotspots when determining completion.
- Stop checking hotspots and rendering continuously while the game overlay is hidden.
- Replace generic blue spheres with illustrated story objects and comic-outline glows.
- Add walking/turning feedback to Jonah.
- Display a short narrative response for every discovered hotspot.
- Provide a graceful illustrated fallback when WebGL or map loading fails.
- Make hold-to-pray progressively change light, sound, compass, and environmental motion.

**Acceptance:** All four panels require their intended story moments, communicate what each interaction means, and return cleanly to the comic.

### 1.2 Daniel vision system

- Replace fragment `<div>` hotspots with keyboard-accessible controls.
- Show meaningful-fragment progress separately from distortion/decoys.
- Prevent counters such as `6 / 5`.
- Display the remaining time from the start, with a non-visual warning option.
- Replace obvious `?` decoys with plausible but thematically incorrect symbols.
- Remove unexplained random penalties or expose clear “rushing clouds discernment” feedback.
- Add a short assembly step so fragments form an interpretation rather than acting as collectibles only.

**Acceptance:** Success and failure are understandable, controllable, accessible, and narratively tied to discernment.

## Phase 2 — One Signature Loop per Story

Build and playtest one polished vertical slice for each story before adding secondary minigames.

### Adam — Creation Through Ordering

**Player fantasy:** Participate in a world moving from chaos into ordered life.

- Place or sequence light, sky, land, lights, creatures, and humanity.
- Each successful step changes the full background, foreground focus, ambience, and music stem.
- Avoid failure or scoring; incorrect placement receives a gentle visual clue.
- Reuse the creation/promise motif from the music source of truth.

**Vertical-slice chapter:** Creation.

### Daniel — Discern and Deliver

**Player fantasy:** Read a dangerous vision accurately and decide how plainly to speak.

- Gather meaningful symbols.
- Arrange them into a coherent interpretation.
- Choose plain or softened delivery.
- Carry accuracy and delivery consequences into later court dialogue.

**Vertical-slice chapter:** The Statue Dream.

### Elijah — Hear the Quiet Voice

**Player fantasy:** Tune out fear, spectacle, and noise until the quiet instruction becomes clear.

- Layer wind, earthquake, fire, threat, and despair as separate visual/audio noise.
- Let the player reduce or move layers using a simple two-axis control.
- Faith improves signal clarity; despair increases starting noise without making completion impossible.
- Finish with near-silence and a clear, gentle motif rather than a reward fanfare.

**Vertical-slice chapter:** The Still Small Voice.

### Jonah — Walk Through the Story

**Player fantasy:** Physically encounter the moments Jonah would rather avoid.

- Keep compact isometric exploration.
- Turn hotspots into actual props, characters, and environmental events.
- Use interaction verbs appropriate to each act: inspect, help, pray, proclaim, listen.
- Let justice/mercy choices alter colour, sound, NPC response, and the final hillside scene.

**Vertical-slice chapter:** Nineveh, because it combines exploration, proclamation, crowds, and moral response.

### Noah — Care for the Ark

**Player fantasy:** Maintain a living refuge through repeated, patient acts of care.

- Match animal pairs and guide them to suitable pens.
- Balance food, water, cleanliness, and animal calm without turning the story into frantic resource management.
- Show accumulated progress visually inside the ark.
- Use family members as helpers, not passive background figures.

**Vertical-slice chapter:** The Gathering.

## Phase 3 — Story-Specific Expansion

### Adam

1. Split or repace the overloaded Exile act.
2. Treat “West of the Divide” as an epilogue, not a full chapter.
3. Add animal naming as a short observation/association interaction.
4. Make temptation a deliberate attention mechanic: competing promises, not a reflex test.
5. Carry chosen emphasis—trust, curiosity, blame, honesty—into later captions without changing the canonical outcome.

### Daniel

1. Furnace: maintain conviction while heat and crowd pressure rise; no combat.
2. Writing on the wall: improved vision loop with an older, steadier Daniel.
3. Lions’ den: quiet prayer/routine interaction followed by a low-light listening scene.
4. Make reign state visible through court behaviour rather than tooltips alone.
5. Decide whether the unused sixth music track supports an epilogue; otherwise archive it from the active manifest.

### Elijah

1. Implement Faith, Despair, and royal Wrath as descriptive state.
2. Widow: share scarce flour/oil through a simple daily provision loop.
3. Carmel: repair altar, place stones, soak the sacrifice, pray, then wait.
4. Flight: slow traversal and rest rather than an action chase.
5. Chariot: pass the mantle through a final observation/response scene.

### Jonah

1. Ship: teach movement and make sailors/cargo readable foreground anchors.
2. Whale: collect hope fragments, then complete the adaptive prayer interaction.
3. Nineveh: populate streets and show repentance spreading through visible NPC changes.
4. Hillside: make shade, heat, plant, and worm mechanically felt.
5. Use the final choice and compass summary to change the closing composition without inventing a different biblical ending.

### Noah

1. Blueprint: measure and place the ark’s main structural elements.
2. Build: show years passing as accumulated construction, weathering, and family ageing.
3. Door/Flood: care and endurance loop with no combat and no sensationalised loss.
4. Waiting: send raven and dove, observe return states, and record signs of land.
5. Dry Ground: release animals in a visually rewarding but controlled sequence.
6. Vineyard: use perspective and family response choices to explore dignity and grace.

## Phase 4 — Foreground and Asset Pass

For every chapter, record four asset layers:

| Layer | Requirement |
|---|---|
| Background | 3D/SVG environment establishing place and weather. |
| Midground | Architecture, terrain, crowds, animals, or environmental movement. |
| Foreground focus | One character, prop, creature, or interactive object carrying the scene’s meaning. |
| Feedback layer | Glow, outline, particles, animation, caption, and sound showing interaction state. |

Use each story’s Texture Forge and Character Generator. Noah additionally uses Animal Pair Generator. Create one approved reference asset before producing variations, and maintain consistent scale, outline weight, palette, and lighting.

## Phase 5 — Choice and Consequence Pass

- Define every choice as **expression**, **approach**, or **state-changing decision**.
- Remove choices whose options produce indistinguishable results.
- Never offer a fake “good ending” where the canonical story requires failure.
- Store choice results in shared serializable state.
- Show at least one later visual, dialogue, music, or gameplay consequence.
- Provide reset/replay controls and a clear indication when choices persist.

## Phase 6 — Music and Sound Integration

- Follow each comic’s `__docs/*-design-source-of-truth.md` chapter map.
- Produce seamless OGG and MP3 pairs using the canonical filenames.
- Separate music, ambience, story stingers, and interface effects.
- Add music ducking beneath dense captions and choice prompts.
- Use stems only where gameplay state materially changes the scene.
- Keep `ping_pong.mp3` for UI feedback; create story-specific sounds for meaningful actions.
- Test loops for clicks, silence, drift, volume jumps, and mobile autoplay restrictions.

## Phase 7 — Final QA and Release Gate

Test every story at desktop and mobile sizes for:

- Cover and first actionable state.
- Full keyboard-only and touch-only completion.
- Choice locking and consequence persistence.
- Info/audio/modal input isolation.
- Chapter selection, previous/next navigation, replay, and save recovery.
- Music fallback, loop seams, mute persistence, and button effects.
- Missing assets and offline behaviour.
- Reduced motion and focus visibility.
- WebGL context loss and illustrated fallback.
- HUD obstruction, foreground readability, text contrast, and safe areas.

No story is release-ready until it completes without console errors and has an approved screenshot for every chapter at both desktop and mobile widths.

## Recommended Delivery Order

### Completion status — 1 September 2026

- **1. Shared blockers and test harness — complete.** Six explicit runtime modes, modal/choice/game input isolation, friendly loading recovery, local/offline asset verification, desktop/mobile smoke checks, per-chapter screenshots, console checks, and WebGL/fallback boot coverage are in place.
- **2. Jonah completion fix and Daniel vision repair — complete.** Jonah counts required moments only, suspends hidden rendering, uses distinct inked story props, reports narrative feedback, progressively changes the prayer panel, offers an illustrated failure fallback, and boots/returns from all four panels. Daniel provides accessible fragments, meaningful progress, timer/clarity announcements, plausible decoys, deterministic distortion, an ordered interpretation assembly step, and delivery consequences.
- **3. Elijah Hearing vertical slice — complete.** The Horeb chapter now separates wind, earthquake, fire, threat, and despair into responsive comic layers; provides a pointer, keyboard, and slider-accessible two-axis tuner; carries faith/despair into starting difficulty without blocking completion; fades the layered SFX into near-silence; and restores story navigation after completion or skip.

1. **Shared blockers and test harness.**
2. **Jonah completion fix and Daniel vision repair.**
3. **Elijah Hearing vertical slice.**
4. **Noah Gathering vertical slice.**
5. **Adam Creation vertical slice.**
6. **Jonah Nineveh polish.**
7. **Daniel Statue Dream polish.**
8. **Foreground asset pass across all chapters.**
9. **Choice/consequence pass.**
10. **Music production and adaptive integration.**
11. **Responsive, accessibility, performance, and release QA.**

This order fixes broken foundations first, validates the most distinctive mechanics early, and prevents large-scale asset or music production from being attached to interactions that may still change.
