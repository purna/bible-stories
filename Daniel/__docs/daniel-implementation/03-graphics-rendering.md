# 03 — Graphics & Rendering

PixiJS v8 setup: the tilemap renderer, character sprite pipeline, camera, and scene composition. Depends on `01-project-foundation.md`. Can be built in parallel with `02` and `04` — it only needs to agree on the `ChapterDef`/tilemap JSON shape.

## 1. Application bootstrap

```ts
// src/engine/app.ts
import { Application } from "pixi.js";

export async function createApp(canvasParent: HTMLElement) {
  const app = new Application();
  await app.init({
    resizeTo: canvasParent,
    backgroundColor: 0x14161a,
    antialias: true,
    preference: "webgpu", // falls back to webgl automatically
  });
  canvasParent.appendChild(app.canvas);
  return app;
}
```

PixiJS v8's async `init()` and automatic WebGPU-with-WebGL-fallback is new relative to v7 — don't reach for the old synchronous `new Application({...})` pattern from older tutorials/muscle memory.

## 2. Tilemap renderer

```ts
// src/engine/tileMap.ts
import { Container, Sprite, Texture, Assets } from "pixi.js";

export interface TileMapDef {
  width: number;
  height: number;
  tileSize: number;
  tilesetRef: string;
  layers: { name: string; data: number[] }[]; // -1 = empty
  collisionLayer: number[]; // 0 = walkable, 1 = blocked
}

export class TileMap extends Container {
  private def: TileMapDef;

  static async load(def: TileMapDef): Promise<TileMap> {
    const map = new TileMap(def);
    const tileset = await Assets.load<Texture>(def.tilesetRef);
    map.buildLayers(tileset);
    return map;
  }

  private constructor(def: TileMapDef) {
    super();
    this.def = def;
  }

  private buildLayers(tilesetTexture: Texture) {
    const { width, tileSize, layers } = this.def;
    for (const layer of layers) {
      const layerContainer = new Container();
      layer.data.forEach((tileIndex, i) => {
        if (tileIndex < 0) return;
        const sprite = Sprite.from(this.frameFor(tilesetTexture, tileIndex));
        sprite.x = (i % width) * tileSize;
        sprite.y = Math.floor(i / width) * tileSize;
        layerContainer.addChild(sprite);
      });
      this.addChild(layerContainer);
    }
  }

  private frameFor(texture: Texture, index: number): Texture {
    // Assumes a fixed-grid tileset sheet; real implementation reads
    // columns/rows from tileset metadata produced by the Tile Designer tool.
    return texture; // placeholder
  }

  isWalkable(tileX: number, tileY: number): boolean {
    const i = tileY * this.def.width + tileX;
    return this.def.collisionLayer[i] === 0;
  }
}
```

## 3. Character sprite pipeline

The SVG character builder (two-color, face-on, 256×256 grid — same tool family as the David and icon-generator projects) bakes to sprite sheets ahead of time via the Character Designer tool; the runtime only ever loads baked PNG sheets, never renders SVG live.

```ts
// src/engine/entity.ts
import { AnimatedSprite, Container, Texture, Assets } from "pixi.js";

export interface CharacterDef {
  id: string;
  spriteSheetRef: string;
  frameSize: { w: number; h: number };
  animations: Record<string, number[]>; // e.g. { idle: [0,1,2,3], walk: [4..11] }
}

export class Entity extends Container {
  sprite!: AnimatedSprite;
  private def: CharacterDef;
  tileX = 0;
  tileY = 0;

  static async load(def: CharacterDef): Promise<Entity> {
    const entity = new Entity(def);
    const sheet = await Assets.load<Texture>(def.spriteSheetRef);
    entity.buildSprite(sheet);
    return entity;
  }

  private constructor(def: CharacterDef) {
    super();
    this.def = def;
  }

  private buildSprite(sheet: Texture) {
    const frames = this.framesFor("idle", sheet);
    this.sprite = new AnimatedSprite(frames);
    this.sprite.animationSpeed = 0.12;
    this.sprite.play();
    this.addChild(this.sprite);
  }

  playAnimation(name: string) {
    // swap texture array on this.sprite from this.def.animations[name]
  }

  private framesFor(name: string, sheet: Texture): Texture[] {
    return this.def.animations[name].map((frameIndex) => {
      const { w, h } = this.def.frameSize;
      const cols = Math.floor(sheet.width / w);
      const col = frameIndex % cols;
      const row = Math.floor(frameIndex / cols);
      return new Texture({
        source: sheet.source,
        frame: { x: col * w, y: row * h, width: w, height: h } as any,
      });
    });
  }
}
```

## 4. Camera

```ts
// src/engine/camera.ts
import { Container } from "pixi.js";

export class Camera {
  private world: Container;
  private viewportW: number;
  private viewportH: number;
  bounds: { w: number; h: number };

  constructor(world: Container, viewportW: number, viewportH: number, bounds: { w: number; h: number }) {
    this.world = world;
    this.viewportW = viewportW;
    this.viewportH = viewportH;
    this.bounds = bounds;
  }

  follow(target: { x: number; y: number }) {
    let x = this.viewportW / 2 - target.x;
    let y = this.viewportH / 2 - target.y;
    x = Math.min(0, Math.max(this.viewportW - this.bounds.w, x));
    y = Math.min(0, Math.max(this.viewportH - this.bounds.h, y));
    this.world.x = x;
    this.world.y = y;
  }

  /** Used for Chapter 6's control shift — the camera has its own path
   *  independent of any entity, pacing Darius's palace in the dark. */
  panTo(x: number, y: number, durationMs: number) {
    // tween world.x/world.y toward the target over durationMs
  }
}
```

## 5. Scene composition

The Scene Designer tool authors, per chapter, which tilemap + entities + trigger zones + camera bounds compose the playable space — the runtime just consumes the resulting JSON:

```ts
// src/engine/sceneManager.ts (rendering half — pairs with 02's gameplay half)
export interface SceneCompositionDef {
  tilemapRef: string;
  entities: { characterRef: string; tileX: number; tileY: number }[];
  triggerZones: { x: number; y: number; w: number; h: number; triggerId: string }[];
  cameraBounds: { w: number; h: number };
}
```

## 6. Verify this stage
A meaningful checkpoint before moving to `05` (UI) or `07` (post-processing): one chapter's tilemap + player entity + camera follow, running in the browser at a stable frame rate on both desktop and a mid-range mobile device, with no gameplay or audio wired in yet. Getting this checkpoint solid early is what makes `05`/`06`/`07` additive instead of something that has to fight an unstable render loop.
