var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var ClassSchema = new Schema({
	class_name: {type: String, max: 10},
	sections: {type: Array, required: true, max: 5}
});


module.exports = mongoose.model('Class', ClassSchema);
