(function () {
  const themes = {
    Adam: { title: 'ADAM & EVE', icon: '✨', color: '#4b9b72' },
    Daniel: { title: 'DANIEL', icon: '🦁', color: '#704b9f' },
    Eiljah: { title: 'ELIJAH', icon: '🔥', color: '#bd6a2d' },
    Jonah: { title: 'JONAH', icon: '🐋', color: '#197f9f' },
    Moses: { title: 'MOSES', icon: '🔥', color: '#c87a30' },
    Noah: { title: 'NOAH', icon: '🚢', color: '#315f85' }
  };
  const parts = location.pathname.split('/').filter(Boolean);
  const folder = (/\.html?$/i.test(parts.at(-1) || '') ? parts.at(-2) : parts.at(-1)) || 'Story';
  const theme = themes[folder] || { title: folder.toUpperCase(), icon: '📖', color: '#277b9b' };

  function build() {
    if (document.getElementById('comicLoader')) return;
    const loader = document.createElement('section');
    loader.id = 'comicLoader';
    loader.className = 'comic-loader';
    loader.style.setProperty('--loader-color', theme.color);
    loader.setAttribute('aria-live', 'polite');
    loader.innerHTML = `<div class="comic-loader-card"><span class="comic-loader-issue">DOWNLOADING ISSUE</span><h1>${theme.title}</h1><div class="comic-loader-icon" aria-hidden="true">${theme.icon}</div><div class="comic-loader-status">Preparing the panels…</div><div class="comic-loader-track"><div class="comic-loader-fill"></div></div><div class="comic-loader-count">0%</div><button class="comic-loader-skip" type="button">Open while downloading</button></div>`;
    document.body.prepend(loader);
    const finish = () => {
      if (window.__storyAssetsReady) return;
      window.__storyAssetsReady = true;
      window.dispatchEvent(new CustomEvent('story:assetsready'));
      loader.classList.add('done');
      setTimeout(() => loader.remove(), 450);
    };
    loader.querySelector('button').addEventListener('click', finish);

    if (!window.AssetDownloadManager || location.protocol === 'file:') {
      loader.querySelector('.comic-loader-status').textContent = location.protocol === 'file:' ? 'Open from the app to download this issue.' : 'Opening comic…';
      setTimeout(finish, 900);
      return;
    }

    AssetDownloadManager.prepare({ onProgress: ({ completed, total, failures }) => {
      const percent = total ? Math.round(completed / total * 100) : 100;
      loader.style.setProperty('--loader-progress', `${percent}%`);
      loader.querySelector('.comic-loader-count').textContent = `${percent}% · ${completed}/${total}`;
      loader.querySelector('.comic-loader-status').textContent = failures ? `Preparing panels · ${failures} item${failures === 1 ? '' : 's'} will retry` : 'Downloading panels, music and effects…';
    }}).then(result => {
      loader.querySelector('.comic-loader-status').textContent = result.failures.length ? 'Comic ready · missing items will retry when needed' : 'Issue downloaded — ready!';
      setTimeout(finish, 500);
    }).catch(error => {
      loader.querySelector('.comic-loader-status').textContent = error.message;
      loader.querySelector('.comic-loader-status').classList.add('comic-loader-error');
      loader.querySelector('button').textContent = 'Open comic anyway';
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build);
  else build();
})();
