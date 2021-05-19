self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request).then(function(response) {
	  "blabla"
})

