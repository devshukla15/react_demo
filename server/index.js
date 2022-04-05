import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';
import placeRoutes from './routes/places.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bookTable from './helper/bookTable.js';

const app = express();

dotenv.config();

app.use(express.json());

app.use(cors());

app.use('/user', userRoutes);

// bookTable();

app.use('/place', placeRoutes);

const PORT = 5000;

mongoose
	.connect(process.env.NODE_APP_MONGODB_CONNECTION_URL)
	.then(
		() => console.log('database connected'),
		app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
	)
	.catch((error) => console.log({ error }));
