var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	name: String,
	jahr: String,
	ergebnisse: [{
		type:mongoose.Schema.Types.ObjectId,
		ref: 'Result'
	}]
});

module.exports = mongoose.model('Meisterschaft', UserSchema);