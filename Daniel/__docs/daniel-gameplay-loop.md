# Daniel: Discernment & Interpretation — Core Gameplay Loop

## Core Concept

The player is Daniel, an exile in a foreign court who must survive — and eventually rise — by correctly reading things no one else can read: dreams, omens, and finally a hand writing on a wall. Each interpretation scene presents fragmented, symbolic imagery that must be pieced together into a true reading, under real political stakes: get it wrong (or refuse to try) and the penalty in the source text is death, not just for Daniel but often for the whole class of court wise men he's grouped with.

The core loop is a balance between **discernment** (patient, prayer-grounded insight, gathered rather than guessed) and **political pressure** (a king's impatience, a rival's presence, a closing window of time). Success requires not cleverness alone, but the will to deliver a true reading even when a flattering, softened, or evasive one would be safer.

The challenge is managing a loop where taking the easy read today makes the next interpretation land with less weight — Daniel's credibility is a resource that depletes under compromise and only slowly rebuilds.

---

## Resources

### Symbol Fragments (Per-Scene)
- **Gathered Fragments:** Pieces of imagery collected during the scene's Discernment Phase (a tile-based dream-space or memory-space distinct from the normal court map) — a beast, a number, a metal, a word. Each correct fragment nudges the scene toward its true interpretation.
- **Distortion:** Fragments can be misread if gathered too quickly or under too much pressure; a misread fragment doesn't block progress but pulls the eventual interpretation toward a plausible-but-wrong reading, which the player may not discover is wrong until the delivery phase.

