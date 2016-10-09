var http = require('http');
var url  = require('url');

function start1(route,handle)
{
	function OnRequest(req,res)
	{

		console.log("Request received");
		var pathname = url.parse(req.url).pathname;
		console.log("Request received fr PathName",pathname);
		route(pathname,handle,res);



	}
        http.createServer(OnRequest).listen(process.env.PORT || 3000);
	console.log("Server has started");



}
exports.startp = start1;
