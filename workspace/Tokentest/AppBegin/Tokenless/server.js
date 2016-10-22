
var express = require('express');
var app     = express();

var bodyparser = require('body-parser');
var morgan     = require('morgan');

var mongoose   = require('../node_modules/mongoose');


var jwt        = require('jsonwebtoken');
var config     = require('../config');

var User       = require('../app/models/user');


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


app.get('/setupcheck',function(req,res){

	var pras  = new User({
			name: 'prasanjit B',
			password: 'password',
			admin:true

	});
//save User
	pras.save(function(err){

		if(err) throw err;
                console.log('User saved successfully');
    		res.json({ success: true });

	
	});

});


//use Express Router here
var APIRouter = express.Router();
//Random Message

APIRouter.get('/', function(req, res) {
  res.json({ message: 'start API beginner!' });
});

//Route to show all users (GET http://localhost:8080/api/users)
//APIRouter.get('/users',function(req,res){
app.get('/users',function(req,res){

    User.find({}, function(err, users) {
    res.json(users);
  });

//Appy this route to the Application app using (use) to show the message with return on all users in json format
app.use('/api', APIRouter);
//it means main URL api will contin both url paths as root and users to show message or all uers info as requested 

});
//listen to start server
app.listen(port);
console.log('Magic happens at http://localhost:' + port);


