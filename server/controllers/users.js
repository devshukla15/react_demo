import user from '../models/user.js';

export const getUsers = async (req, res) => {
	try {
		const users = await user.find();

		res.json(users);
	} catch (error) {
		res.send('error is :', error);
	}
};

export const createUser = async (req, res) => {
	const users = req.body;

	const newUser = new user({
		...users,
	});

	try {
		await newUser.save();

		res.json(newUser);
	} catch (error) {
		res.send('error is :', error);
	}
};

export const getUser = async (req, res) => {
	try {
		const users = await user.findById(req.params.id);

		res.json(users);
	} catch (error) {
		res.send('error is :', error);
	}
};

export const updateUser = async (req, res) => {
	const { id: _id } = req.params;
	const users = req.body;

	const updatedUser = await user.findByIdAndUpdate(
		_id,
		{ ...users, _id },
		{
			new: true,
		}
	);
	res.json(updatedUser);
};

export const deleteUser = async (req, res) => {
	const { id } = req.params;

	await user.findByIdAndRemove(id);

	res.json({ message: 'User deleted sucessfully' });
};
