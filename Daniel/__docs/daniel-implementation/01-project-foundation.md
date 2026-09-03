# 01 — Project Foundation

Everything else in this series assumes this stage exists and works. Goal: a Vite + TypeScript scaffold with the multi-page tool architecture wired up, and a state manager that every other system (dialogue, vision, audio, UI) reads and writes to.

## 1. Scaffold

```bash
npm create vite@latest daniel-game -- --template vanilla-ts
cd daniel-game
npm install
npm install pixi.js inkjs tone
```

Start from `vanilla-ts`, not a framework template. PixiJS owns the render loop and canvas; React/Vue would fight it for that role without adding anything the tool suite needs. If a framework ever becomes useful it'll be for the standalone editor tools, not the game runtime — keep that decision local to `/tools`, not global.

## 2. Folder structure

```
/daniel-game
  index.html
  vite.config.ts
  tsconfig.json
  /src
    /engine          — tileMap, entity, camera, inputManager, sceneManager (03)
    /narrative        — dialogueEngine, reflectionEngine (02)
    /vision            — visionEngine, symbolLibrary (02)
    /audio              — audioManager, sfxManager (04)
    /ui                  — HUD components, dialogue box, meters (05)
    /state                — stateManager.ts (this doc)
    /data                   — chapters/, reigns/, visions/ (JSON, authored by tools)
    main.ts
  /tools
    tile-designer/
    character-designer/
    scene-designer/
    audio-designer/
    dialogue-designer/
    vision-designer/
  /public
```

This mirrors the module map in `daniel-game-plan.md`'s Technical Module Architecture section exactly — that doc is the source of truth for *what* each module owns; this doc is *how* the scaffold makes room for it.

## 3. Multi-page Vite config

One dev server serves the game and every standalone tool as separate HTML entry points:

```ts
// vite.config.ts
import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        tileDesigner: resolve(__dirname, "tools/tile-designer/index.html"),
        characterDesigner: resolve(__dirname, "tools/character-designer/index.html"),
        sceneDesigner: resolve(__dirname, "tools/scene-designer/index.html"),
        audioDesigner: resolve(__dirname, "tools/audio-designer/index.html"),
        dialogueDesigner: resolve(__dirname, "tools/dialogue-designer/index.html"),
        visionDesigner: resolve(__dirname, "tools/vision-designer/index.html"),
      },
    },
  },
});
```

Each tool folder gets its own minimal `index.html` + `main.ts` that imports shared types from `/src/data` (e.g. a `VisionScene` interface) but doesn't import game runtime code — tools produce JSON, they don't run the game.

## 4. TypeScript config

Strict mode on from day one — this project has enough moving parts (state log, per-reign data, vision fragment tables) that loose typing will cost more later than the friction costs now.

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "verbatimModuleSyntax": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "skipLibCheck": true,
    "lib": ["ES2022", "DOM"]
  },
  "include": ["src", "tools"]
}
```

`verbatimModuleSyntax` matters in practice — it's what caught the `StemVariant` type-only import issue in the audio demo at compile time instead of at runtime.

## 5. State manager — the append-only log

Every other system depends on this. It's the single source of truth for "what has happened," and it's what makes save/load, undo/redo in the tools, and cross-chapter consequence tracking all fall out of the same mechanism instead of three bespoke ones.

```ts
// src/state/stateManager.ts

export type Reign = "nebuchadnezzar" | "belshazzar" | "darius";

export interface StateFlag {
  key: string;
  value: string | number | boolean;
  chapter: number;
  timestamp: number; // logical tick, not wall-clock
}

export interface ReignState {
  favor: number;      // 0-100
  suspicion: number;  // 0-100
}

class StateManager {
  private log: StateFlag[] = [];
  private tick = 0;

  // Global, cross-chapter meters — not reign-scoped.
  setApart = 0;
  fitIn = 0;
  discernment = 0;

  private reigns: Record<Reign, ReignState> = {
    nebuchadnezzar: { favor: 0, suspicion: 0 },
    belshazzar: { favor: 0, suspicion: 0 },
    darius: { favor: 0, suspicion: 0 },
  };

  write(key: string, value: string | number | boolean, chapter: number) {
    this.log.push({ key, value, chapter, timestamp: this.tick++ });
  }

  read(key: string): StateFlag | undefined {
    // Last write wins — walk backwards.
    for (let i = this.log.length - 1; i >= 0; i--) {
      if (this.log[i].key === key) return this.log[i];
    }
    return undefined;
  }

  adjustReign(reign: Reign, delta: Partial<ReignState>) {
    const state = this.reigns[reign];
    if (delta.favor !== undefined) state.favor = clamp(state.favor + delta.favor, 0, 100);
    if (delta.suspicion !== undefined) state.suspicion = clamp(state.suspicion + delta.suspicion, 0, 100);
  }

  getReign(reign: Reign): Readonly<ReignState> {
    return this.reigns[reign];
  }

  /**
   * Chapter-boundary compaction: fold everything before `chapter` into a
   * resolved snapshot, keeping the current chapter's log live for
   * undo/redo in the authoring tools. Mirrors the David project's
   * approach — cheap for a 6-chapter game, but avoids an ever-growing
   * log across a full playthrough.
   */
  compactBefore(chapter: number) {
    const [resolved, live] = partition(this.log, (f) => f.chapter < chapter);
    this.snapshots.push(summarize(resolved));
    this.log = live;
  }

  private snapshots: Record<string, unknown>[] = [];

  serialize(): string {
    return JSON.stringify({
      log: this.log,
      snapshots: this.snapshots,
      setApart: this.setApart,
      fitIn: this.fitIn,
      discernment: this.discernment,
      reigns: this.reigns,
    });
  }

  static deserialize(json: string): StateManager {
    const data = JSON.parse(json);
    const mgr = new StateManager();
    Object.assign(mgr, data);
    return mgr;
  }
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}
function partition<T>(arr: T[], pred: (t: T) => boolean): [T[], T[]] {
  const yes: T[] = [], no: T[] = [];
  for (const item of arr) (pred(item) ? yes : no).push(item);
  return [yes, no];
}
function summarize(flags: StateFlag[]): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const f of flags) out[f.key] = f.value;
  return out;
}

export const stateManager = new StateManager();
```

This one file is the contract every other doc in this series writes against: the Dialogue and Vision engines call `stateManager.write(...)` and `stateManager.adjustReign(...)`; the UI layer reads `stateManager.setApart` / `.fitIn` / `.discernment` to render meters; save/load is just `serialize()`/`deserialize()`.

## 6. Verify the foundation compiles

Before building anything on top of this, confirm the scaffold and state manager type-check and build clean:

```bash
npx tsc --noEmit
npm run build
```

Treat a clean build here as the gate for starting `02` and `03` in parallel — there's no reason to let gameplay and graphics work drift against a foundation that doesn't compile yet.
