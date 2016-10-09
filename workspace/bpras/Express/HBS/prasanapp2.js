var express = require('express');
var app = express();
var hbs = require('hbs');
 
app.set('view engine', 'html');
app.engine('html', hbs.__express);
 
app.get('/', function(request, response) {
   response.render('index');
});
 
app.get('/about', function(request, response) {
   response.render('about');
});
 
app.listen(process.env.PORT || 3000);

