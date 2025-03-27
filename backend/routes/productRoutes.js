const express = require("express");
const {
  createProduct,
  getProducts,
  getProductsByEmail,
  updateProduct,
  getProductById,
  deleteProduct,
} = require("../controllers/productController");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Set up Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/", upload.array("imageUrl", 10), createProduct);
router.get("/", getProducts);
router.get("/user/:email", getProductsByEmail);
router.get("/:id", getProductById); // New route to get product by ID
router.put("/:id", upload.array("imageUrl", 10), updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
