// INSTALL EVENT
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("nyovals-cache").then(cache => {
      return cache.addAll([
        "./",
        "index.html",
        "images/NYOvalsLogo.png",
        "images/image1.jpg",
        "images/image2.jpg",
        "images/image3.jpg",
        "images/image4.jpg"
      ]);
    })
  );
});

// FETCH EVENT
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
