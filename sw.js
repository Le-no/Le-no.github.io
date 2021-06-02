this.addEventListener('fetch', event =>  {
	event.respondWith(new Response(
		new Blob(
            ["<h2>I'm in your browser, " + event.request.headers.get('User-Agent'),
       	     "stealing your files</h2>\n"],
            {type : 'text/html'})));
});
