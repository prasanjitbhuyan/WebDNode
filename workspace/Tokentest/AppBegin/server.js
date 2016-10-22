
var express = require('express');
var app     = express();

var bodyparser = require('body-parser');
var morgan     = require('morgan');

var mongoose   = require('./node_modules/mongoose');


var jwt        = require('jsonwebtoken');
var config     = require('./config');

var User       = require('./app/models/user');


//Crate database connection with a port

var port = process.env.PORT || 3000;
mongoose.connect('mongodb://localhost:27017/');
//mongoose.connect(config.database);
app.set('superSecret',config.secret);

//Body-parser to get Info from POST or URL parameters

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

//do the basic routing for path as root
app.get('/',function(req,res){

	res.send('Hello! The API is at http://localhost:' + port + '/api');

});

//listen to start server
app.listen(port);
console.log('Magic happens at http://localhost:' + port);


