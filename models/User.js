const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	user: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
		unqiue: true,
	},
	password: {
		type: String,
		require: true,
	},
	date: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = mongoose.model('user', UserSchema);
