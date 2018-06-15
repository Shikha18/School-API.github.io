var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var StudentSchema = new Schema({
	Student_name: {type: String, required: true, max: 100},
	Gender: {type: String, required: true, max: 1},
	Email: {type: String, required: true, max: 100},
	Contact: {type: Number, required: true},
	//DOB: {type: Date, required: true},
    Address: {type: String, required: true, max: 100}
});


module.exports = mongoose.model('Student', StudentSchema);
