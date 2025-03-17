const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middlewares/authMiddleware');

const { getCartItems } = require('../controllers/cartController');

// All cart routes should be protected
// router.use(authMiddleware);



router.get("/:email", cartController.getCartItems);
// Add product to cart
router.put('/increase/:email/:productId', cartController.increaseQuantity);

// Get cart items
router.put('/decrease/:email/:productId', cartController.decreaseQuantity);

// Update cart item quantity
router.put('/decrease/:email/:productId', cartController.decreaseQuantity);

// Remove product from cart
router.delete('/remove/:email/:productId', cartController.removeFromCart);

module.exports = router;