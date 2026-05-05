import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Admin Route Working ✅");
});

export default router;