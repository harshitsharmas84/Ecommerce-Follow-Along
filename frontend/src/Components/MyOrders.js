// frontend/src/Components/MyOrders.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navigation from './Navigation';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const userEmail = localStorage.getItem('userEmail');
            if (!userEmail) {
                throw new Error('User not logged in');
            }

            const response = await axios.get(`http://localhost:6400/api/orders/user-orders/${userEmail}`);
            setOrders(response.data.orders || []);
            setLoading(false);
        } catch (error) {
            setError(error.message || 'Failed to fetch orders');
            setLoading(false);
        }
    };

    const handleCancelOrder = async (orderId) => {
        try {
            await axios.put(`http://localhost:6400/api/orders/cancel-order/${orderId}`);
            fetchOrders();
        } catch (error) {
            setError('Failed to cancel order');
            console.error('Error cancelling order:', error);
        }
    };

    if (loading) return <div className="text-center mt-8">Loading orders...</div>;
    if (error) return <div className="text-center mt-8 text-red-500">Error: {error}</div>;

    return (
        <div>
            <Navigation />
            <div className="max-w-6xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-6">My Orders</h1>

                {!orders || orders.length === 0 ? (
                    <div className="text-center py-8">
                        <p>You haven't placed any orders yet.</p>
                        <Link to="/" className="text-blue-600 hover:underline mt-2 inline-block">
                            Continue Shopping
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order) => (
                            <div key={order._id} className="border rounded-lg p-4 shadow-sm">
                                <div className="flex justify-between items-center mb-4">
                                    <div>
                                        <span className="text-gray-600">Order ID: </span>
                                        <span className="font-medium">{order._id}</span>
                                    </div>
                                    <div>
                                        <span className={`px-3 py-1 rounded-full text-sm ${
                                            order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                                order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' :
                                                    order.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                                                        order.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                                                            'bg-gray-100 text-gray-800'
                                        }`}>
                                            {order.status}
                                        </span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <p className="text-sm text-gray-600">Order Date:</p>
                                        <p>{new Date(order.orderDate || order.createdAt).toLocaleDateString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Total Amount:</p>
                                        <p className="font-semibold">₹{order.totalPrice.toFixed(2)}</p>
                                    </div>
                                </div>

                                <div className="border-t pt-4 mt-2">
                                    <p className="text-sm text-gray-600 mb-2">Items:</p>
                                    <div className="space-y-2">
                                        {order.product && (
                                            <div className="flex items-center gap-2">
                                                <img
                                                    src={`http://localhost:6400/${order.product.image}`}
                                                    alt={order.product.name}
                                                    className="w-12 h-12 object-cover rounded"
                                                />
                                                <div>
                                                    <p className="font-medium">{order.product.name}</p>
                                                    <p className="text-sm text-gray-600">
                                                        {order.quantity} × ₹{order.price}
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-4 flex justify-between items-center">
                                    <Link
                                        to={`/order/${order._id}`}
                                        className="text-blue-600 hover:underline text-sm"
                                    >
                                        View Order Details →
                                    </Link>

                                    {order.status !== 'Cancelled' && order.status !== 'Delivered' && (
                                        <button
                                            onClick={() => handleCancelOrder(order._id)}
                                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                                        >
                                            Cancel Order
                                        </button>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyOrders;