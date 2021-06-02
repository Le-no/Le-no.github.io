this.addEventListener('fetch', function(event) {
  event.respondWith(
	  new Response('Hallo vom freundlichen Service-Worker!');
  );
});
