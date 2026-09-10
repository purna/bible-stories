/* Gentle wind-swept field shared with Ruth, scoped to chapters 1–3, 9 and 10. */
(function createJobFieldBackground() {
  const field = document.querySelector('.job-grass-field');
  if (!field) return;

  const colors = ['#586b2d', '#6f7830', '#8d8032', '#aa943e', '#c3a64b'];
  const fragment = document.createDocumentFragment();

  for (let x = -3; x <= 103; x += 3 + ((x % 4) + 4) % 4) {
    const seed = Math.abs(Math.sin((x + 17) * 12.9898));
    const clump = document.createElement('div');
    clump.className = 'job-grass-clump';
    clump.style.left = `${x}%`;
    clump.style.setProperty('--clump-size', `${62 + Math.round(seed * 38)}vmin`);
    clump.style.setProperty('--clump-opacity', `${0.48 + seed * 0.36}`);
    clump.style.setProperty('--blade-color', colors[Math.floor(seed * colors.length) % colors.length]);
    clump.style.setProperty('--sway-time', `${20 + seed * 10}s`);
    clump.style.setProperty('--sway-delay', `${-seed * 20}s`);

    for (let bladeIndex = 0; bladeIndex < 3; bladeIndex += 1) {
      const blade = document.createElement('div');
      blade.className = 'job-grass-blade';
      clump.appendChild(blade);
    }

    fragment.appendChild(clump);
  }

  field.appendChild(fragment);
})();
