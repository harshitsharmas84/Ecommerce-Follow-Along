const express = require("express");
const { createProduct } = require("../controllers/productController");
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

router.post("/", upload.array("images", 10), createProduct);

module.exports = router;
