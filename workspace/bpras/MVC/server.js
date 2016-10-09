var http = require('http');

var server = http.createServer(function(req, res) {  
  require('./router').get(req, res);
}); // end server() 
server.listen(process.env.PORT || 3000);  
console.log('listening to http://'); 
console.log('Server sending request to router'); 
