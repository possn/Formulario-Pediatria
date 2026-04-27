const CACHE_NAME = 'formulario-pediatria-v1';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png'
];

// Cache images on demand (not all upfront - 100 images is too large)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache images and pages dynamically
        if (response && response.status === 200) {
          const url = event.request.url;
          if (url.includes('/images/') || url.endsWith('.html') || url.endsWith('.json')) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
        }
        return response;
      }).catch(() => {
        // Offline fallback for images
        if (event.request.destination === 'image') {
          return new Response('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect fill="#1a3a5c" width="400" height="300"/><text fill="white" x="50%" y="50%" text-anchor="middle" font-size="20">Offline</text></svg>', {
            headers: { 'Content-Type': 'image/svg+xml' }
          });
        }
      });
    })
  );
});
