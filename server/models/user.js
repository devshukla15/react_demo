import Mongoose from 'mongoose';

const userSchema = Mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	id: { type: String },
});

var user = Mongoose.Mongoose('User', userSchema);

export default user;
