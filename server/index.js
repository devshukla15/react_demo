import express from 'express';
import mongoose from 'mongoose';

const app = express();

const URL =
	'mongodb+srv://devShukla:DearBeen85@cluster0.s8rfo.mongodb.net/traveller?retryWrites=true&w=majority';

app.use(express.json());

const PORT = 5000;

mongoose
	.connect(URL)
	.then(
		() => console.log('database connected'),
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	.catch((error) => console.log({ error }));
