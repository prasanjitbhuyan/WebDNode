
function start(res)
{
	console.log("Request Handler for Start is called:::Apply Business Logic here for view or Return")
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.write("Hello Upload");
	res.end();

}

function upload(res)
{

	console.log("Request Handler for Upload is called");



}
exports.start = start;
exports.upload = upload;
