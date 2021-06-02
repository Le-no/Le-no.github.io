this.addEventListener('fetch', function(event) {
  event.respondWith(
	  return new Response('Hallo vom freundlichen Service-Worker!');
  );
});
