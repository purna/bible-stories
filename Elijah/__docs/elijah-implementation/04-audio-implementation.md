# 04 — Audio Implementation

This stage is critical for the "Hearing" mechanic. It uses `Tone.js` to manage musical stems and the complex layering of noise and signal for the core gameplay loop.

## 1. Musical Stem Management
For general background music, the approach is standard stem-based crossfading.
- `AudioManager` class: `addStem()`, `start()`, `stop()`, `setVariant()`.
- `Stem` class: Wraps a `Tone.Player` with its own `Tone.Gain` node for volume control.
- The core principle: **Loudness changes are instant, but variant swaps are beat-quantized.** A change in mood (e.g., from "exploration" to "tense") should schedule the new stem variant to start on the next bar line (`@1m`) to ensure seamless musical transitions.

```ts
// src/audio/stem.ts
import * as Tone from "tone";

```ts
export class Stem {
  private player: Tone.Player;
  private gain: Tone.Gain;

  constructor(url: string, gain = 1) {
    this.player = new Tone.Player(url).sync(); // sync to transport
    this.gain = new Tone.Gain(gain).toDestination();
    this.player.connect(this.gain);
  }

  setVolume(volume: number, rampTime: Tone.Unit.Time = 0.5) {
    this.gain.gain.rampTo(volume, rampTime);
  }
}
```

`Tone.Player.sync()` is the piece the synth-based demo didn't need (synths retrigger fresh every tick; a real audio buffer needs to be told to follow the Transport). This is the main integration risk flagged in `daniel-game-plan.md`'s Phase 3 — budget real time for it, it's not a drop-in swap.

**Tempo variants → authored audio files, not pattern data.** The demo's `patterns.calm` / `patterns.tense` are literal note arrays. Production variants are separate audio files per stem (`stem_percussion_calm.mp3`, `stem_percussion_tense.mp3`), bar-aligned to the same grid at authoring time, referenced from the Audio Designer tool's manifest:

```typescript
export interface StemManifestEntry {
  id: string;
  label: string;
  variants: Record<"calm" | "tense", string>; // urls
  defaultGain: number;
}
```

**Hearing-scene noise bus.** Add a `Tone.Filter` insert per stem for hearing scenes (Chapters 1, 2, 5), driven by `HearingEngine`'s `noiseLevel` value from `02-gameplay-systems.md`:

```typescript
// src/audio/noiseBus.ts
import * as Tone from "tone";

export class NoiseBus {
  private filter = new Tone.Filter(20000, "lowpass").toDestination();

  connect(stem: { voice: Tone.ToneAudioNode }) {
    stem.voice.disconnect();
    stem.voice.connect(this.filter);
  }

  /** noiseLevel: 0-1, from HearingEngine.getNoiseLevel() */
  setNoiseLevel(noiseLevel: number) {
    const cutoff = 20000 - noiseLevel * 16000; // muffles as noiseLevel rises
    this.filter.frequency.rampTo(Math.max(400, cutoff), 0.3);
  }
}
```

Wire this to game state, not just mood: as covered in `daniel-gameplay-loop.md`, the dream bus should tighten in step with `VisionEngine`'s Distortion value, and the percussion stem's variant should crossfade toward `tense` as the Political Risk timer runs low — both driven by the same `stateManager`/`VisionEngine` reads that the UI meters use, so audio, UI, and gameplay never disagree about how urgent a moment is.

## 3. SFX layer (non-musical)
One-off sounds (footsteps, UI clicks, fire crackle) don't need Transport sync or tempo variants — route them through plain Web Audio, not Tone, to avoid unnecessary overhead:

```ts
// src/audio/sfxManager.ts
export class SfxManager {
  private ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  private buffers = new Map<string, AudioBuffer>();

  async load(id: string, url: string) {
    const data = await fetch(url).then((r) => r.arrayBuffer());
    this.buffers.set(id, await this.ctx.decodeAudioData(data));
  }

  play(id: string, gain = 1) {
    const buffer = this.buffers.get(id);
    if (!buffer) return;
    const source = this.ctx.createBufferSource();
    source.buffer = buffer;
    const gainNode = this.ctx.createGain();
    gainNode.gain.value = gain;
    source.connect(gainNode).connect(this.ctx.destination);
    source.start();
  }
}
```

## 4. Attribution pipeline
Every licensed asset (Incompetech CC-BY tracks, Freesound CC-BY clips, etc. — see `daniel-game-plan.md`'s resource list) gets registered at load time so the credits screen stays accurate without manual upkeep:

```ts
export function registerCredit(source: string, license: string, url: string) {
  creditsLog.push({ source, license, url });
}
```

## 5. Verify this stage
Load one full chapter's stem set (real files, not synths), confirm: (a) all stems start on the same sample tick, (b) a variant swap triggered mid-playback lands exactly on the next bar with no audible seam, (c) the dream bus audibly tightens as a scripted Distortion value ramps from 0 to 1. That third check is the one the synth-based demo couldn't fully prove — it's the actual point of this stage.
