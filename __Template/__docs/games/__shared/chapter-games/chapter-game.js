(async () => {
  'use strict';

  const script = document.currentScript;
  const storyName = script.dataset.story;
  const actNumber = Number(script.dataset.act);
  const canonUrl = new URL('../../story-canon.json', script.src);

  let canon;
  try {
    const response = await fetch(canonUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    canon = await response.json();
  } catch (error) {
    document.body.innerHTML = `<main class="error"><h1>Game data unavailable</h1><p>Serve this folder from a local web server so the game can load <code>story-canon.json</code>.</p></main>`;
    return;
  }

  const story = canon[storyName];
  const chapter = story?.chapters?.find((item) => item.number === actNumber);
  if (!story || !chapter) {
    document.body.innerHTML = '<main class="error"><h1>Chapter not found</h1></main>';
    return;
  }

  document.title = `${story.title} — ${chapter.title}`;
  document.head.insertAdjacentHTML('beforeend', `<style>
    :root{color-scheme:dark;font-family:Inter,ui-rounded,system-ui,sans-serif;background:#101b2b;color:#fff}
    *{box-sizing:border-box}body{margin:0;min-height:100vh;display:grid;place-items:center;background:radial-gradient(circle at top,#264467,#101b2b 60%);padding:24px}
    main{width:min(720px,100%);background:#172a42;border:1px solid #ffffff2b;border-radius:24px;padding:clamp(24px,5vw,48px);box-shadow:0 24px 80px #0008}
    .eyebrow{color:#ffd978;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.question{color:#c9d8ea}.mission{font-size:clamp(1.15rem,3vw,1.5rem);line-height:1.5;background:#0d1a2c;padding:20px;border-radius:16px;border-left:5px solid #ffd978}
    .steps{display:grid;gap:12px;margin:26px 0}.step{display:flex;gap:12px;align-items:center;width:100%;padding:16px;text-align:left;border:1px solid #ffffff26;border-radius:14px;background:#213b5d;color:#fff;font:inherit;cursor:pointer}.step:hover{background:#294a73}.step.done{background:#244f3b;border-color:#6ee7a8}.step span{display:grid;place-items:center;width:28px;height:28px;border:2px solid currentColor;border-radius:50%;flex:none}
    .progress{height:10px;background:#0b1727;border-radius:99px;overflow:hidden}.bar{height:100%;width:0;background:linear-gradient(90deg,#ffd978,#6ee7a8);transition:width .25s}button.finish{width:100%;margin-top:22px;padding:15px;border:0;border-radius:999px;background:#ffd978;color:#15243a;font-weight:900;font-size:1rem;cursor:pointer}button.finish:disabled{opacity:.4;cursor:not-allowed}.complete{text-align:center}.complete h2{font-size:2rem;color:#ffd978}
    code{color:#ffd978}.error{max-width:620px}
  </style>`);

  const actions = ['Observe the scene and identify what matters.', 'Make the faithful choice described by the mission.', 'Complete the challenge and reflect on the outcome.'];
  document.body.innerHTML = `<main>
    <div class="eyebrow">${story.title} · Act ${actNumber}</div>
    <h1>${chapter.title}</h1>
    <p class="question">${story.question}</p>
    <p class="mission"><strong>Your mission:</strong> ${chapter.game}</p>
    <div class="progress" aria-label="Progress"><div class="bar"></div></div>
    <div class="steps">${actions.map((label, index) => `<button class="step" data-step="${index}"><span>${index + 1}</span>${label}</button>`).join('')}</div>
    <button class="finish" disabled>Complete chapter</button>
  </main>`;

  const steps = [...document.querySelectorAll('.step')];
  const finish = document.querySelector('.finish');
  const bar = document.querySelector('.bar');
  const update = () => {
    const done = steps.filter((step) => step.classList.contains('done')).length;
    bar.style.width = `${(done / steps.length) * 100}%`;
    finish.disabled = done !== steps.length;
  };
  steps.forEach((step) => step.addEventListener('click', () => {
    step.classList.toggle('done');
    update();
  }));
  finish.addEventListener('click', () => {
    document.querySelector('main').innerHTML = `<section class="complete"><div class="eyebrow">Chapter complete</div><h2>${chapter.title}</h2><p>${chapter.game}</p></section>`;
    window.parent.postMessage({ type: 'bible-story-game-complete', story: storyName, act: actNumber }, '*');
    window.dispatchEvent(new CustomEvent('bible-story-game-complete', { detail: { story: storyName, act: actNumber } }));
  });
})();
