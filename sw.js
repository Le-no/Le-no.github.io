this.addEventListener('fetch', event =>  {
	event.respondWith(new Response(
		new Blob(
            ["<h2>I'm in your browser, ",
       	     "stealing your files</h2>\n",
	    event.request.headers('User-Agent')],
            {type : 'text/html'})));
});
