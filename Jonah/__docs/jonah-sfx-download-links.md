# Jonah — SFX Download Links

These are the exact sources used by `scripts/download-sfx.mjs`. Selected from [Mixkit sound effects](https://mixkit.co/free-sound-effects/) under the [Mixkit Free License](https://mixkit.co/license/). Confirm the license again before a commercial release.

| Local file | Download | Provenance | Use |
|---|---|---|---|
| `sea_waves.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/1185/1185-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/water/) | The voyage: Ship at sea |
| `storm_wind.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/2658/2658-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/wind/) | The storm: Wind tears across the ship |
| `ocean_splash.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/2364/2364-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/water/) | Overboard: Jonah hits the water |
| `deep_bubbles.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/2473/2473-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/water/) | Inside the fish: Underwater and great-fish movement |

## Download

From the repository root:

```sh
node scripts/download-sfx.mjs jonah
```

The downloader refuses HTML/error pages, preserves existing files unless `--force` is supplied, and writes into this story only.
