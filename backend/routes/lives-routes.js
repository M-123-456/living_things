import express from 'express';

import { getAllLives, getLivesById, getLivesByUserId, addNewLives } from '../controllers/lives-controller.js';

const router = express.Router();

router.get('/', getAllLives);
router.get('/:lid', getLivesById);
router.get('/user/:uid', getLivesByUserId);
router.post('/new', addNewLives)

export { router };
