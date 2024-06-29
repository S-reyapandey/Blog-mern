import express from 'express';
import { signup, signin, forget, reset, google } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/forget', forget);
router.post('/reset', reset);
router.post('/google', google);

export default router;