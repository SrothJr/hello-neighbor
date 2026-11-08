import express from "express";
import { checkAuth } from "../controllers/auth.controller.js";
import { protectRoutes } from '../middleware/auth.middleware.js';

const router = express.Router();

router.get("/check", protectRoutes, checkAuth);

export default router;