self.addEventListener('install', function(event) {
    console.log('install sukses', event);
    event.waitUntil(
        caches.open('appku')
        .then(function(cache) {
            console.log('mulai caching');
            return cache.addAll([
                '/',
                '/css/sb-admin-2.min.css',
                '/js/sb-admin-2.min.js',
                '/vendor/jquery/jquery.min.js',
                '/vendor/bootstrap/js/bootstrap.bundle.min.js',
                '/vendor/chart.js/Chart.min.js',
                '/js/demo/chart-area-demo.js',
                '/js/demo/chart-pie-demo.js'
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
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        fetch(e.request).catch(function() {
            return caches.open('appku').then(function(cache) {
                return cache.match(e.request);
            })
        })
        
    );
});
