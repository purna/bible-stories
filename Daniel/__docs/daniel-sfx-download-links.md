# Daniel — SFX Download Links

These are the exact sources used by `scripts/download-sfx.mjs`. Selected from [Mixkit sound effects](https://mixkit.co/free-sound-effects/) under the [Mixkit Free License](https://mixkit.co/license/). Confirm the license again before a commercial release.

| Local file | Download | Provenance | Use |
|---|---|---|---|
| `babylon_crowd.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/424/424-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/crowd/) | Royal courts: Court and feast atmosphere |
| `vision_reveal.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/2589/2589-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/magic/) | Visions: A vision opens |
| `furnace_roar.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/1345/1345-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/fire/) | The furnace: Furnace doors open |
| `stone_footsteps.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/1230/1230-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/footsteps/) | The lions' den: Daniel enters the den |

## Download

From the repository root:

```sh
node scripts/download-sfx.mjs daniel
```

The downloader refuses HTML/error pages, preserves existing files unless `--force` is supplied, and writes into this story only.
