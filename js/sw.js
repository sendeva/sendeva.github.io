// const filesToCache = [
//     '/',
//     '/css/sb-admin-2.min.css',
//     '/js/sb-admin-2.min.js',
//     '/vendor/jquery/jquery.min.js',
//     '/vendor/bootstrap/js/bootstrap.bundle.min.js"',
//     '/vendor/chart.js/Chart.min.js',
//     '/js/demo/chart-area-demo.js',
//     '/js/demo/chart-pie-demo.js'
// ];

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

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(res) {
            if (res) return res;
            return fetch(event.request);
        })
    );
    });
