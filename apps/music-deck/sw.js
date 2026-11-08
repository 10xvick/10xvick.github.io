// Service Worker for Potify PWA (Offline-First App Shell & Media Player)
const CACHE_NAME = 'potify-v3';

// Core shell assets to precache during service worker installation
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './favicon.ico'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('Precache partial warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith('http')) return;

  const url = new URL(event.request.url);

  // 1. Navigation requests (Opening the app, refreshing, switching views)
  // Strategy: Network-First with instant Cache Fallback
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        })
        .catch(async () => {
          const cache = await caches.open(CACHE_NAME);
          const cached = await cache.match(event.request) ||
                         await cache.match('./index.html') ||
                         await cache.match('./') ||
                         await cache.match('index.html');
          if (cached) return cached;
          return new Response('Offline', { status: 503, statusText: 'Offline' });
        })
    );
    return;
  }

  // 2. Static application bundle assets (JS chunks, CSS stylesheets, fonts, WebManifest, SVG)
  // Strategy: Cache-First with Network Background Revalidation (Stale-While-Revalidate)
  const isStaticAsset = url.pathname.includes('/assets/') ||
                        url.pathname.endsWith('.js') ||
                        url.pathname.endsWith('.css') ||
                        url.pathname.endsWith('.woff2') ||
                        url.pathname.endsWith('.woff') ||
                        url.pathname.endsWith('.ttf') ||
                        url.pathname.endsWith('.webmanifest') ||
                        url.pathname.endsWith('.svg') ||
                        url.pathname.endsWith('.ico') ||
                        url.hostname === 'fonts.googleapis.com' ||
                        url.hostname === 'fonts.gstatic.com';

  if (isStaticAsset) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          // Update cache in background if online
          fetch(event.request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
            }
          }).catch(() => {});
          return cachedResponse;
        }

        // Not in cache yet: fetch from network and store in cache
        return fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const clone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return networkResponse;
        });
      })
    );
    return;
  }

  // 3. Online-only API & Proxy requests (JioSaavn, Cloudflare worker, LRCLIB)
  // Strategy: Network-Only with graceful empty JSON fallback when offline
  const isApiRequest = url.pathname.includes('/api') ||
                       url.hostname.includes('workers.dev') ||
                       url.hostname.includes('lrclib.net') ||
                       url.hostname.includes('jiosaavn.com');

  if (isApiRequest) {
    event.respondWith(
      fetch(event.request).catch(() => {
        return new Response(JSON.stringify({ status: 'offline', data: [], results: [] }), {
          headers: { 'Content-Type': 'application/json' }
        });
      })
    );
    return;
  }

  // 4. Media & external images
  // Strategy: Cache-First, fallback to network, cache successful responses
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return networkResponse;
      }).catch(() => {
        if (event.request.destination === 'image') {
          // Return transparent 1x1 GIF fallback
          return new Response(
            Uint8Array.from([71,73,70,56,57,97,1,0,1,0,128,0,0,0,0,0,255,255,255,33,249,4,1,0,0,0,0,44,0,0,0,0,1,0,1,0,0,2,1,68,0,59]),
            { headers: { 'Content-Type': 'image/gif' } }
          );
        }
        return new Response('Offline', { status: 503 });
      });
    })
  );
});
