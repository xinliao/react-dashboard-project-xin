import express from "express";
import OverallStat from "../models/OverallStat.js";

const router = express.Router();

router.get("/sales", async (req, res) => {
  try {
    const overallStat = await OverallStat.find();

    res.status(200).json(overallStat[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
