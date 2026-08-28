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

    await new Promise(requestAnimationFrame);
    if (!initialized) {
      await IsometricEngine.init(world);
      initialized = true;
      if (window.Compass) Compass.init().catch(() => {});
    }
    IsometricEngine.setEnabled(true);
    await IsometricEngine.goToScene(chapter.scene);
  }

  function finish(advance) {
    if (!active) return;
    active = false;
    IsometricEngine.setEnabled(false);
    overlay.hidden = true;
    document.body.style.overflow = '';
    const callback = continuation;
    continuation = null;
    if (advance && callback) callback();
  }

  window.addEventListener('isometric:progress', event => {
    const { completed, total } = event.detail;
    progress.textContent = `${completed} of ${total} story moments found`;
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
      holdBtn.style.setProperty('--hold-progress', '0%');
      if (completed) {
        holdPanel.hidden = true;
        event.detail.onComplete(duration);
      }
    };
    const tick = now => {
      const elapsed = now - start;
      holdBtn.style.setProperty('--hold-progress', `${Math.min(100, elapsed / duration * 100)}%`);
      if (elapsed >= duration) stop(true); else frame = requestAnimationFrame(tick);
    };
    holdBtn.onpointerdown = e => { e.preventDefault(); start = performance.now(); frame = requestAnimationFrame(tick); };
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
