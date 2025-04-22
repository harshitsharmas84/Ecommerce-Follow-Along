import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const userEmail = useSelector((state) => state.user.email);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (!userEmail || !token) {
          const localCartItems = JSON.parse(localStorage.getItem("cart")) || [];
          setCartItems(localCartItems);
          calculateTotal(localCartItems);
          setLoading(false);
          return;
        }

        const response = await axios.get(
          `http://localhost:6400/api/cart/${userEmail}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCartItems(response.data);
        calculateTotal(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch cart items. Please try again.");
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [userEmail, token]);

  const calculateTotal = (items) => {
    const total = items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalPrice(total);
  };

  const increaseQuantity = async (productId) => {
    try {
      await axios.put(
        `http://localhost:6400/api/cart/increase/${userEmail}/${productId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedCart = cartItems.map((item) => {
        if (item._id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCart);
      calculateTotal(updatedCart);
    } catch (err) {
      setError("Failed to increase quantity. Please try again.");
    }
  };

  const decreaseQuantity = async (productId) => {
    try {
      const item = cartItems.find((item) => item._id === productId);
      if (item.quantity <= 1) return;

      await axios.put(
        `http://localhost:6400/api/cart/decrease/${userEmail}/${productId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedCart = cartItems.map((item) => {
        if (item._id === productId && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      setCartItems(updatedCart);
      calculateTotal(updatedCart);
    } catch (error) {
      setError("Failed to decrease quantity. Please try again.");
    }
  };

  const removeItem = async (productId) => {
    try {
      await axios.delete(
        `http://localhost:6400/api/cart/remove/${userEmail}/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const updatedCart = cartItems.filter((item) => item._id !== productId);
      setCartItems(updatedCart);
      calculateTotal(updatedCart);
    } catch (err) {
      setError("Failed to remove item. Please try again.");
    }
  };

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) {
      setError("Your cart is empty. Please add items to place an order.");
      return;
    }

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    localStorage.setItem("totalPrice", totalPrice.toString());
    navigate("/select-address");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
          <div className="text-xl font-medium">Loading cart items...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <p className="text-lg text-gray-500 mb-4">Your cart is empty</p>
            <button
              onClick={() => navigate("/")}
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-6 mb-4">
            <div className="divide-y">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col md:flex-row md:items-center md:justify-between py-4 gap-4"
                >
                  <div className="flex items-center">
                    <img
                      src={
                        item.image
                          ? `http://localhost:6400/${item.image}`
                          : "https://via.placeholder.com/100x100?text=No+Image"
                      }
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-600">${item.price}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end w-full md:w-auto">
                    <div className="flex items-center border rounded">
                      <button
                        onClick={() => decreaseQuantity(item._id)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                        disabled={item.quantity <= 1}
                      >
                        -
                      </button>
                      <span className="px-4 py-1">{item.quantity}</span>
                      <button
                        onClick={() => increaseQuantity(item._id)}
                        className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
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
            </div>

            <div className="mt-8 border-t pt-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Subtotal:</span>
                <span className="text-xl font-bold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="mt-6 text-right">
                <button
                  onClick={handlePlaceOrder}
                  className="bg-green-600 text-white px-8 py-3 rounded-md hover:bg-green-700 transition-colors"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
