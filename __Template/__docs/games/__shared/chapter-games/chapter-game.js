(() => {
  'use strict';
  const script = document.currentScript;
  const storyKey = script.dataset.story;
  const act = Number(script.dataset.act || 1);
  const engineId = script.dataset.engine;
  const engines = {
    'find-path': { name: 'Find the Faithful Path', file: 'find_path_6x6.html' },
    'listen-respond': { name: 'Listen and Respond', file: 'listen_respond_3x2.html' },
    'tend-garden': { name: 'Tend the Garden', file: 'garde_game_3x3.html' },
    'fit-pieces': { name: 'Fit the Pieces', file: 'fit_pieces_3x3.html' },
    'look-closely': { name: 'Look Closely', file: 'look_closely_3x3.html' },
    'tap-sequence': { name: 'Complete the Story Beat', file: 'tap_sequence_3x2.html' },
    'match-it-up': { name: 'Match It Up', file: 'match_it_up_3x4.html' },
    'keep-balance': { name: 'Keep the Balance', file: 'keep_balance_x3.html' },
    'ready-then-act': { name: 'Ready, Then Act', file: 'ready_then_act_multibar_balanced.html' },
    'watch-and-move': { name: 'Watch and Move', file: 'watch_move_river_crossing_easy.html' },
    'gather-with-care': { name: 'Gather with Care', file: 'manna_drop.html' },
    'story-builder': { name: 'Build the Scene', file: 'temple_builder_v1.html' }
  };
  const engine = engines[engineId] || engines['tap-sequence'];
  const requestedPrototype = script.dataset.prototype;
  const prototype = requestedPrototype && /^[a-z0-9_.]+\.html$/.test(requestedPrototype)
    ? requestedPrototype
    : engine.file;
  const escapeHtml = value => String(value ?? '').replace(/[&<>"]/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'
  })[character]);

  const style = document.createElement('style');
  style.textContent = `
    :root{font-family:Inter,ui-rounded,system-ui,-apple-system,sans-serif;color:#30251b;background:#ead9c1}
    *{box-sizing:border-box}body{margin:0;min-height:100vh;background:radial-gradient(circle at top,#fff8ea,#e2ceb1);padding:16px}
    main{width:min(1000px,100%);margin:auto;background:#fffaf0;border:2px solid #d1b58e;border-radius:24px;overflow:hidden;box-shadow:0 18px 56px #54371729}
    header{padding:18px 22px 16px}.eyebrow{color:#87512f;font-size:.76rem;font-weight:900;letter-spacing:.12em;text-transform:uppercase}
    h1{margin:.25rem 0;font-size:clamp(1.55rem,4vw,2.45rem)}.objective{margin:.4rem 0 0;color:#55493e;font-size:1.05rem;line-height:1.4}
    .engine{display:flex;align-items:center;gap:10px;padding:10px 22px;background:#f1e5d4;color:#66584a;font-weight:850}.engine:before{content:'';width:10px;height:10px;border-radius:50%;background:#3d8159}
    iframe{display:block;width:100%;height:min(620px,70vh);min-height:460px;border:0;background:#fff}.error{padding:36px;text-align:center}
    @media(max-width:600px){body{padding:0}main{border:0;border-radius:0}header{padding:14px 16px}.engine{padding:9px 16px}iframe{height:68vh;min-height:430px}}
  `;
  document.head.appendChild(style);

  function mount(story, chapter) {
    document.title = `${story.title} — Act ${act}: ${chapter.title}`;
    document.body.innerHTML = `<main>
      <header>
        <div class="eyebrow">${escapeHtml(story.title)} · Act ${act}</div>
        <h1>${escapeHtml(chapter.title)}</h1>
        <p class="objective">${escapeHtml(chapter.game)}</p>
      </header>
      <div class="engine">${escapeHtml(engine.name)}</div>
      <iframe title="${escapeHtml(engine.name)}: ${escapeHtml(chapter.title)}" src="../../../__shared/chapter-games/engines/${prototype}"></iframe>
    </main>`;
  }

  let completed = false;
  window.addEventListener('message', event => {
    const frame = document.querySelector('iframe');
    if (!frame || event.source !== frame.contentWindow || completed) return;
    if (event.data?.type !== 'game-complete' && event.data?.type !== 'bible-story-game-complete') return;
    completed = true;
    const detail = { story: storyKey, act, mechanic: engineId };
    try { localStorage.setItem(`bible-game:${storyKey}:${act}`, 'complete'); } catch {}
    window.dispatchEvent(new CustomEvent('game-complete', { detail }));
    window.dispatchEvent(new CustomEvent('bible-story-game-complete', { detail }));
    if (window.parent !== window) window.parent.postMessage({ type: 'bible-story-game-complete', ...detail }, '*');
  });

  fetch('../../story-canon.json')
    .then(response => { if (!response.ok) throw Error(`HTTP ${response.status}`); return response.json(); })
    .then(canon => {
      const story = canon[storyKey];
      if (!story) throw Error('Story not found');
      const chapter = story.chapters.find(item => Number(item.number) === act);
      if (!chapter) throw Error('Act not found');
      mount(story, chapter);
    })
    .catch(error => {
      document.body.innerHTML = `<main class="error"><h1>Game data unavailable</h1><p>Serve this package over HTTP so the story-level <code>story-canon.json</code> can load.</p><p>${escapeHtml(error.message)}</p></main>`;
    });
})();