### Discernment (Persistent)
- A slow-building resource, raised by the prayer/reflection interludes between chapters and by delivering true interpretations even at cost.
- High Discernment shortens the time needed to correctly identify fragments in future scenes (Daniel reads faster and more confidently the more consistently he's practiced telling the truth).
- Spent implicitly, not explicitly: it's not a currency the player consciously allocates, but a multiplier the game tracks quietly, closer to David's "Trust in the Lord" meter than to a spendable stat.

### Court Favor & Suspicion (Persistent, per-reign)
- **Favor** with the current king rises when an interpretation is both accurate and well-received; it does not automatically transfer between kings (Nebuchadnezzar's trust in Daniel means little to Belshazzar).
- **Suspicion** among rival officials rises independently of accuracy — a correct, unflattering interpretation can *raise* Suspicion even while it's the right call, because it makes Daniel look dangerously capable to people already looking for a reason to move against him. This is the resource that eventually becomes the entire plot of Chapter 6.

### Political Risk (Per-Scene Timer)
- Each interpretation scene runs against a visible or felt countdown — an impatient king, a feast still in progress, guards already summoned for the other wise men's execution (Chapter 2 explicitly stakes their lives on Daniel's answer). The timer doesn't kill the player on expiry; it forces the delivery phase to begin with whatever fragments have been gathered, correct or not.

---

## Scene Flow

### Step 1: Vision Onset
The scene opens with the king (or, in Chapter 5, the room itself) presenting the symbolic trigger — a dream half-remembered, a tree, a disembodied hand. The political-risk timer begins.
- **Stakes Framing:** The game states plainly what failure costs in this scene (execution of the wise men as a class; loss of standing; in Chapter 5, nothing left to lose at all) so the player feels the weight before gathering begins.

### Step 2: Discernment Phase
The player moves Daniel through a dream-logic space — visually and sonically distinct from the normal court tilemap, using the low-pass "dream bus" audio routing — collecting Symbol Fragments.
- Movement here doesn't cost health (unlike a survival loop); it costs *time* against the Political Risk timer.
- Fragments gathered too fast (button-mashed rather than approached deliberately) risk Distortion.
- Higher persistent Discernment reduces both the time-cost per fragment and the Distortion risk, rewarding a player who's been consistently truthful across prior scenes.

### Step 3: Interpretation Phase
Once enough fragments are gathered (or the timer forces the issue), the player assembles a reading and chooses *how* to deliver it — not just *what* it means.
- **Delivery choices** are the real decision point, echoing the Fit In / Set Apart meter from the main design doc: deliver the true reading plainly (raises Discernment, may raise Suspicion), soften it to protect the king's feelings or Daniel's own position (preserves Favor short-term, dents Discernment), or — if Distortion was high — risk delivering a genuinely wrong reading.

### Step 4: Resolution
The court reacts. Favor and Suspicion update for the current reign; Discernment updates globally; any narrative consequence flags are written to the append-only state log for later chapters to reference.
- **True + Plain delivery:** Best long-term outcome (Discernment up), but not risk-free (Suspicion can still rise).
- **True + Softened delivery:** Favor protected, Discernment dented — the "believed advantage, deferred cost" pattern from the main design doc.
- **Wrong delivery (from high Distortion):** No punishing game-over; instead a lingering consequence (a king's trust shaken, a detail a rival later exploits), since Daniel's story doesn't include him actually failing an interpretation, and the mechanic shouldn't invent a false-failure path just to have stakes.

---

## Scoring / Progression

There's no numeric score in the Manna Collector sense — this is a narrative game, not a survival-loop scorer — but the same underlying feedback shape applies:
- **Consistent true interpretations** compound: Discernment rises, future scenes get faster and clearer, and the game increasingly trusts the player with more ambiguous fragment sets (less hand-holding on what's a "real" symbol vs. a red herring).
- **Repeated softened deliveries** compound the other way: scenes stay mechanically the same, but dialogue options in *non-vision* scenes start reflecting a Daniel whose word carries less automatic weight — other characters start asking him to prove things he used to simply be trusted on.

---

## Win Condition

Not endless — this loop recurs within a fixed six-chapter narrative (Chapters 2, 4, and 5 are full Interpretation scenes; Chapter 1's food test and Chapter 6's prayer routine are thematically related "discipline" loops using the same Discernment resource but without the fragment-gathering minigame). There's no failure state that ends the game; the loop exists to make the *cost* of each chapter's choice legible in a way pure dialogue trees can't, not to gate progression.

---

## Core Feedback Loop

1. **Rushing the Discernment Phase:** Leads to Distortion, risking a wrong or muddled reading — not death, but a narrative cost that surfaces later.
2. **Delivering true readings plainly:** Builds Discernment and long-term narrative trust, but isn't automatically safe — Suspicion can rise precisely because Daniel is right and visibly capable.
3. **Softening true readings:** Protects short-term Favor at the cost of Discernment — the "easy win" that quietly writes a flag for later chapters.
4. **High persistent Discernment:** Makes future scenes faster and clearer to read, mechanically rewarding a player who's played Daniel consistently, without ever making the choice mechanically free.

This mirrors the main design doc's Set Apart / Fit In philosophy at the level of a single recurring mechanic: no choice is punished outright, but nothing is free either, and the cost of the easy path is deferred rather than erased.

---

## Key Systems

1. **Vision/Dream Space Rendering:** A visually distinct tile-space (fog, fragment glow, dream-bus audio) layered on the same PixiJS engine as normal court scenes.
2. **Symbol Library:** Data-driven table (`symbolLibrary.js`) of valid fragments and their meanings per scene, authored via the Vision Designer tool.
3. **Per-Reign Favor/Suspicion State:** Persistent tracking split by king, feeding both this loop and ordinary dialogue scenes.
4. **Discernment as a Cross-Scene Multiplier:** A single persistent value read by both the Vision Engine (fragment timing/Distortion) and the Dialogue Engine (how much weight NPCs give Daniel's word).
5. **UI & HUD:** Minimal by design during vision scenes — a fragment counter and an ambient sense of time pressure (audio/visual, not a hard numeric countdown), keeping the dream-logic tone rather than turning it into a puzzle-timer UI.
