// routes/user.route.js
import express from 'express';
// import { get } from 'mongoose';
import { createSkill, deleteSkill, getSkill, getSkills } from '../controllers/skill.controller.js';
import {verifyToken} from '../middleware/jwt.js';

const router = express.Router();

router.post("/", verifyToken, createSkill);
router.delete("/:id", verifyToken, deleteSkill);
router.get("/single/:id", getSkill);
router.get("/", getSkills);


export default router;
