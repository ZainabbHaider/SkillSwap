// routes/user.route.js
import express from 'express';
import {deleteUser} from "../controllers/user.controller.js";
import {verifyToken} from "../middleware/jwt.js"
import {getUser} from "../controllers/user.controller.js"
const router = express.Router();

router.delete("/:id",verifyToken, deleteUser)
router.get("/:id", getUser)


export default router;
