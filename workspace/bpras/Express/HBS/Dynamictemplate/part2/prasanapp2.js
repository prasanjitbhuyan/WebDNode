var express = require('express');
var app = express();
var hbs = require('hbs');
 
app.set('view engine', 'html');
app.engine('html', hbs.__express);
 
app.get('/', function(request, response) {
    
   var welcome = 'Our Express App with Templates';
    
   var products = [
       {"id":1, "name":"Apple", "price": 4.99 },
       {"id":2, "name":"Pear", "price": 3.99 },
       {"id":3, "name":"Orange", "price": 5.99 }
   ];
    
   response.render('index', {title: welcome, products: products});
});
 
app.get('/about', function(request, response) {
   response.render('about');
});
 
app.listen(process.env.PORT || 3000);

