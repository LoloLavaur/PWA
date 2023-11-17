// Fichier du Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/profil.html',
                '/sauveur.html',
                '/style.css',
                '/manifest.json',
                'https://via.placeholder.com/150', // Remplace avec les liens réels de tes images
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
