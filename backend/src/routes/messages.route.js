import express from "express";
import {
  chatParterns,
  getAllContacts,
  getMessagesByUserId,
  sendMessage,
} from "../controllers/message.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";

const router = express.Router();
router.use(protectRoute);

router.get("/contacts", getAllContacts);
router.get("/chat", chatParterns);
router.get("/:id", getMessagesByUserId);
router.post("/send/:id", sendMessage);

export default router;
