import express from 'express';
import { signin, signup } from '../contollers/users.js';

const router = express.Router();

route.post('/signin', signin);
router.post('signup', signup);
