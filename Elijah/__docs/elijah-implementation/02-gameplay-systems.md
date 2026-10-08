# 02 — Gameplay Systems

Covers the two engines that make this an Elijah game rather than a generic top-down narrative game: the **Dialogue Engine** (ordinary scenes) and the **Hearing Engine** (discerning God's voice). Depends on `01-project-foundation.md`'s `stateManager`.

## 1. Chapter data schema

Every chapter is a data file, not hardcoded logic, so the Scene Designer tool can author new content without touching engine code.

```ts
// src/data/chapter.ts

export interface ChapterDef {
  id: number;
  title: string;
  tilemapRef: string;
  dialogueRefs: string[]; // For ordinary dialogue scenes
  hearingRef?: string; // present only for "Hearing" chapters (1, 2, 5)
  triggers: TriggerDef[];
}

export interface TriggerDef {
  id: string;
  condition: string; // evaluated against stateManager flags
  onEnter: string;    // dialogue node id or vision scene id to launch
}
```

## 2. Dialogue Engine (inkjs)

```ts
// src/narrative/dialogueEngine.ts
import { Story } from "inkjs";
import { stateManager } from "../state/stateManager";

export class DialogueEngine {
  private story: Story;
  private chapter: number;
  
  constructor(compiledInkJson: string, chapter: number) {
    this.story = new Story(compiledInkJson);
    this.chapter = chapter;
    this.bindStateVariables();
  }

  /** Two-way sync: Ink variables mirror stateManager flags. */
  private bindStateVariables() { // Example for Elijah's Faith/Despair
    this.story.ObserveVariable("elijah_choice_outcome", (name, value) => {
      // Ink authors set a variable like "~ elijah_choice_outcome = "faith"" or "= "despair""
      if (value === "faith") stateManager.adjustFaith(5);
      else if (value === "despair") stateManager.adjustDespair(5);
    });
  }

  continue(): { text: string; tags: string[] }[] {
    const lines: { text: string; tags: string[] }[] = [];
    while (this.story.canContinue) {
      const text = this.story.Continue() ?? "";
      lines.push({ text, tags: this.story.currentTags ?? [] });
    }
    return lines;
  }

  getChoices() {
    return this.story.currentChoices;
  }

  choose(index: number) {
    this.story.ChooseChoiceIndex(index);
  }
}
```

Ink authors mark decision points with a `fit_in_choice` boolean variable set in the branch itself (`~ fit_in_choice = true`), which is how the Set Apart / Fit In meter gets updated without the engine needing to special-case every chapter's dialogue tree.

## 3. Vision Engine — the interpretation minigame

This is the mechanic unique to this project (no equivalent in the David codebase). Implements the loop from `daniel-gameplay-loop.md`: gather fragments → assemble a reading → choose delivery → resolve.

```ts
// src/vision/visionEngine.ts
import { stateManager } from "../state/stateManager";

export interface SymbolFragment {
  id: string;
  position: { x: number; y: number }; // tile-space in the dream scene
  meaning: string;
  isDecoy: boolean;
}

export interface VisionScene {
  id: string;
  chapter: number;
  fragments: SymbolFragment[];
  riskTimerSeconds: number;
  stakesText: string;
}

export type Delivery = "plain" | "softened";

export class VisionEngine {
  private scene: VisionScene;
  private gathered: SymbolFragment[] = [];
  private distortion = 0; // 0-1
  private startedAt = 0;

  constructor(scene: VisionScene) {
    this.scene = scene;
  }

  start() {
    this.startedAt = performance.now();
    this.gathered = [];
    this.distortion = 0;
  }

  /** Called when the player reaches a fragment's tile. */
  collect(fragmentId: string) {
    const fragment = this.scene.fragments.find((f) => f.id === fragmentId);
    if (!fragment || this.gathered.includes(fragment)) return;

    const elapsed = (performance.now() - this.startedAt) / 1000;
    const rushPenalty = this.gathered.length > 0 && elapsed / this.gathered.length < 1.5;

    // Discernment reduces Distortion risk — a player who's told the truth
    // consistently reads faster and cleaner.
    const discernmentFactor = Math.max(0, 1 - stateManager.discernment / 100);

    if (fragment.isDecoy || (rushPenalty && Math.random() < discernmentFactor)) {
      this.distortion = Math.min(1, this.distortion + 0.2);
    }
    this.gathered.push(fragment);
  }

  timeRemaining(): number {
    const elapsed = (performance.now() - this.startedAt) / 1000;
    return Math.max(0, this.scene.riskTimerSeconds - elapsed);
  }

  getDistortion() {
    return this.distortion;
  }

  /** Step 3/4 of the loop: deliver, then resolve state changes. */
  deliver(delivery: Delivery) {
    const reign = getCurrentReign(this.scene.chapter);
    const accurate = this.distortion < 0.5;

    if (accurate && delivery === "plain") {
      stateManager.discernment = Math.min(100, stateManager.discernment + 8);
      if (reign) stateManager.adjustReign(reign, { suspicion: 3 });
    } else if (accurate && delivery === "softened") {
      stateManager.discernment = Math.max(0, stateManager.discernment - 4);
      if (reign) stateManager.adjustReign(reign, { favor: 5 });
    } else {
      // Inaccurate reading — narrative consequence flag, not a game-over.
      stateManager.write(`vision_${this.scene.id}_wrong`, true, this.scene.chapter);
    }

    stateManager.write(`vision_${this.scene.id}_delivery`, delivery, this.scene.chapter);
  }
}

function getCurrentReign(chapter: number) {
  // Chapter → reign mapping lives in reigns/ data, not hardcoded here in
  // the real implementation — inlined for clarity of the doc.
  if (chapter <= 4) return "nebuchadnezzar" as const;
  if (chapter === 5) return "belshazzar" as const;
  return "darius" as const;
}
```

Note what's deliberately *not* here: no fail state, no health/lives. Per the design doc, a wrong reading writes a consequence flag for later chapters to reference — it doesn't block progress. Keep that discipline when extending this engine; the temptation to add a hard-fail path for "game feel" reasons works against the story's actual shape.

## 4. Wiring both engines to a chapter

```ts
// src/engine/sceneManager.ts (relevant excerpt)
import { DialogueEngine } from "../narrative/dialogueEngine";
import { VisionEngine } from "../vision/visionEngine";
import type { ChapterDef } from "../data/chapter";

export async function loadChapter(def: ChapterDef) {
  const dialogueEngines = await Promise.all(
    def.dialogueRefs.map(async (ref) => {
      const json = await fetch(ref).then((r) => r.text());
      return new DialogueEngine(json, def.id);
    })
  );

  const visionEngine = def.visionRef
    ? new VisionEngine(await fetch(def.visionRef).then((r) => r.json()))
    : null;

  return { dialogueEngines, visionEngine };
}
```

## 5. Testing this stage in isolation
Before graphics or audio exist, this stage should be provable headless: write a small script (or a `vitest` suite, if a test runner is added) that loads a `ChapterDef` fixture, runs a `VisionEngine` through a scripted sequence of `collect()`/`deliver()` calls, and asserts on `stateManager` — that's the whole gameplay loop validated without a single pixel rendered.
