(function () {
  const chapters = [
    { scene: 'act1_ship', title: 'Runaway Ship', instructions: 'Guide Jonah across the deck and investigate the glowing story marks.', palette: ['#123d55', '#2286a1'] },
    { scene: 'act2_whale', title: 'Into the Deep', instructions: 'Find the moments in the storm. When prompted, hold on and pray.', palette: ['#061c37', '#087f9b'] },
    { scene: 'act3_nineveh', title: 'The Great City', instructions: 'Walk through Nineveh and decide how Jonah responds.', palette: ['#a94f2d', '#efb74d'] },
    { scene: 'act4_figtree', title: 'The Hillside Lesson', instructions: 'Explore the hillside and discover what mercy means.', palette: ['#43322d', '#9f783f'] }
  ];

  let active = false;
  let initialized = false;
  let continuation = null;
  let lastProgress = 'Find the glowing story moments';
  const overlay = document.getElementById('jonahGame');
  const world = document.getElementById('isometric-container');
  const title = document.getElementById('game-title');
  const instructions = document.getElementById('game-instructions');
  const progress = document.getElementById('game-progress');
  const completeBtn = document.getElementById('game-complete-btn');
  const choicePanel = document.getElementById('game-choice');
  const choiceButtons = document.getElementById('game-choice-buttons');
  const holdPanel = document.getElementById('game-hold');
  const holdBtn = document.getElementById('game-hold-btn');
  let prayerSound = null;

  async function launch(index, onContinue) {
    const chapter = chapters[index];
    if (!chapter || active) return;
    active = true;
    continuation = onContinue;
    overlay.hidden = false;
    overlay.style.background = `radial-gradient(circle at 50% 30%, ${chapter.palette[1]}, ${chapter.palette[0]} 72%)`;
    title.textContent = chapter.title;
    instructions.textContent = chapter.instructions;
    progress.textContent = 'Find the glowing story moments';
    completeBtn.hidden = true;
    choicePanel.hidden = true;
    holdPanel.hidden = true;
    document.body.style.overflow = 'hidden';
    if (window.StoryRuntime) StoryRuntime.setMode('game');

    try {
      await new Promise(requestAnimationFrame);
      if (!initialized) {
        await IsometricEngine.init(world);
        initialized = true;
        if (window.Compass) Compass.init().catch(() => {});
      }
      IsometricEngine.setEnabled(true);
      const loaded = await IsometricEngine.goToScene(chapter.scene);
      if (loaded === false) showFallback(chapter);
    } catch (error) {
      showFallback(chapter, error.message);
    }
  }

  function showFallback(chapter, reason = '') {
    IsometricEngine.setEnabled(false);
    world.innerHTML = `<div class="game-fallback" role="img" aria-label="Illustrated fallback for ${chapter.title}"><span>✦</span><strong>${chapter.title}</strong><p>This playable panel needs WebGL. You can continue with the illustrated comic.</p>${reason ? `<small>${reason}</small>` : ''}</div>`;
    const loader = document.getElementById('iso-loader');
    if (loader) loader.classList.add('hidden');
    progress.textContent = 'Illustrated fallback ready';
    completeBtn.hidden = false;
  }

  function finish(advance) {
    if (!active) return;
    active = false;
    IsometricEngine.setEnabled(false);
    overlay.hidden = true;
    document.body.style.overflow = '';
    if (window.StoryRuntime) StoryRuntime.setMode('reading');
    const callback = continuation;
    continuation = null;
    if (advance && callback) callback();
  }

  window.addEventListener('isometric:progress', event => {
    const { completed, total } = event.detail;
    lastProgress = `${completed} of ${total} story moments found`;
    progress.textContent = lastProgress;
  });
  window.addEventListener('isometric:moment', event => {
    const responses = {
      lots_barrel: 'The lot points to Jonah — running has caught up with him.',
      prayer_alcove: 'In the dark, Jonah finally turns toward God.',
      city_gates: 'Nineveh is not an idea now; it is a city full of people.',
      market_row: 'Stalls close. Merchants put on sackcloth. The wave reaches the market first.',
      noble_house: 'The great house listens. Even the powerful put ash on their heads.',
      sermon_square: 'The warning travels through the square, person to person.',
      kings_palace: 'The king rises from his throne, lays his robe aside, and sits in ashes.',
      the_plant: 'Jonah feels the gift of shade — and how quickly it can vanish.',
      gods_question: 'The final question turns Jonah’s attention from the plant to the city.'
    };
    progress.textContent = responses[event.detail.id] || `${event.detail.label} discovered.`;
    setTimeout(() => { if (active) progress.textContent = lastProgress; }, 2600);
  });
  window.addEventListener('isometric:error', event => {
    if (active) showFallback(chapters.find(item => item.scene === event.detail.sceneId) || chapters[0], event.detail.message);
  });
  window.addEventListener('isometric:repentance', () => {
    if (!active) return;
    const banner = document.createElement('div');
    banner.className = 'repentance-banner';
    banner.setAttribute('role', 'status');
    banner.textContent = 'Repentance spreads through the city.';
    overlay.appendChild(banner);
    setTimeout(() => banner.remove(), 1700);
  });
  window.addEventListener('isometric:actComplete', () => {
    progress.textContent = 'Panel complete!';
    completeBtn.hidden = false;
  });
  window.addEventListener('isometric:choice', event => {
    choiceButtons.replaceChildren();
    (event.detail.choices || []).forEach((label, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = typeof label === 'string' ? label : (label.label || label.text || `Choice ${index + 1}`);
      button.addEventListener('click', () => {
        choicePanel.hidden = true;
        event.detail.onChoose(index);
      });
      choiceButtons.appendChild(button);
    });
    choicePanel.hidden = false;
  });
  window.addEventListener('isometric:holdPrompt', event => {
    holdPanel.hidden = false;
    let start = 0;
    let frame = 0;
    const duration = event.detail.durationMs || 4000;
    const stop = completed => {
      cancelAnimationFrame(frame);
      if (prayerSound) { prayerSound.pause(); prayerSound.currentTime = 0; prayerSound = null; }
      holdBtn.style.setProperty('--hold-progress', '0%');
      overlay.style.setProperty('--prayer-progress', '0');
      document.querySelector('#compass-indicator i')?.style.removeProperty('--compass-position');
      if (completed) {
        holdPanel.hidden = true;
        event.detail.onComplete(duration);
      }
    };
    const tick = now => {
      const elapsed = now - start;
      holdBtn.style.setProperty('--hold-progress', `${Math.min(100, elapsed / duration * 100)}%`);
      const prayerProgress = Math.min(1, elapsed / duration);
      overlay.style.setProperty('--prayer-progress', String(prayerProgress));
      document.querySelector('#compass-indicator i')?.style.setProperty('--compass-position', `${50 + prayerProgress * 50}%`);
      if (prayerSound) prayerSound.volume = Math.min(.2, .04 + prayerProgress * .16);
      if (elapsed >= duration) stop(true); else frame = requestAnimationFrame(tick);
    };
    holdBtn.onpointerdown = e => { e.preventDefault(); prayerSound = window.__comic?.audio?.startSfxLoop('assets/audio/sfx/deep_bubbles.mp3', .04) || null; start = performance.now(); frame = requestAnimationFrame(tick); };
    holdBtn.onpointerup = () => stop(false);
    holdBtn.onpointercancel = () => stop(false);
    holdBtn.onpointerleave = () => stop(false);
  });

  document.querySelectorAll('.game-dpad button').forEach(button => {
    const key = button.dataset.key;
    const release = () => IsometricEngine.setInput(key, false);
    button.addEventListener('pointerdown', e => { e.preventDefault(); button.setPointerCapture(e.pointerId); IsometricEngine.setInput(key, true); });
    button.addEventListener('pointerup', release);
    button.addEventListener('pointercancel', release);
  });
  completeBtn.addEventListener('click', () => finish(true));
  document.getElementById('game-skip-btn').addEventListener('click', () => finish(true));

  window.JonahGame = { launch, isActive: () => active, shouldLaunch: index => Boolean(chapters[index]) };
})();
