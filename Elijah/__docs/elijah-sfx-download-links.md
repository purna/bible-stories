# Elijah — SFX Download Links

These are the exact sources used by `scripts/download-sfx.mjs`. Selected from [Mixkit sound effects](https://mixkit.co/free-sound-effects/) under the [Mixkit Free License](https://mixkit.co/license/). Confirm the license again before a commercial release.

| Local file | Download | Provenance | Use |
|---|---|---|---|
| `desert_wind.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/788/788-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/wind/) | The drought: Dry wilderness atmosphere |
| `altar_fire.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/1328/1328-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/fire/) | Mount Carmel: Fire falls on the altar |
| `rain_thunder.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/2390/2390-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/thunder/) | Rain returns: The storm breaks |
| `heavenly_transition.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/2344/2344-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/magic/) | The final crossing: Heavenly departure |

## Download

From the repository root:

```sh
node scripts/download-sfx.mjs elijah
```

The downloader refuses HTML/error pages, preserves existing files unless `--force` is supplied, and writes into this story only.
