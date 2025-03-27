// Create new file: models/orderModel.js
const mongoose = require('mongoose');
const Product = require('./productModel');

const orderSchema = new mongoose.Schema(
    {
        user: {
            email: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        products: [
            {
                productId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                    required: true
                },
                name: {
                    type: String,
                    required: true
                },
                quantity: {
                    type: Number,
                    required: true,
                    min: 1
                },
                price: {
                    type: Number,
                    required: true
                },
                image: {
                    type: String,
                    required: true
                }
            }
        ],
        deliveryAddress: {
            type: String,
            required: true
        },
        totalPrice: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
            default: 'Pending'
        },
        paymentMethod: {
            type: String,
            default: 'Cash on Delivery'
        },
        paymentStatus: {
            type: String,
            enum: ['Pending', 'Completed', 'Failed'],
            default: 'Pending'
        }
    },
    {
        timestamps: true
    }
);

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;