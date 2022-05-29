import express from "express";
import { login, register } from "../Controllers/authController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verfyToken.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;