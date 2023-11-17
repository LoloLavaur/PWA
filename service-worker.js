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
                'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FOuiEtHop%2F&psig=AOvVaw0UYVUHqRugpsCC5Ek9n_oG&ust=1700330244437000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiey_PNy4IDFQAAAAAdAAAAABAE', // Remplace avec les liens réels de tes images
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
