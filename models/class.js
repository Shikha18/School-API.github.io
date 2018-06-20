var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var ClassSchema = new Schema({
	class_name: {type: String, max: 10},
	sections: {type: String, required: true, max: 20}
});


module.exports = mongoose.model('Class', ClassSchema);
