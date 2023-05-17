import express from "express";
import { getUser } from "../controllers/general.js";
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
import OverallStat from "../models/OverallStat.js";

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

router.get("/dash", async (req, res) => {
  try {
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });
    const overallStat = await OverallStat.find({ year: 2021 });

    const {
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
    } = overallStat[0];

    const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
      return month === "November";
    });
    const todayStats = overallStat[0].dailyData.find(({ date }) => {
      return date === "2021-11-15";
    });

    res.status(200).json({
      totalCustomers,
      yearlyTotalSoldUnits,
      yearlySalesTotal,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
