// routes/user.route.js
import express from 'express';
import { createReview, getReviews, deleteReview } from '../controllers/review.controller.js';
import {verifyToken} from '../middleware/jwt.js';

const router = express.Router();

router.post("/", verifyToken, createReview);
router.delete("/:id", deleteReview);
router.get("/:skillId", getReviews);

export default router;
