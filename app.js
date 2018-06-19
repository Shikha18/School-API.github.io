var express = require('express');
var bodyParser = require('body-parser');

var teacher = require('./routes/teacher');

//initialize our express app
var app = express();


//setup for mongoose
var mongoose = require('mongoose');

var dev_db_url = 'mongodb://Shikha18:mangal1997@ds163510.mlab.com:63510/teacher-api';
var mongoDB = process.env.MONGODB_URI  || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/teachers', teacher);

var port = 1234;

app.listen(port, () => {
	console.log('Server is up and running on Port number:' + port);

});