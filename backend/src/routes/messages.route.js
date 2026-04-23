import express from "express";

const router = express.Router();

router.get("/getmessages", (req, res) => {
  res.send("messages");
});

router.post("/sendmessage", (req, res) => {
  res.send("sendmessage");
});

export default router;
