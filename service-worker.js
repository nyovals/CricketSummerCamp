// INSTALL EVENT
self.addEventListener("install", event => {
  self.skipWaiting(); // 🔥 Force new SW to activate immediately
  event.waitUntil(
    caches.open("nyovals-cache-v3").then(cache => {
      return cache.addAll([
        "./",
        "index.html",
        "images/LOGO.png",
        "images/image1.jpg",
        "images/image2.jpg",
        "images/image3.jpg",
        "images/image4.jpg"
      ]);
    })
  );
});

// ACTIVATE EVENT
self.addEventListener("activate", event => {
  clients.claim(); // 🔥 Take control of all pages immediately
});

// FETCH EVENT
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
