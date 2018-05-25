var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	abk:String,
	alterSchuetze: String,
	nameSchuetze: String,
	nummerSchuetze: String,
	teilerSchuetze: String,
	ringeSchuetze: String,
	teilnehmerID: String
});


module.exports = mongoose.model('Result', UserSchema);