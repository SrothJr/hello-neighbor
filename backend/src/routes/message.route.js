import express from "express";
import { protectRoutes } from "../middleware/auth.middleware.js";
import { getUsersForSidebar, getConversationsForSidebar, getMessages, sendMessage } from "../controllers/message.controller.js";
import { upload } from "../middleware/upload.middleware.js";


const router = express.Router();

router.get("/users",protectRoutes, getUsersForSidebar);
router.get("/conversations", protectRoutes, getConversationsForSidebar);
router.get("/:id", protectRoutes, getMessages);
router.post("/send/:id", protectRoutes, upload.single("media"), sendMessage);

export default router;