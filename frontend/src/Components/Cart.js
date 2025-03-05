import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Load cart items from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    // Calculate total
    const calculatedTotal = storedCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(calculatedTotal);
  }, []);

  const handleUpdateQuantity = (index, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = [...cartItems];
    updatedCart[index].quantity = newQuantity;
    setCartItems(updatedCart);

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Recalculate total
    const calculatedTotal = updatedCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(calculatedTotal);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);

    // Update localStorage
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Recalculate total
    const calculatedTotal = updatedCart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(calculatedTotal);
  };

  const handleCheckout = () => {
    alert("Checkout functionality will be implemented in future milestones!");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
              <div className="text-center py-10">
                <p className="text-gray-500 text-lg">Your cart is empty</p>
                <p className="text-gray-400 mt-2">
                  Add some products to your cart to see them here!
                </p>
                <Link
                  to="/"
                  className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
                >
                  Browse Products
                </Link>
              </div>
            </div>
          ) : (
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-md object-cover"
                              src={`http://localhost:6400/${item.image}`}
                              alt={item.name}
                            />
                          </div>
                          <div className="ml-4">
                            <Link
                              to={`/product/${item.productId}`}
                              className="text-sm font-medium text-gray-900 hover:text-indigo-600"
                            >
                              {item.name}
                            </Link>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${item.price}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center border border-gray-300 rounded overflow-hidden w-24">
                          <button
                            onClick={() =>
                              handleUpdateQuantity(index, item.quantity - 1)
                            }
                            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                              handleUpdateQuantity(
                                index,
                                parseInt(e.target.value) || 1
                              )
                            }
                            className="w-10 px-2 py-1 text-center focus:outline-none"
                          />
                          <button
                            onClick={() =>
                              handleUpdateQuantity(index, item.quantity + 1)
                            }
                            className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleRemoveItem(index)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="px-6 py-4 bg-gray-50">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium">Total:</span>
                  <span className="text-xl font-bold text-indigo-600">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <div className="mt-4">
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;
