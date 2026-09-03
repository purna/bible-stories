# 07 — Post-Processing & VFX

Last stage on purpose — a polish layer on top of working rendering (`03`) and audio (`04`). Covers PixiJS's filter pipeline: bloom, vignette, color grading, and the distortion effects for the "Hearing" scenes.

## 1. Filter pipeline setup
PixiJS v8's filter system applies per-container. This is perfect for scoping distortion effects to the "Hearing" scenes without affecting the UI layer.

```ts
// src/engine/postProcessing.ts
import { BlurFilter, ColorMatrixFilter, NoiseFilter } from "pixi.js";
import type { Container } from "pixi.js";
import { stateManager } from "../state/stateManager";

export class PostProcessing {
  private colorGrade = new ColorMatrixFilter();
  private distortionNoise = new NoiseFilter({ noise: 0 });
  private blur = new BlurFilter({ strength: 0 });

  applyTo(container: Container) {
    // Apply filters that can be dynamically adjusted.
    container.filters = [this.colorGrade, this.distortionNoise, this.blur];
  }

  /** Update effects based on game state, called each frame. */
  update() {
    // Example: Desaturate the world as Despair increases.
    const despair = stateManager.despair / 100; // 0-1
    this.colorGrade.reset();
    this.colorGrade.saturate(1 - despair * 0.8, false);
  }
}
```

Bloom is applied as a separate additive-blend sprite pass (blur a bright-pass copy of the scene, composite additively) rather than a single blur filter on the whole scene — a flat blur on everything reads as "out of focus," not "glowing," which is the wrong effect for court-scene torchlight and vision-scene glow.

## 2. Vignette
A cheap, constant-cost screen-space vignette rather than a per-frame shader recompute — a static radial-gradient sprite composited at low opacity over the scene, its opacity driven by state rather than its geometry redrawn:

```ts
// src/engine/vignette.ts
import { Sprite, Texture } from "pixi.js";

export class Vignette extends Sprite {
  constructor(texture: Texture) {
    super(texture);
    this.alpha = 0.3;
    this.blendMode = "multiply";
  }

  setIntensity(value: number) {
    this.alpha = 0.15 + value * 0.35; // political risk / distortion drives this
  }
}
```

Tie `setIntensity` to the same `VisionEngine.getDistortion()` / Political Risk timer values the audio dream bus (`04`) reads from — vignette tightening and the dream bus's low-pass filtering should move together, not on independent timers, or the audio-visual sync the design doc calls for won't actually land.

## 3. Dream-sequence distortion (vision scenes only)
Scoped to the vision-scene container, not global:

```ts
export function applyDreamDistortion(visionContainer: Container, distortion: number) {
  const blur = new BlurFilter({ strength: distortion * 6, quality: 2 });
  visionContainer.filters = [blur];
}
```

Kept intentionally simple — a subtle blur ramp rather than a full displacement-map shader. A heavier distortion effect is a legitimate later iteration, but it's also the highest-risk item for mobile frame budget (see below), so start cheap and only escalate if playtesting says the current effect under-communicates urgency.

## 4. Performance budget
Post-processing is the stage most likely to blow a mobile frame budget, so treat this as a hard constraint, not an afterthought:
- Profile on a mid-range Android device, not just desktop Chrome — filter costs that are invisible on a desktop GPU are often the first thing to drop frames on mobile.
- Bloom and vignette should be pre-composited where possible rather than recomputed every frame for static scenes (most court scenes aren't constantly changing).
- Dream distortion (the one filter tied to a continuously-changing value) is the one exception that must run every frame during vision scenes — budget for it specifically, and be willing to cut it back (lower blur quality, smaller affected area) on lower-end devices rather than cutting bloom/vignette instead, since distortion is the effect actually carrying gameplay information.
- Provide a "reduced motion / reduced effects" toggle in the same settings screen as `06`'s accessibility options — this doubles as both an accessibility feature and a performance fallback for low-end devices, so it's worth building once and getting both benefits.

## 5. Verify this stage
Run one full vision scene (Chapter 2) on a mid-range mobile device with all post-processing active — bloom, vignette tied to Political Risk, dream distortion tied to Distortion, audio dream bus from `04` all running together — and confirm frame rate holds steady and the audio/visual urgency cues move in lock-step. If they don't move together, that's a state-wiring bug between this stage and `04`, not a new effect to add.
