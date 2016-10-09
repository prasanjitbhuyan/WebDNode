var express = require('express');
var app = express();
 
app.get('/', function(request, response) {
   response.send("<h1>Our Express App</h1>");
});
 
app.get('/about', function(request, response) {
   response.send("<h1>About</h1>");
});
 
app.listen(process.env.PORT || 3000);

