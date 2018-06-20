var express = require('express');
var bodyParser = require('body-parser');

var classl = require('./routes/class')
var teacher = require('./routes/teacher');
var student = require('./routes/student');
var subject = require('./routes/subject');
var course = require('./routes/course');

//initialize our express app
var app = express();

//setup for mongoose
var mongoose = require('mongoose');

var dev_db_url = 'mongodb://shikha18:mangal1997@ds259820.mlab.com:59820/school-api';
var mongoDB = process.env.MONGODB_URI  || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/teachers', teacher);
app.use('/students', student);
app.use('/subjects', subject);
app.use('/classes', classl);
app.use('/courses', course);

var port = 1234;

app.listen(port, () => {
	console.log('Server is up and running on Port number:' + port);

});