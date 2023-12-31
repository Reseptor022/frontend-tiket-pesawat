// File: public/service-worker.js

const CACHE_NAME = 'your-app-cache';
const urlsToCache = [
  '/',
  '../index.html']

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request to make a fetch
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if valid response received
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response to put in cache
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(error => {
          // Return the offline page if the fetch fails
          return caches.match('../index.html');
        });
      })
  );
});
