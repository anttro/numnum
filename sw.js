const CACHE_NAME = 'numnum-v27';
const ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/numerals.js',
  '/manifest.json',
  '/icon.svg',
  '/icon-192.png',
  '/icon-512.png',
  '/theory/base3.en.html',
  '/theory/base3.ru.html',
  '/theory/binary.en.html',
  '/theory/binary.ru.html',
  '/theory/braille.en.html',
  '/theory/braille.ru.html',
  '/theory/greek.en.html',
  '/theory/greek.ru.html',
  '/theory/hebrew.en.html',
  '/theory/hebrew.ru.html',
  '/theory/hex.en.html',
  '/theory/hex.ru.html',
  '/theory/octal.en.html',
  '/theory/octal.ru.html',
  '/theory/roman.en.html',
  '/theory/roman.ru.html',
  '/theory/slavonic.en.html',
  '/theory/slavonic.ru.html',
  '/theory/ternary.en.html',
  '/theory/ternary.ru.html',
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
