self.addEventListener('install', function(event) {
    console.log('install sukses', event);
    event.waitUntil(
        caches.open('appku')
        .then(function(cache) {
            console.log('mulai caching');
            return cache.addAll([
                './index.html',
                './buttons.html'

            ]);
        })
        .then(function() {
            self.skipWaiting();
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('aktivasi sukses', event);
    self.skipWaiting();
})
