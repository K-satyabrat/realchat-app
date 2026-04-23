import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
  res.send("signup");
});

router.post("/login", (req, res) => {
  res.send("login");
});

router.post("/logout", (req, res) => {
  res.send("logout");
});

export default router;
