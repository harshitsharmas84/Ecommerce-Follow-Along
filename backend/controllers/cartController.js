const User = require("../models/userModel");
const Product = require("../models/productModel");

// Add product to cart
const addToCart = async (req, res) => {
    try {
        const { productId, quantity = 1 } = req.body;
        const userEmail = req.user.email;

        // Find the product
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        // Find the user and update their cart
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if product already exists in cart
        const existingCartItem = user.cart.find(
            (item) => item.productId.toString() === productId
        );

        if (existingCartItem) {
            // Update quantity if product already in cart
            existingCartItem.quantity += quantity;
        } else {
            // Add new product to cart
            user.cart.push({ productId, quantity });
        }

        await user.save();

        res.status(200).json({
            message: "Product added to cart successfully",
            cart: user.cart
        });
    } catch (error) {
        console.error("Error adding product to cart:", error);
        res.status(500).json({ message: "Failed to add product to cart", error: error.message });
    }
};

// Get cart items
const getCartItems = async (req, res) => {
    try {
        const userEmail = req.user.email;

        // Find the user
        const user = await User.findOne({ email: userEmail }).populate({
            path: 'cart.productId',
            select: 'name price description imageUrl'
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ cart: user.cart });
    } catch (error) {
        console.error("Error fetching cart items:", error);
        res.status(500).json({ message: "Failed to fetch cart items", error: error.message });
    }
};

// Update cart item quantity
const updateCartItem = async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        const userEmail = req.user.email;

        if (quantity < 1) {
            return res.status(400).json({ message: "Quantity must be at least 1" });
        }

        // Find the user
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Find the cart item
        const cartItem = user.cart.find(item => item.productId.toString() === productId);
        if (!cartItem) {
            return res.status(404).json({ message: "Product not found in cart" });
        }

        // Update quantity
        cartItem.quantity = quantity;
        await user.save();

        res.status(200).json({
            message: "Cart updated successfully",
            cart: user.cart
        });
    } catch (error) {
        console.error("Error updating cart:", error);
        res.status(500).json({ message: "Failed to update cart", error: error.message });
    }
};

// Remove item from cart
const removeFromCart = async (req, res) => {
    try {
        const { productId } = req.params;
        const userEmail = req.user.email;

        // Find the user
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Remove item from cart
        user.cart = user.cart.filter(item => item.productId.toString() !== productId);
        await user.save();

        res.status(200).json({
            message: "Product removed from cart successfully",
            cart: user.cart
        });
    } catch (error) {
        console.error("Error removing product from cart:", error);
        res.status(500).json({ message: "Failed to remove product from cart", error: error.message });
    }
};

module.exports = {
    addToCart,
    getCartItems,
    updateCartItem,
    removeFromCart
};