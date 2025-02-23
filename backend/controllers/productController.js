const Product = require("../models/productModel");

const createProduct = async (req, res) => {
  const { name, description, price, userEmail } = req.body;
  const imageUrl = req.files.map((file) => file.path);

  if (!name || !description || !price || !userEmail || imageUrl.length === 0) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const product = new Product({
      name,
      description,
      price,
      imageUrl,
      userEmail,
    });

    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductsByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    const products = await Product.find({ userEmail: email });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createProduct, getProducts, getProductsByEmail };
