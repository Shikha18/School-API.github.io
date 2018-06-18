var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var StudentSchema = new Schema({
	student_name: {type: String, required: true, max: 100},
	gender: {type: String, required: true, max: 1},
	age: {type: Number, min:10, max: 18, required: true},
	class: {type: Number, min:10, max: 18, required: true},
	email: {type: String, required: true, max: 100},
	contact: {type: Number, required: true},
	date_of_birth: {type: Date, required: true},
    address: {type: String, required: true, max: 100},
    createdAt: {type:Date, default: Date.now,required:true}
});


module.exports = mongoose.model('Student', StudentSchema);
