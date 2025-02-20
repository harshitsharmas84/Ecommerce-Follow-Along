const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const port = 6400;

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static("uploads")); // Serve static files

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

app.use(errorHandler);

mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
