self.addEventListener('activate', function (event) {
    console.log('SW activate event');

    const cacheName = "ml-ttt";

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return caches.delete(cacheName);
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log('Handling fetch event for', event.request.url);
    const cacheName = "ml-ttt";

    if(event.request.url.indexOf("next-move") != -1){
        event.respondWith(
            caches.open(cacheName).then((cache) => {
                return cache.match(event.request).then((cachedResponse) => {
                    if(cachedResponse){
                        return cachedResponse;
                    }else{
                        var fetchRequest = event.request.clone();
                        return fetch(fetchRequest).then((fetchResponse) => {
                            cache.put(event.request, fetchResponse.clone());
                            return fetchResponse;
                        }).catch((err) => {
                            console.log("error while fetching from server", err);
                        });;
                    }
                }).catch((err) => {
                    console.log("error while fetching from cache", err);
                })
            })
        );
    }else{
        event.respondWith(
            fetch(event.request)
        );
    }
});