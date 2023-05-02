import express from "express";
import { getUser } from "../controllers/general.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
