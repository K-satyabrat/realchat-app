import express from "express";
import authController from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/auth.middleware.js";
import arcjetProtectApi from "../middlewares/arcjet.middleware.js";

const router = express.Router();

router.post("/signup", authController.signUp);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.put("/updateProfile", protectRoute, authController.updateProfile);
router.get("/check", protectRoute, (req, res) => {
  return res.status(200).json(req.user);
});

export default router;
