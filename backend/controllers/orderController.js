// backend/controllers/orderController.js
const Order = require("../models/orderModel");
const User = require("../models/userModel");

exports.placeOrder = async (req, res) => {
    try {
        const { products, userEmail, addressId, totalAmount } = req.body;

        // Find user by email to get the user ID and details
        const user = await User.findOne({ email: userEmail });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Get the selected address from user's addresses array
        const selectedAddress = user.addresses.find(addr => addr._id === addressId);

        if (!selectedAddress) {
            return res.status(404).json({ message: "Address not found" });
        }

        // Create a new order for each product
        const orderPromises = products.map(async (product) => {
            const newOrder = new Order({
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email
                },
                product: product._id,
                quantity: product.quantity,
                price: product.price,
                totalPrice: product.price * product.quantity,
                deliveryAddress: selectedAddress, // Changed from address to deliveryAddress
                status: "Pending",
                orderDate: new Date()
            });

            return await newOrder.save();
        });

        const savedOrders = await Promise.all(orderPromises);

        res.status(201).json({
            success: true,
            message: "Orders placed successfully",
            orders: savedOrders
        });

    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ message: "Error placing order", error: error.message });
    }
};

exports.getUserOrders = async (req, res) => {
    try {
        const { email } = req.params;

        // Find all orders for the user with the given email
        const orders = await Order.find({ "user.email": email });

        if (!orders || orders.length === 0) {
            return res.status(404).json({ message: "No orders found for this user" });
        }

        res.status(200).json({
            success: true,
            orders
        });
    } catch (error) {
        console.error("Error fetching user orders:", error);
        res.status(500).json({ message: "Error fetching orders", error: error.message });
    }
};


exports.cancelOrder = async (req, res) => {
    try {
        const orderId = req.params.id;

        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // Update order status to 'Cancelled'
        order.status = 'Cancelled';
        await order.save();

        res.status(200).json({ message: 'Order cancelled successfully', order });
    } catch (error) {
        console.error('Error cancelling order:', error);
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};