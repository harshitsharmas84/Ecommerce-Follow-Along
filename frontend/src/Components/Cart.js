import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);

    const userEmail = localStorage.getItem("userEmail");



    useEffect(() => {
            const fetchCartItems = async () => {
                try {
                    const token = localStorage.getItem('token');
                    const response = await axios.get(`http://localhost:6400/api/cart/${userEmail}`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            }
                        });
                    setCartItems(response.data);
                    calculateTotal(response.data);
                    setLoading(false);
                } catch (err) {
                    setError("Failed to fetch cart items");
                    setLoading(false);


                }
            }
            fetchCartItems();
        }, [userEmail] //when userEmail changes, useEffect will run again
    );


    const calculateTotal = (items) => {
        const total = items.reduce((acc, item) => {
            return acc + (item.price * item.quantity);
        }, 0);
        setTotalPrice(total);
    }

    const token = localStorage.getItem('token');

    const increaseQuantity = async (productId) => {
        try {
            await axios.put(`http://localhost:6400/api/cart/increase/${userEmail}/${productId}`, {}, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            const updatedCart = cartItems.map((item) => {
                if (item._id === productId) {
                    return {...item, quantity: item.quantity + 1};

                }
                return item;
            });
            setCartItems(updatedCart);
            calculateTotal(updatedCart);
        } catch (err) {
            setError("Failed to increase Quantity")
        }
    }

    const decreaseQuantity = async (productId) => {
        try {
            const item = cartItems.find((item) => item._id === productId);
            if (item.quantity <= 1) return;

            await axios.put(`http://localhost:6400/api/cart/decrease/${userEmail}/${productId}`, {}, {
                headers:{
                    Authorization: `Bearer ${token}`,
                }
            });
            const updatedCart = cartItems.map(item => {
                if (item._id === productId && item.quantity > 1) {
                    return {...item, quantity: item.quantity - 1};
                }
                return item;
            });
            setCartItems(updatedCart);
            calculateTotal(updatedCart);
        } catch (error) {
            setError("Failed to decrease Quantity")
        }
    }


    const removeItem = async (productId) => {
        try {
            await axios.delete(`http://localhost:6400/api/cart/remove/${userEmail}/${productId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            const updatedCart = cartItems.filter((item) => item._id !== productId);
            setCartItems(updatedCart);
            calculateTotal(updatedCart);
        } catch (err) {
            setError("Failed to remove item");
        }
    };

    // const handlePlaceOrder = () => {
    //     navigate('/select-address');
    // }
    const handlePlaceOrder = () => {
        // Save cart items and total price to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('totalPrice', totalPrice.toString());
        navigate('/select-address');
    }
    // Check if loading or error is true
//
if(loading) return <div>Loading....</div>
if(error) return <div>{error}</div>


    return (
        <div>
            <Navigation/>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

                {cartItems.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty</p>
                ) : (
                    <div>
                        <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
                            {cartItems.map((item) => (
                                <div key={item._id} className="flex items-center justify-between border-b py-4">
                                    <div className="flex items-center">
                                        <img
                                            src={item.image
                                                ? `http://localhost:3001/${item.image.replace(/\\/g, '/')}`
                                                : "https://via.placeholder.com/100x100?text=No+Image"}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded mr-4"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold">{item.name}</h3>
                                            <p className="text-gray-600">${item.price}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center">
                                        <div className="flex items-center border rounded">
                                            <button
                                                onClick={() => decreaseQuantity(item._id)}
                                                className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                                                disabled={item.quantity <= 1}
                                            >
                                                -
                                            </button>
                                            <span className="px-3 py-1">{item.quantity}</span>
                                            <button
                                                onClick={() => increaseQuantity(item._id)}
                                                className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <button
                                            onClick={() => removeItem(item._id)}
                                            className="ml-4 text-red-500 hover:text-red-700"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <div className="mt-6 text-right">
                                <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
                                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="mt-6">
                <button
                    onClick={handlePlaceOrder}
                    className=" bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
                >
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default Cart;
