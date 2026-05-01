
const CACHE_NAME = 'dabar-logos-v7';
const STATIC_ASSETS = [
  './index.html',
  './manifest.json',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // Tenta cachear os assets mas não trava se falhar
      return Promise.allSettled(STATIC_ASSETS.map(asset => cache.add(asset)));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Filtro de Segurança 1: Apenas HTTP/HTTPS
  if (!event.request.url.startsWith('http')) return;

  try {
    const url = new URL(event.request.url);
    
    // Filtro de Segurança 2: Evita cachear APIs dinâmicas
    if (url.hostname.includes('googleapis.com') || 
        url.hostname.includes('hotmart.com')) return;

    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;

        return fetch(event.request).then((networkResponse) => {
          // Apenas cacheia recursos estáticos de sucesso
          if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return networkResponse;
        }).catch(() => {
          // Se falhar rede e não tiver cache, não faz nada
          return null;
        });
      })
    );
  } catch (e) {
    // Falha silenciosa em URLs malformadas ou protocolos não suportados
  }
});
