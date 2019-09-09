const cacheVersion = 'v1-pwa-dasar';

const filesToCache = [
    '/',
    '/css/sb-admin-2.min.css',
    '/js/sb-admin-2.min.js',
    '/vendor/jquery/jquery.min.js',
    '/vendor/bootstrap/js/bootstrap.bundle.min.js"',
    '/vendor/chart.js/Chart.min.js',
    '/js/demo/chart-area-demo.js',
    '/js/demo/chart-pie-demo.js',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheVersion)
      .then(function(cache) {
        return cache.addAll(filesToCache)
      })
  )
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