# UI sound effects — Elisha

These sounds belong to interface actions, not the story’s narrative SFX in `../sfx/`.

## Current button sound

- [x] [`../ping_pong.mp3`](../ping_pong.mp3) — current shared button click/tick used by the story’s `AudioManager`. Reuse for ordinary buttons and the audio toggle; do not duplicate it here.

## Sourced candidates

These are source pages for the requested MP3s, not downloaded files yet. Review the sound before adopting it. Pixabay lists these as free under its Content License; the license allows free use and modification, but prohibits redistributing an unchanged file on a standalone basis. The cues still need runtime wiring before they will play.

- [ ] `choice_select.mp3` — Soft confirmation click. [Source and download (pixabay.com)](https://pixabay.com/sound-effects/film-special-effects-soft-interface-click-126517/).
- [ ] `game_success.mp3` — Short UI completion chime. [Source and download (pixabay.com)](https://pixabay.com/sound-effects/film-special-effects-ui-loading-end-success-522861/).
- [ ] `neutral_retry.mp3` — Quiet neutral click; use at lower volume than selection. [Source and download (pixabay.com)](https://pixabay.com/sound-effects/film-special-effects-soft-ui-click-147352/).
- [ ] `chapter_transition.mp3` — Brief airy whoosh; optional and best kept very quiet. [Source and download (pixabay.com)](https://pixabay.com/sound-effects/simple-whoosh-transition-382722/).
- [ ] `panel_open_close.mp3` — Soft modal tap; can be reused for opening and closing. [Source and download (pixabay.com)](https://pixabay.com/sound-effects/film-special-effects-ui-modal-close-soft-tap-523151/).

Keep UI sounds short and quiet under narration. Never rely on sound alone to communicate success, failure, or required information.
