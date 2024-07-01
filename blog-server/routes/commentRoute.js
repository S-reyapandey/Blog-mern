import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import { createComment, deleteComment, editComment, getcomments, getpostcomments, likeComment } from '../controllers/commentController.js';

const router = express.Router();

router.post('/create', verifyToken, createComment);
router.get('/getpostcomments/:postId', getpostcomments);
router.put('/likeComment/:commentId', verifyToken, likeComment);
router.put('/editComment/:commentId', verifyToken, editComment);
router.delete('/deleteComment/:commentId', verifyToken, deleteComment);
router.get('/getcomments', verifyToken, getcomments);

export default router;