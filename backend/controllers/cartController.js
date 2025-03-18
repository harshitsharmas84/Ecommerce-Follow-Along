// backend/controllers/cartController.js
// noinspection DuplicatedCode

const User = require('../models/userModel');
const Product = require('../models/productModel');

// Get cart items for a user
exports.getCartItems = async (req, res) => {
    try {
        const { email } = req.params;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const cartItems = [];

        for (const item of user.cart) {
            const product = await Product.findById(item.productId);
            if (product) {
                cartItems.push({
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: item.quantity
                });
            }
        }

        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Increase quantity
exports.increaseQuantity = async (req, res) => {
    try {
        const { email, productId } = req.params;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const cartItemIndex = user.cart.findIndex(
            (item) => item.productId.toString() === productId
        );

        if (cartItemIndex === -1) {
            return res.status(404).json({ message: 'Product not found in cart' });
        }

        user.cart[cartItemIndex].quantity += 1;
        await user.save();

        res.status(200).json({ message: 'Quantity increased' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Decrease quantity
exports.decreaseQuantity = async (req, res) => {
    try {
        const { email, productId } = req.params;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const cartItemIndex = user.cart.findIndex(
            (item) => item.productId.toString() === productId
        );

        if (cartItemIndex === -1) {
            return res.status(404).json({ message: 'Product not found in cart' });
        }

        if (user.cart[cartItemIndex].quantity > 1) {
            user.cart[cartItemIndex].quantity -= 1;
        }

        await user.save();

        res.status(200).json({ message: 'Quantity decreased' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Remove item from cart
exports.removeFromCart = async (req, res) => {
    try {
        const { email, productId } = req.params;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.cart = user.cart.filter(
            (item) => item.productId.toString() !== productId
        );

        await user.save();

        res.status(200).json({ message: 'Product removed from cart' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};