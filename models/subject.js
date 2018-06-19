var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var SubjectSchema = new Schema({
	sub_name: {type: String, required: true, max: 100},
	chapters: {type: Number, required: true, max: 100}
});




module.exports = mongoose.model('Subject', SubjectSchema);
