(function () {
  const root = document.documentElement;

  function isInputLocked() {
    return Boolean(root.dataset.storyInputLock);
  }

  function blockWhenLocked(event) {
    if (!isInputLocked()) return;
    if (event.type === 'keydown' && (event.key === 'Escape' || event.key === 'Tab')) return;
    event.stopImmediatePropagation();
    if (event.cancelable) event.preventDefault();
  }

  window.addEventListener('keydown', blockWhenLocked, true);
  window.addEventListener('wheel', blockWhenLocked, { capture: true, passive: false });
  window.addEventListener('touchstart', blockWhenLocked, { capture: true, passive: false });
  window.addEventListener('touchend', blockWhenLocked, { capture: true, passive: false });

  function showRuntimeMessage(message, kind = 'notice') {
    let panel = document.getElementById('storyRuntimeMessage');
    if (!panel) {
      panel = document.createElement('aside');
      panel.id = 'storyRuntimeMessage';
      panel.innerHTML = '<strong></strong><span></span><button type="button" aria-label="Dismiss message">×</button>';
      panel.querySelector('button').addEventListener('click', () => panel.remove());
      document.body.appendChild(panel);
    }
    panel.dataset.kind = kind;
    panel.querySelector('strong').textContent = kind === 'error' ? 'This panel could not load' : 'Downloaded story';
    panel.querySelector('span').textContent = message;
  }

  if (location.protocol === 'file:') {
    window.addEventListener('DOMContentLoaded', () => showRuntimeMessage('Open this comic from the app or a local preview server so its story, SVG and game files can load correctly.'));
  }

  window.addEventListener('unhandledrejection', event => {
    const message = event.reason && event.reason.message ? event.reason.message : 'A required story file was unavailable.';
    showRuntimeMessage(message, 'error');
  });

  window.StoryRuntime = {
    lock(reason = 'overlay') { root.dataset.storyInputLock = reason; },
    unlock(reason) { if (!reason || root.dataset.storyInputLock === reason) delete root.dataset.storyInputLock; },
    isLocked: isInputLocked,
    showMessage: showRuntimeMessage
  };
})();
