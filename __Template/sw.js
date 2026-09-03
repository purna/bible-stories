const STORY_CACHE_VERSION = 'v2';
const STORY_SCOPE = new URL('./', self.location.href);
const STORY_FOLDER = STORY_SCOPE.pathname.split('/').filter(Boolean).pop() || 'story';
const STORY_CACHE = `${STORY_FOLDER}-comic-${STORY_CACHE_VERSION}`;

function localPath(entry) {
  const prefix = `${STORY_FOLDER}/`;
  return entry.startsWith(prefix) ? entry.slice(prefix.length) : entry;
}

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(STORY_CACHE);
    const response = await fetch('precache-manifest.json');
    const manifest = await response.json();
    for (const entry of manifest.urls || []) {
      const request = new URL(localPath(entry), STORY_SCOPE);
      try {
        const asset = await fetch(request);
        if (asset.ok) await cache.put(request, asset.clone());
      } catch (error) {
        console.warn('Story asset was not cached:', request.pathname, error);
      }
    }
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(`${STORY_FOLDER}-comic-`) && name !== STORY_CACHE).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(STORY_SCOPE.pathname)) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).catch(async () =>
      (await caches.match(event.request)) ||
      (await caches.match(new URL('index.html', STORY_SCOPE))) ||
      caches.match(new URL('offline.html', STORY_SCOPE))
    ));
    return;
  }

  event.respondWith(caches.match(event.request, { ignoreSearch: true }).then(cached => cached || fetch(event.request).then(response => {
    if (response.ok) caches.open(STORY_CACHE).then(cache => cache.put(event.request, response.clone()));
    return response;
  })));
});
