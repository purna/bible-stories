# 06 — UX Design & Flow

This stage is less code, more decisions with implementation consequences — onboarding, pacing across a 70-year in-story span, save/load, and accessibility. Depends on `02` (state) and `05` (UI) both being real enough to attach flows to.

## 1. Onboarding
Chapter 1 (The King's Table) is the tutorial by necessity — it's the first chapter and it's low-stakes relative to later ones. Concretely:
- Movement and interaction are taught through action, not a text tutorial overlay — the training-house setting naturally gates the player through a short walk before the first dialogue choice.
- The Set Apart/Fit In meter should not appear on screen until *after* the player has made their first real choice in Chapter 1, so its first appearance is legible ("oh, that's what that choice just did") rather than an unexplained bar at game start.
- The Vision Engine (interpretation minigame) is not introduced until Chapter 2 — don't front-load every system into Chapter 1 just because it's the tutorial chapter; let each mechanic arrive with the chapter that actually needs it.

## 2. Pacing across a 70-year span
Daniel's story covers roughly 605–536 BCE by the text's internal chronology (see `daniel-game-plan.md`'s Reference Appendix) — a meaningfully longer span than the David project handles in one game. This needs explicit UX treatment, not just narration:
- **Reign title cards** between chapters that cross a succession (per the design doc's recommendation to avoid over-specific dates): a full-screen card reading the new king's name and a short line of context, functioning as both a time-skip signal and a save-point.
- **Aging, communicated lightly:** small, non-intrusive visual cues (a slightly grayer palette on Daniel's sprite in later chapters) rather than a UI-visible "age" stat — this is scene-setting, not a mechanic, and shouldn't be gamified.
- **No real-time pressure across chapters** — the political-risk timer in vision scenes is a within-scene mechanic only; nothing about the overall pacing should make the player feel rushed through decades of story.

## 3. Save/load flow
Built directly on `stateManager.serialize()`/`deserialize()` from `01`:
- Autosave at every chapter boundary (aligns with `compactBefore()`'s snapshotting, so a save file is never mid-compaction).
- Manual save available at any reflection/prayer interlude beat — these are natural low-tension pause points already built into the design.
- Save slots should show the reign title-card text as the slot label, not a raw chapter number — "Under Darius" reads better in a save-slot list than "Chapter 6."

## 4. Difficulty & readability, not difficulty settings
There's no combat and no fail state, so "difficulty" here means *legibility under pressure* in vision scenes, not enemy stats:
- A single accessibility toggle to soften the Political Risk timer's pacing (more time per scene) for players who find the interpretation minigame's time pressure more stressful than engaging — framed as an accessibility option, not an "easy mode," since the narrative stakes shouldn't feel diminished even if the mechanical pressure is.
- Text size and dialogue-box contrast should be user-adjustable from a settings screen reachable from the pause menu at any point, not just at game start.
- Colorblind-safe accent colors for the three reigns (verify the gold/ash/silver palette from `05` against a deuteranopia simulation before locking it in).

## 5. Chapter 3's absent-protagonist structure
Flagged in the design doc as needing early prototyping, and it's as much a UX question as a content one: the player controls Daniel in every other chapter, but Daniel isn't in the Chapter 3 text at all. UX options to prototype and playtest against each other rather than assuming one up front:
- **(a) Observer mode:** player controls Daniel watching from a window/rooftop, unable to intervene — keeps player agency continuous but risks feeling like a demotion.
- **(b) No player character:** a short, non-interactive cinematic-style sequence, framed explicitly as "meanwhile" — honest about the structural gap rather than working around it.
- Whichever is chosen, test it specifically for whether players read the lack of control as a *design choice* (echoing the chapter's own theme — faithfulness witnessed, not performed) or as a *bug/missing feature*. That distinction is the whole risk of this chapter and won't show up in code review, only in playtesting.

## 6. Chapter 6's control shift
Also flagged for early prototyping: control shifts from Daniel to Darius once Daniel enters the den. UX-wise this needs a clear, unmistakable transition beat (camera pull-back, a title card, or both) — a silent handoff risks reading as a bug rather than the intentional tonal shift it's designed to be.

## 7. Verify this stage
Run a full playtest of Chapters 1–2 end to end with someone who hasn't seen the design docs, watching specifically for: whether the Set Apart/Fit In meter's first appearance makes sense unexplained, whether the reign title card reads as a save point without being told, and whether the vision-scene time pressure feels like tension or just frustration. All three are UX questions no amount of code review will catch.
