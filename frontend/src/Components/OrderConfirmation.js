import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation";

const OrderConfirmation = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const navigate = useNavigate();

  const userEmail = localStorage.getItem("userEmail");
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Check if user is logged in
    if (!token || !userEmail) {
      setError("You must be logged in to place an order");
      setLoading(false);
      return;
    }

    // Fetch cart items and total price from localStorage
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const storedTotalPrice =
      parseFloat(localStorage.getItem("totalPrice")) || 0;
    const storedAddress = localStorage.getItem("deliveryAddress") || "";

    // Validate data
    if (!storedCartItems.length) {
      setError("Your cart is empty");
      setLoading(false);
      return;
    }

    if (!storedAddress) {
      setError("No delivery address selected");
      navigate("/select-address");
      return;
    }

    setCartItems(storedCartItems);
    setTotalPrice(storedTotalPrice);
    setSelectedAddress(storedAddress);
    setLoading(false);
  }, [token, userEmail, navigate]);

  const handlePlaceOrder = async () => {
    if (isPlacingOrder) return; // Prevent double submission

    setIsPlacingOrder(true);
    setError("");

    try {
      // Call the API to create an order
      await axios.post(
        "http://localhost:6400/api/orders/place-order",
        {
          userEmail,
          products: cartItems.map((item) => ({
            productId: item._id,
            quantity: item.quantity,
            price: item.price,
          })),
          address: selectedAddress,
          totalAmount: totalPrice,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Clear cart data from localStorage
      localStorage.removeItem("cartItems");
      localStorage.removeItem("totalPrice");
      localStorage.removeItem("deliveryAddress");

      // Show success message and navigate to orders page
      alert("Order placed successfully!");
      navigate("/my-orders");
    } catch (error) {
      console.error("Error placing order:", error);
      setError(
        error.response?.data?.message ||
          "Failed to place order. Please try again."
      );
    } finally {
      setIsPlacingOrder(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
          <div className="text-xl font-medium">Loading order details...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Order Confirmation</h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="bg-white rounded-lg shadow p-6 mb-4">
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between border-b py-4"
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
              <div>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Delivery Address</h2>
            <div className="bg-gray-50 p-3 rounded border border-gray-200">
              <p className="text-gray-800">{selectedAddress}</p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
            <div className="flex justify-between py-2 border-b">
              <span>Subtotal:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Shipping:</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between py-3 font-bold text-lg">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={isPlacingOrder}
            className="mt-6 bg-green-600 text-white px-6 py-3 w-full rounded hover:bg-green-700 disabled:opacity-50 transition-colors"
          >
            {isPlacingOrder ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
