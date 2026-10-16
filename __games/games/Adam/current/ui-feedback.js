/* Shared interface button and download-complete sounds. */
(() => {
  'use strict';

  const scriptUrl = document.currentScript?.src || new URL('ui-feedback.js', location.href).href;
  const soundUrl = file => new URL(`../shared/audio/ui/${file}`, scriptUrl).href;
  const cues = {
    button: soundUrl('choice_select.mp3'),
    loaded: soundUrl('game_success.mp3')
  };
  let loadedCueFired = false;
  let loadedCuePending = false;

  function playCue(url, volume = .28) {
    const audio = new Audio(url);
    audio.volume = volume;
    audio.play().catch(() => false);
  }

  function fireLoadedCue() {
    if (loadedCueFired) return;
    loadedCueFired = true;
    loadedCuePending = true;
    const audio = new Audio(cues.loaded);
    audio.volume = .38;
    audio.play().then(() => {
      loadedCuePending = false;
      document.removeEventListener('pointerdown', unlockLoadedCue, true);
    }).catch(() => {});
  }

  document.addEventListener('click', event => {
    const control = event.target instanceof Element
      ? event.target.closest('button, a[href], input[type="button"], input[type="submit"], [role="button"]')
      : null;
    if (!control || control.disabled || control.getAttribute('aria-disabled') === 'true' || control.id === 'audioToggle') return;
    playCue(cues.button);
  });

  function unlockLoadedCue() {
    if (!loadedCuePending) return;
    loadedCuePending = false;
    playCue(cues.loaded, .38);
    document.removeEventListener('pointerdown', unlockLoadedCue, true);
  }
  document.addEventListener('pointerdown', unlockLoadedCue, true);

  const manager = window.AssetDownloadManager;
  if (manager && typeof manager.prepare === 'function') {
    const prepare = manager.prepare.bind(manager);
    manager.prepare = options => {
      const originalProgress = options?.onProgress;
      return prepare({
        ...options,
        onProgress(progress) {
          if (typeof originalProgress === 'function') originalProgress(progress);
          if (progress.total === 0 || progress.completed >= progress.total) fireLoadedCue();
        }
      }).then(result => {
        if (result.total === 0 || result.completed >= result.total) fireLoadedCue();
        return result;
      });
    };
  }
})();
