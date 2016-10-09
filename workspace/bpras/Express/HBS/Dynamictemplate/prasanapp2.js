var express = require('express');
var app = express();
var hbs = require('hbs');
 
app.set('view engine', 'html');
app.engine('html', hbs.__express);
 
app.get('/', function(request, response) {
 var welcome = 'our Express Prasan APP with Dynamic Templates';
response.render('index',{title:welcome});
});
 
app.get('/about', function(request, response) {
   response.render('about');
});
 
app.listen(process.env.PORT || 3000);

