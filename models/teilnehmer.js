var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	name: String,
	birthdate: Date,
	disciplines:[String]
});


module.exports = mongoose.model('Teilnehmer', UserSchema);