const CACHE_NAME = 'abraham-story-bundle-v1';
const STORY_SCOPE = new URL('./', self.location.href);

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      const response = await fetch(new URL('precache-manifest.json', STORY_SCOPE));
      if (!response.ok) return;
      const manifest = await response.json();
      for (const entry of manifest.urls || []) {
        const request = new URL(entry, STORY_SCOPE);
        try {
          const asset = await fetch(request);
          if (asset.ok) await cache.put(request, asset.clone());
        } catch (_) { /* Skip assets unavailable in the current preview environment. */ }
      }
    } catch (_) { /* Service workers may be unavailable on file:// previews. */ }
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('abraham-story-bundle-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(STORY_SCOPE.pathname)) return;
  if (url.pathname.endsWith('/precache-manifest.json')) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(event.request, { ignoreSearch: true });
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response.ok) cache.put(event.request, response.clone());
      return response;
    } catch (error) {
      if (event.request.mode === 'navigate') return (await cache.match(new URL('index.html', STORY_SCOPE))) || Response.error();
      throw error;
    }
  })());
});
