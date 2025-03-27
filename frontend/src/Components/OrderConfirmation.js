import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import Navigation from './Navigation';




const OrderConfirmation = () => {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedAddress, setSelectedAddress] = useState('');
    const navigate = useNavigate();

    const userEmail = localStorage.getItem('userEmail'); // Retrieve userEmail from localStorage or another source

    useEffect(() => {
        // Fetch cart items and total price from localStorage
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const storedTotalPrice = parseFloat(localStorage.getItem('totalPrice')) || 0;
        const storedAddress = localStorage.getItem('deliveryAddress') || '';

        setCartItems(storedCartItems);
        setTotalPrice(storedTotalPrice);
        setSelectedAddress(storedAddress);
    }, []);

    // const handlePlaceOrder = () => {
    //     // Implement order placement logic here
    //     alert('Order placed successfully!');
    //     // Clear cart and navigate to home or order summary page
    //     localStorage.removeItem('cartItems');
    //     localStorage.removeItem('totalPrice');
    //     localStorage.removeItem('deliveryAddress');
    //     navigate('/');
    // };
    const handlePlaceOrder = async () => {
        try {
            const token = localStorage.getItem('token');
            // Call the API to create an order
            await axios.post('http://localhost:6400/api/orders/place-order', {
                userEmail,
                products: cartItems.map(item => ({
                    productId: item._id,
                    quantity: item.quantity,
                    price: item.price
                })),
                address: selectedAddress,
                totalAmount: totalPrice
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            // Show success message
            alert('Order placed successfully!');

            // Clear cart data from localStorage
            localStorage.removeItem('cartItems');
            localStorage.removeItem('totalPrice');
            localStorage.removeItem('deliveryAddress');

            // Navigate to home or order history page
            navigate('/');
        } catch (error) {
            alert('Failed to place order. Please try again.');
            console.error('Error placing order:', error);
        }
    };

    return (
        <div>
            <Navigation />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
                <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                    <h2 className="text-xl font-semibold mb-4">Products</h2>
                    {cartItems.map((item) => (
                        <div key={item._id} className="flex items-center justify-between border-b py-4">
                            <div className="flex items-center">
                                <img
                                    src={item.image ? `http://localhost:3001/${item.image.replace(/\\/g, '/')}` : "https://via.placeholder.com/100x100?text=No+Image"}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded mr-4"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <p className="text-gray-600">${item.price}</p>
                                </div>
                            </div>
                            <div>
                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                    <h2 className="text-xl font-semibold mt-6 mb-4">Delivery Address</h2>
                    <p className="text-gray-600">{selectedAddress}</p>
                    <h2 className="text-xl font-semibold mt-6 mb-4">Total Price</h2>
                    <p className="text-gray-600">${totalPrice.toFixed(2)}</p>
                    <button
                        onClick={handlePlaceOrder}
                        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;