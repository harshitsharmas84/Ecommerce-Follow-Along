const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  const { name, price } = req.body;
  console.log(req.files);
  const images = req.files.map((file) => file.path);

  if (!name || !price || images.length === 0) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const product = new Product({
      name,
      price,
      images,
    });

    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { createProduct };
