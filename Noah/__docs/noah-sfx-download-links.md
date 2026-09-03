# Noah — SFX Download Links

These are the exact sources used by `scripts/download-sfx.mjs`. Selected from [Mixkit sound effects](https://mixkit.co/free-sound-effects/) under the [Mixkit Free License](https://mixkit.co/license/). Confirm the license again before a commercial release.

| Local file | Download | Provenance | Use |
|---|---|---|---|
| `ark_wood_creak.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/195/195-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/wood/) | Building and voyage: Ark timber shifts |
| `flood_thunder.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/2390/2390-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/thunder/) | The flood: Storm reaches its peak |
| `flood_water.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/1185/1185-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/water/) | The flood: Water surrounds the ark |
| `animal_march.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/1232/1232-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/footsteps/) | Two by two: Animals approach the ark |

## Download

From the repository root:

```sh
node scripts/download-sfx.mjs noah
```

The downloader refuses HTML/error pages, preserves existing files unless `--force` is supplied, and writes into this story only.
