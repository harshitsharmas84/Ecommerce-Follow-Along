import React from "react";
import Navigation from "./Navigation";
const Cart = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg p-6">
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <p className="text-gray-400 mt-2">-</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
