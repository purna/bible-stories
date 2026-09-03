# 04 — Audio Implementation

This stage is already de-risked: `daniel-audio-demo` is a working, compiled Vite/TypeScript spike of exactly this system (`Tone.Transport` shared clock, per-stem `Tone.Gain`, bar-quantized tempo-variant switching). This doc explains how that spike becomes production code, not how to build it from zero.

## 1. What carries over directly from the demo
- `AudioManager` class shape: `addStem()`, `start()`, `stop()`, `setGlobalBpm()`.
- `Stem` class shape: per-stem `Tone.Gain`, `setLoudness()`, `setVariant()` scheduled on `@1m`.
- The core insight the whole system rests on: **loudness is instant, tempo/variant changes are bar-quantized** — never let a variant swap happen off the beat, even under gameplay pressure to react instantly to a state change.

## 2. What changes for production

**Synths → real stems.** The demo uses `Tone.MembraneSynth`/`Tone.PolySynth`/`Tone.FMSynth` so it runs with zero audio assets. Production swaps `buildVoice()` to load actual recorded/composed stems:

```ts
// production version of Stem's voice — replaces buildVoice() in the demo
private async buildVoice(url: string): Promise<Tone.Player> {
  const player = new Tone.Player(url);
  await Tone.loaded(); // wait for buffer decode before scheduling
  player.sync(); // locks this player's start/stop to Tone.Transport
  return player;
}
```

`Tone.Player.sync()` is the piece the synth-based demo didn't need (synths retrigger fresh every tick; a real audio buffer needs to be told to follow the Transport). This is the main integration risk flagged in `daniel-game-plan.md`'s Phase 3 — budget real time for it, it's not a drop-in swap.

**Tempo variants → authored audio files, not pattern data.** The demo's `patterns.calm` / `patterns.tense` are literal note arrays. Production variants are separate audio files per stem (`stem_percussion_calm.mp3`, `stem_percussion_tense.mp3`), bar-aligned to the same grid at authoring time, referenced from the Audio Designer tool's manifest:

```ts
export interface StemManifestEntry {
  id: string;
  label: string;
  variants: Record<"calm" | "tense", string>; // urls
  defaultGain: number;
}
```

**Vision-scene dream bus.** Add a `Tone.Filter` insert per stem for interpretation scenes (Chapters 2, 4, 5), driven by `VisionEngine`'s `distortion` value from `02-gameplay-systems.md`:

```ts
// src/audio/dreamBus.ts
import * as Tone from "tone";

export class DreamBus {
  private filter = new Tone.Filter(20000, "lowpass").toDestination();

  connect(stem: { voice: Tone.ToneAudioNode }) {
    stem.voice.disconnect();
    stem.voice.connect(this.filter);
  }

  /** distortion: 0-1, from VisionEngine.getDistortion() */
  setDistortion(distortion: number) {
    const cutoff = 20000 - distortion * 16000; // muffles as distortion rises
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
