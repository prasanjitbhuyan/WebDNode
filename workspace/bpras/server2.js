var http = require('http');

function onRequest(req,res)
{
 console.log("Request has received");
 res.writeHead(200,{"Content-Type": "text/plain"});
 res.write("Hello World");
 res.end();




}
http.createServer(onRequest).listen(process.env.PORT || 3000);
console.log("Server has already started");
