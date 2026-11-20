(function () {
  const startScreen = document.getElementById('startScreen');
  const reader = document.getElementById('reader');
  const endScreen = document.getElementById('endScreen');
  const chapterName = document.getElementById('chapterName');
  const chapterCount = document.getElementById('chapterCount');
  const scene = document.getElementById('scene');
  const line = document.getElementById('line');
  const choices = document.getElementById('choices');
  const nextBtn = document.getElementById('nextBtn');
  const picked = document.getElementById('picked');

  let acts = [];
  let actIndex = 0;
  let lineIndex = 0;
  let selected = '';

  function show(screen) {
    for (const el of [startScreen, reader, endScreen]) el.classList.add('hidden');
    screen.classList.remove('hidden');
  }

  function renderLine() {
    const act = acts[actIndex];
    const beat = act.lines[lineIndex];
    chapterName.textContent = act.name;
    chapterCount.textContent = `${actIndex + 1} / ${acts.length}`;
    scene.setAttribute('src', beat.art || act.art || 'assets/art/scene-one.svg');
    line.textContent = beat.text || '';
    choices.replaceChildren();

    if (beat.choices) {
      nextBtn.disabled = true;
      for (const choice of beat.choices) {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = choice.label;
        button.addEventListener('click', () => {
          selected = choice.label;
          line.textContent = choice.note || choice.label;
          nextBtn.disabled = false;
          for (const child of choices.children) child.disabled = true;
        });
        choices.appendChild(button);
      }
    } else {
      nextBtn.disabled = false;
      nextBtn.textContent = lineIndex < act.lines.length - 1 || actIndex < acts.length - 1 ? 'Next' : 'Finish';
    }
  }

  function next() {
    const act = acts[actIndex];
    if (lineIndex < act.lines.length - 1) {
      lineIndex += 1;
      renderLine();
      return;
    }
    if (actIndex < acts.length - 1) {
      actIndex += 1;
      lineIndex = 0;
      renderLine();
      return;
    }
    picked.textContent = selected ? `You chose: ${selected}` : '';
    show(endScreen);
  }

  async function main() {
    try {
      const response = await fetch('data/manifest.json');
      if (!response.ok) throw new Error(`Could not load data/manifest.json (${response.status})`);
      const manifest = await response.json();
      acts = await Promise.all(manifest.acts.map(async (act) => {
        const actResponse = await fetch(`data/${act.file}`);
        if (!actResponse.ok) throw new Error(`Could not load data/${act.file} (${actResponse.status})`);
        const data = await actResponse.json();
        return { name: act.name, art: act.art, lines: data.lines || [] };
      }));
      if (!acts.length) throw new Error('The story has no acts.');
      renderLine();
    } catch (error) {
      line.textContent = `Failed to load the story: ${error.message}`;
    }
  }

  document.getElementById('startBtn').addEventListener('click', () => {
    if (!acts.length) return;
    show(reader);
    renderLine();
  });
  nextBtn.addEventListener('click', next);
  main();
})();
