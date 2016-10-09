var http = require('http');

function start1()
{
	function onRequest(req,res)
	{
		console.log("Request Received");
		res.writeHead(200, {"Content-Type" : "text/plain"});
                res.write("Hello World");
                res.end();


	}

http.createServer(onRequest).listen(process.env.PORT || 3000);
console.log("Server has started");

}

exports.start = start1;
