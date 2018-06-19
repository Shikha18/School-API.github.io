var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var TeacherSchema = new Schema({
	teacher_name: {type: String, required: true, max: 100},
	gender: {type: String, required: true, max: 1},
	course: {type: String, required: true, max: 20},
	email: {type: String, required: true, max: 100},
	contact: {type: Number, required: true},
    address: {type: String, required: true, max: 100},
    createdAt: {type:Date, default: Date.now,required:true}
});




module.exports = mongoose.model('Teacher', TeacherSchema);
