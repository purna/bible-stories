# Moses — SFX Download Links

These are the exact sources used by `scripts/download-sfx.mjs`. Selected from [Mixkit sound effects](https://mixkit.co/free-sound-effects/) under the [Mixkit Free License](https://mixkit.co/license/). Confirm the license again before a commercial release.

| Local file | Download | Provenance | Use |
|---|---|---|---|
| `wilderness_wind.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/788/788-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/wind/) | The wilderness: Desert journey |
| `red_sea_water.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/3126/3126-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/water/) | The Red Sea: The waters divide |
| `sinai_thunder.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/1287/1287-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/thunder/) | Mount Sinai: Thunder over the mountain |
| `burning_bush_reveal.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/869/869-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/magic/) | The burning bush: God calls Moses |

## Download

From the repository root:

```sh
node scripts/download-sfx.mjs moses
```

The downloader refuses HTML/error pages, preserves existing files unless `--force` is supplied, and writes into this story only.
