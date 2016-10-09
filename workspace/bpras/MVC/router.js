var url = require('url');

var fs  = require('fs');

exports.get=function(req,res)
{
	var pathname = url.parse(req.url).pathname;
	if (/.(css)$/.test(pathname)) {
  	res.writeHead(200, { 'Content-Type': 'text/css'  });
    	fs.readFile(__dirname + pathname, 'utf8', function(err, data) {
      	if (err) throw err;
      	res.write(data, 'utf8');
      	res.end();
    });
  } else {
    if (pathname === '/' || pathname === '/home') {
      require('./controllers/home').get(req, res);
    } else {
      require('./controllers/404').get(req, res);
    }
  }


console.log('Map URL Path to the Controller for business logic implementation');
};
