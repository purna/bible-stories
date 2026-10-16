(function () {
  function initStoryInfo() {
    const audioButton = document.getElementById('audioToggle');
    if (!audioButton || document.getElementById('infoToggle')) return;

    const oldFooter = document.querySelector('.tools-footer');
    const toolLinks = oldFooter
      ? Array.from(oldFooter.querySelectorAll('a')).map(link => ({ href: link.getAttribute('href'), label: link.textContent.trim() }))
      : [];
    if (oldFooter) oldFooter.remove();

    const storyName = (document.title.split(/[—|]/)[0] || 'Bible Story').trim();
    const libraries = ['Web Audio API', 'HTML Canvas', 'Google Fonts'];
    if (window.THREE) libraries.unshift(`Three.js ${window.THREE.REVISION ? `r${window.THREE.REVISION}` : ''}`.trim());
    if (window.gsap) libraries.unshift(`GSAP ${window.gsap.version || ''}`.trim());

    const infoButton = document.createElement('button');
    infoButton.id = 'infoToggle';
    infoButton.type = 'button';
    infoButton.title = 'Information and credits';
    infoButton.setAttribute('aria-label', 'Open information and credits');
    infoButton.setAttribute('aria-haspopup', 'dialog');
    infoButton.setAttribute('aria-expanded', 'false');
    infoButton.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><circle class="info-disc" cx="16" cy="16" r="12.5"/><path class="info-mark" d="M16 14v8M16 9.5h.01"/></svg>';
    audioButton.insertAdjacentElement('afterend', infoButton);

    const modal = document.createElement('div');
    modal.className = 'story-info-modal';
    modal.hidden = true;
    modal.innerHTML = `
      <section class="story-info-card" role="dialog" aria-modal="true" aria-labelledby="storyInfoTitle">
        <button class="story-info-close" type="button" aria-label="Close information">×</button>
        <span class="story-info-kicker">BEHIND THE PANELS</span>
        <h2 id="storyInfoTitle">${escapeHtml(storyName)}</h2>
        <p class="story-info-lead">An interactive comic from <a href="https://www.pixelagent.co.uk/" target="_blank" rel="noopener noreferrer">Pixel Agent</a>.</p>

        <h3>Credits</h3>
        <p><strong>Creative direction, illustration, animation and development:</strong> Pixel Agent</p>
        <p><strong>Story:</strong> Adapted from the biblical account for an interactive comic experience.</p>
        <p><strong>Music and sound:</strong> Original instrumental story music and interface sound design.</p>

        <h3>Built with</h3>
        <ul class="story-info-libraries">${libraries.map(item => `<li>${escapeHtml(item)}</li>`).join('')}<li><a href="https://blambot.com/" target="_blank" rel="noopener noreferrer" title="Comic lettering fonts and resources">Blambot.com</a></li></ul>

        ${toolLinks.length ? `<h3>Create story assets</h3><div class="story-info-links">${toolLinks.map(link => `<a href="${escapeAttribute(link.href)}">${escapeHtml(link.label)}</a>`).join('')}</div>` : ''}

        <h3>About</h3>
        <p>Explore more creative, interactive work at <a href="https://www.pixelagent.co.uk/" target="_blank" rel="noopener noreferrer">www.pixelagent.co.uk</a>.</p>
        <p class="story-info-small">This project is an independent creative adaptation. Library names and trademarks belong to their respective owners.</p>
      </section>`;
    document.body.appendChild(modal);

    // Escape the app's stacking context so credits cannot cover the controls.
    const controls = document.createElement('div');
    controls.id = 'storyControls';
    controls.setAttribute('role', 'group');
    controls.setAttribute('aria-label', 'Story controls');
    for (const button of [audioButton, infoButton, document.getElementById('nextBtn'), document.getElementById('nextLineBtn')]) {
      if (button) controls.appendChild(button);
    }
    document.body.appendChild(controls);
    function attachEditorButton() {
      const editButton = document.getElementById('storyEditorToggle');
      if (!editButton) return false;
      controls.appendChild(editButton);
      return true;
    }
    if (!attachEditorButton()) {
      const editorObserver = new MutationObserver(() => {
        if (attachEditorButton()) editorObserver.disconnect();
      });
      editorObserver.observe(document.body, { childList: true });
    }

    const startScreen = document.getElementById('startScreen');
    function syncControls() {
      controls.hidden = Boolean(startScreen && !startScreen.hidden && !startScreen.classList.contains('hide') && getComputedStyle(startScreen).display !== 'none' && getComputedStyle(startScreen).visibility !== 'hidden');
    }
    if (startScreen) new MutationObserver(syncControls).observe(startScreen, { attributes: true, attributeFilter: ['style', 'class', 'hidden'] });
    syncControls();

    const card = modal.querySelector('.story-info-card');
    const closeButton = modal.querySelector('.story-info-close');
    let previousOverflow = '';

    function openModal() {
      if (window.StoryRuntime) window.StoryRuntime.lock('info-modal');
      previousOverflow = document.body.style.overflow;
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      infoButton.setAttribute('aria-expanded', 'true');
      closeButton.focus();
    }
    function closeModal() {
      if (window.StoryRuntime) window.StoryRuntime.unlock('info-modal');
      modal.hidden = true;
      document.body.style.overflow = previousOverflow;
      infoButton.setAttribute('aria-expanded', 'false');
      infoButton.focus();
    }
    infoButton.addEventListener('click', openModal);
    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
    document.addEventListener('keydown', event => {
      if (modal.hidden) return;
      if (event.key === 'Escape') closeModal();
      if (event.key === 'Tab') {
        const focusable = Array.from(card.querySelectorAll('button, a[href]'));
        const first = focusable[0], last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
  }

  function escapeHtml(value) {
    const div = document.createElement('div');
    div.textContent = value || '';
    return div.innerHTML;
  }
  function escapeAttribute(value) {
    return String(value || '').replace(/["&<>]/g, char => ({ '"': '&quot;', '&': '&amp;', '<': '&lt;', '>': '&gt;' })[char]);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initStoryInfo);
  else initStoryInfo();
})();
