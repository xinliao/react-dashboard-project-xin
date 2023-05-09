import express from "express";
import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";

const router = express.Router();

router.get("/products", async (req, res) => {
  try {
    // get all the products
    const products = await Product.find();
    const productsWithStats = await Promise.all(
      // find all the products with stat, combine it with the product information
      // and the stat
      //displayed in the erd diagram
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );

    res.status(200).json(productsWithStats);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.get("/customers", async (req, res) => {
  try {
    const customers = await User.find({ role: "user" }).select("-password");
    res.status(200).json(customers);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;
