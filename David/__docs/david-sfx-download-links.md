# David — SFX Download Links

These are the exact sources used by `scripts/download-sfx.mjs`. Selected from [Mixkit sound effects](https://mixkit.co/free-sound-effects/) under the [Mixkit Free License](https://mixkit.co/license/). Confirm the license again before a commercial release.

| Local file | Download | Provenance | Use |
|---|---|---|---|
| `army_crowd.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/478/478-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/crowd/) | Battlefield: Armies gather |
| `shepherd_footsteps.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/542/542-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/footsteps/) | Pasture: David crosses the field |
| `sling_impact.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/2182/2182-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/wood/) | Goliath: The stone strikes |
| `camp_fire.mp3` | [Direct MP3](https://assets.mixkit.co/active_storage/sfx/2653/2653-preview.mp3) | [Source page](https://mixkit.co/free-sound-effects/fire/) | Wilderness: Night camp and pursuit |

## Download

From the repository root:

```sh
node scripts/download-sfx.mjs david
```

The downloader refuses HTML/error pages, preserves existing files unless `--force` is supplied, and writes into this story only.
