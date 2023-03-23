self.addEventListener('install', function(event) {
  // Perform install steps
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request)
  );
});
