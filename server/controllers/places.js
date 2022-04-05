import Place from '../models/places.js';

export const savePost = async (req, res) => {
	const place = req.body;

	const savedPost = new Place(place);
	try {
		await savedPost.save();

		res.status(201).json(savedPost);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
