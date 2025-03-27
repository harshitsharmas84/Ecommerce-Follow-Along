// backend/routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { authMiddleware } = require("../middlewares/authMiddleware");

// Add this new route
router.post("/place-order",  orderController.placeOrder);
router.get("/user-orders/:email", orderController.getUserOrders);

module.exports = router;