this.addEventListener('fetch', event =>  {
	event.respondWith(new Response(
		return new Blob(
            ["<h2>I'm in your browser, ",
       	     "stealing your files</h2>\n",
	    JSON.stringify(event.request.headers)],
            {type : 'text/html'})));
});
