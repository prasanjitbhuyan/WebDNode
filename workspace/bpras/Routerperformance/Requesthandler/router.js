

function route(pathname,handle)
{


	console.log("About to route a request for ::-",pathname);
	if (typeof handle[pathname] == 'function')
		{
			handle[pathname]();

		}
	else
		{

			console.log("No Request Handler found for ::-",pathname);
		}


}
exports.route = route;