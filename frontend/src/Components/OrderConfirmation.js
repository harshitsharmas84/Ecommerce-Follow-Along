import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector } from "react-redux"; // Import useSelector

const OrderConfirmation = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod"); // Default to COD
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const userEmail = useSelector((state) => state.user.email); // Get email from Redux store

  // Replace with your actual PayPal client ID from your PayPal developer account
  const paypalClientId = "YOUR_PAYPAL_CLIENT_ID";

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

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

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
          paymentMethod: paymentMethod, // Add payment method to order
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

  // Handler for when PayPal payment is approved
  const handlePayPalApprove = async (data, actions) => {
    try {
      // Capture the funds from the transaction
      const details = await actions.order.capture();
      console.log("Payment completed successfully", details);

      // Create order in your system
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
          paymentMethod: "paypal",
          paymentId: details.id, // Store the PayPal transaction ID
          paymentStatus: "completed",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Clear cart data
      localStorage.removeItem("cartItems");
      localStorage.removeItem("totalPrice");
      localStorage.removeItem("deliveryAddress");

      // Show success message and navigate to orders page
      alert("Payment successful! Your order has been placed.");
      navigate("/my-orders");
    } catch (error) {
      console.error("Error processing payment:", error);
      setError(
        "Payment was approved but we couldn't create your order. Please contact support."
      );
    }
  };

  // Create order for PayPal
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: totalPrice.toFixed(2),
          },
          description: "Purchase from E-Commerce Store",
        },
      ],
    });
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

          {/* Payment Method Selection */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">Payment Method</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="cod"
                  name="paymentMethod"
                  value="cod"
                  checked={paymentMethod === "cod"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                <label htmlFor="cod" className="text-gray-800">
                  Cash on Delivery (COD)
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="paypal"
                  name="paymentMethod"
                  value="paypal"
                  checked={paymentMethod === "paypal"}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                <label htmlFor="paypal" className="text-gray-800">
                  Pay with PayPal
                </label>
              </div>
            </div>
          </div>

          {/* PayPal Button Container */}
          {paymentMethod === "paypal" && (
            <div className="mt-6 border rounded p-4 bg-gray-50">
              <p className="text-center text-gray-600 mb-4">
                Complete your purchase securely with PayPal
              </p>
              <PayPalScriptProvider
                options={{
                  "client-id": paypalClientId,
                  components: "buttons",
                  currency: "USD",
                }}
              >
                <PayPalButtons
                  style={{ layout: "vertical" }}
                  createOrder={createOrder}
                  onApprove={handlePayPalApprove}
                />
              </PayPalScriptProvider>
            </div>
          )}

          {/* Display COD button only if COD is selected */}
          {paymentMethod === "cod" && (
            <button
              onClick={handlePlaceOrder}
              disabled={isPlacingOrder}
              className="mt-6 bg-green-600 text-white px-6 py-3 w-full rounded hover:bg-green-700 disabled:opacity-50 transition-colors"
            >
              {isPlacingOrder ? "Placing Order..." : "Place Order"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
