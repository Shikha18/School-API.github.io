var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var CourseSchema = new Schema({
	course_name: {type: String,  required: true, max: 20},
	syllabus: {type: String, required: true, max: 20},
	time_period: {type: String, required: true}
});


module.exports = mongoose.model('Course', CourseSchema);
