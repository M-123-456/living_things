import express from 'express';

import { getAllUsers, getUserById, signup, login } from '../controllers/users-controller.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:uid', getUserById);
router.post('/signup', signup);
router.post('/login', login);

export { router };
