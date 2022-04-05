import express from 'express';
import { savePost } from '../controllers/places.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, savePost);

export default router;
