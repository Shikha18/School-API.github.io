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

var dev_db_url1 = 'mongodb://shikha18:mangal1997@ds259820.mlab.com:59820/school-api';
//var dev_db_url2 = 'mongodb://shikha18:mangal1997@ds259820.mlab.com:59820/school-api';
//var dev_db_url3 = 'mongodb://shikha18:mangal1997@ds259820.mlab.com:59820/school-api';
//var dev_db_url4 = 'mongodb://shikha18:mangal1997@ds259820.mlab.com:59820/school-api';


//var dev_db_url3 = 'mongodb://Shikha18:mangal1997@ds163650.mlab.com:63650/subject-api';

var mongoDB1 = process.env.MONGODB_URI  || dev_db_url1;
//var mongoDB2 = process.env.MONGODB_URI  || dev_db_url2;
//var mongoDB3 = process.env.MONGODB_URI  || dev_db_url3;
//var mongoDB4 = process.env.MONGODB_URI  || dev_db_url4;


mongoose.connect(mongoDB1);
//mongoose.connect(mongoDB2);
//mongoose.connect(mongoDB3);
//mongoose.connect(mongoDB4);


mongoose.Promise = global.Promise;
// mongoose.Promise2 = global.Promise;
// mongoose.Promise3 = global.Promise;


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