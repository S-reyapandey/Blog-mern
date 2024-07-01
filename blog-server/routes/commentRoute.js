import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createComment } from '../controllers/commentController.js';
import { getpostcomments } from '../controllers/postController.js';

const router = express.Router();

router.post('/create', verifyToken, createComment);
router.get('/getpostcomments/:postId', getpostcomments);

export default router;