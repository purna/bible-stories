const CACHE_VERSION = 'v1';
const CACHE_NAME = 'bible-stories-cache-' + CACHE_VERSION;
const RUNTIME_CACHE_NAME = 'bible-stories-runtime-' + CACHE_VERSION;
const OFFLINE_PAGE = new URL('offline.html', self.location).href;

const MANIFEST_URLS = [
  'precache-manifest.json',
  'Daniel/precache-manifest.json',
  'Eiljah/precache-manifest.json',
  'Jonah/precache-manifest.json',
  'Noah/precache-manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(async (cache) => {
        for (const manifestUrl of MANIFEST_URLS) {
          try {
            const response = await fetch(manifestUrl);
            const data = await response.json();
            const urls = data.urls || [];
            await cache.addAll(urls);
          } catch (error) {
            console.warn('Failed to cache manifest at', manifestUrl, error);
          }
        }
        return cache.addAll([OFFLINE_PAGE]);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  const currentCaches = [CACHE_NAME, RUNTIME_CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames.map((name) => {
          if (!currentCaches.includes(name)) {
            return caches.delete(name);
          }
        })
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(RUNTIME_CACHE_NAME)
            .then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match(request)
          .then((cached) => cached || caches.match(OFFLINE_PAGE))
        )
    );
    return;
  }

  if (isLocalStaticAsset(url)) {
    event.respondWith(
      caches.match(request, { ignoreSearch: true })
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(request)
            .then((networkResponse) => {
              if (!networkResponse || networkResponse.status !== 200 || networkResponse.type === 'opaque') {
                return networkResponse;
              }
              const responseToCache = networkResponse.clone();
              caches.open(RUNTIME_CACHE_NAME)
                .then((cache) => cache.put(request, responseToCache));
              return networkResponse;
            })
            .catch(() => {
              if (request.destination === 'document') {
                return caches.match(OFFLINE_PAGE);
              }
            });
        })
    );
  } else if (isExternalResource(url)) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          const responseToCache = networkResponse.clone();
          caches.open(RUNTIME_CACHE_NAME)
            .then((cache) => cache.put(request, responseToCache));
          return networkResponse;
        })
        .catch(() => caches.match(request))
    );
  }
});

function isLocalStaticAsset(url) {
  return url.origin === self.location.origin && (
    url.pathname.endsWith('.svg') ||
    url.pathname.endsWith('.json') ||
    url.pathname.endsWith('.css') ||
    url.pathname.endsWith('.js') ||
    url.pathname.endsWith('.html') ||
    url.pathname.endsWith('.ink') ||
    url.pathname.endsWith('.ico')
  );
}

function isExternalResource(url) {
  return url.origin !== self.location.origin && (
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com' ||
    url.hostname === 'cdnjs.cloudflare.com'
  );
}
