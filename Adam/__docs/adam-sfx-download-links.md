# Adam & Eve — SFX Download Links

These are the exact sources used by `scripts/download-sfx.mjs`. Selected from [Mixkit sound effects](https://mixkit.co/free-sound-effects/) under the [Mixkit Free License](https://mixkit.co/license/). Confirm the license again before a commercial release.

| Local file | Download | Provenance | Use |
|---|---|---|---|
| `creation_light.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/2350/2350-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/magic/) | Creation: Light breaks into darkness |
| `garden_water.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/3126/3126-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/water/) | Eden: Living water and garden calm |
| `exile_footsteps.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/532/532-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/footsteps/) | Exile: Adam and Eve leave the garden |
| `fall_crack.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/2182/2182-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/wood/) | The Fall: The choice fractures the peace |

## Download

From the repository root:

```sh
node scripts/download-sfx.mjs adam
```

The downloader refuses HTML/error pages, preserves existing files unless `--force` is supplied, and writes into this story only.
