import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login); //prefix to '/auth/login'

export default router;
