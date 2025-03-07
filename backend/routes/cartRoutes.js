const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
// const authMiddleware = require('../middlewares/authMiddleware');

const { getCartItems } = require('../controllers/cartController');

// All cart routes should be protected
// router.use(authMiddleware);

router.get("/", getCartItems);
// Add product to cart
router.post('/add', cartController.addToCart);

// Get cart items
router.get('/', cartController.getCartItems);

// Update cart item quantity
router.put('/update', cartController.updateCartItem);

// Remove product from cart
router.delete('/remove/:productId', cartController.removeFromCart);

module.exports = router;