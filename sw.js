// File: sw.js
const CACHE_NAME = 'drop-ticket-cache-v1';
const urlsToCache = [
    '/',
    '/style.css',
    '/index.html',
    '/manifest.json',
    '/anim.mp4',
    '/refresh.json',
    '/qr.png',
    '/images/icon-192.png',
    '/images/icon-512.png'
];

// Installa il service worker e memorizza i file nella cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercetta le richieste di rete e restituisci i file dalla cache, se disponibili
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
