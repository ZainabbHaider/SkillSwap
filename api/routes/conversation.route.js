// routes/user.route.js
import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { getConversations, createConversation, getSingleConversation, updateConversation } from '../controllers/conversation.controller.js';

const router = express.Router();

router.get("/", verifyToken, getConversations);
router.post("/", verifyToken, createConversation);
router.get("/single/:id", verifyToken, getSingleConversation);
router.get("/:id", verifyToken, updateConversation);


export default router;
