# 06 — UX Design & Flow

This stage is less code, more decisions with implementation consequences — onboarding, pacing, save/load, and accessibility. Depends on `02` (gameplay systems) and `05` (UI) both being real enough to attach flows to.

## 1. Onboarding
Chapter 1 (The Drought) is the tutorial.
- Movement and interaction are taught through action, not a text tutorial overlay — the training-house setting naturally gates the player through a short walk before the first dialogue choice.
- The Faith/Despair meter should not appear on screen until *after* the player has made their first real choice (e.g., to confront Ahab or hesitate), so its first appearance is legible ("oh, that's what that choice just did").
- The "Hearing" Engine is introduced in a low-stakes way at the Kerith Ravine. The "noise" is minimal (e.g., the sound of the brook, his own hunger), and the "signal" is simple ("Go to Zarephath"). This teaches the mechanic before the high-pressure version at Horeb.

## 2. Pacing and Geography
Elijah's story is a journey. The UX should emphasize the changes in location and what they represent.
- **Chapter title cards** should name the location ("The Brook Kerith," "Mount Carmel," "Horeb") to ground the player geographically. These function as both a narrative beat and a save-point.
- **Environmental storytelling:** The contrast between the lush (but spiritually corrupt) Jezreel and the stark, empty wilderness is a key part of the narrative. The art and audio should make these transitions feel significant.
- **No real-time pressure across chapters** — the "Hearing" scenes are the only moments of intense, focused pressure. The overall pacing should allow for moments of quiet travel and reflection.

## 3. Save/load flow
Built directly on `stateManager.serialize()`/`deserialize()` from `01-project-foundation.md`:
- Autosave at every chapter boundary (after the title card).
- Manual save available at any reflection interlude beat — these are natural low-tension pause points.
- Save slots should show the chapter title as the slot label, not a raw chapter number — "Mount Carmel" reads better in a save-slot list than "Chapter 3."

- ## 4. Accessibility, not Difficulty
There's no traditional combat, so "difficulty" is about the cognitive load of the "Hearing" scenes.
- A single accessibility toggle to reduce the intensity of the "noise" in "Hearing" scenes. This could lower the volume of distracting audio layers and reduce the intensity of visual distortion. This should be framed as an accessibility option ("Reduce Sensory Intensity"), not an "easy mode."
- Text size and dialogue-box contrast should be user-adjustable from a settings screen reachable from the pause menu at any point, not just at game start.
- Colorblind-safe accent colors for key UI elements (verify the Faith/Despair bar colors against common simulations).

## 5. The Carmel-to-Horeb Transition
The biggest UX challenge is managing the emotional whiplash between Chapter 3 (the peak of public victory on Carmel) and Chapter 4 (the depth of private despair in the wilderness).
- **Pacing:** The end of Chapter 3 should feel triumphant but brief. The start of Chapter 4 should hit hard and fast with Jezebel's threat, forcing the player into an immediate flight. The journey through the wilderness should feel long and draining.
- **Testing:** Playtest this transition specifically. Do players understand why Elijah is suddenly terrified after such a huge win? The UI (Despair meter spiking) and internal monologue must clearly communicate that his victory made him the kingdom's #1 target. The shift from a cheering crowd to being utterly alone should be jarring and intentional.

## 7. Verify this stage
Run a full playtest of Chapters 1–3 with someone who hasn't seen the design docs. Watch for:
1.  Does the Faith/Despair meter's first appearance make sense?
2.  Does the first "Hearing" scene at the brook teach the mechanic effectively?
3.  Does the time pressure and sensory chaos of the "Hearing" scenes feel like meaningful tension or just frustration? (This is where the accessibility option is key).
4.  Does the emotional shift from the end of Carmel to the flight from Jezebel land correctly?

These are all UX questions that code review alone cannot answer.
