import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const ProductInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:6400/api/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError("Failed to load product details");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    // Get existing cart from localStorage or initialize empty array
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if product already exists in cart
    const existingProductIndex = existingCart.findIndex(
      (item) => item.productId === id
    );

    if (existingProductIndex !== -1) {
      // Update quantity if product already in cart
      existingCart[existingProductIndex].quantity += quantity;
    } else {
      // Add new product to cart
      existingCart.push({
        productId: id,
        name: product.name,
        price: product.price,
        image: product.imageUrl[0],
        quantity: quantity,
      });
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Notify user
    alert("Product added to cart!");

    // Optional: Navigate to cart
    // navigate("/cart");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <div className="flex justify-center items-center h-screen">
          <div className="text-xl font-medium">Loading...</div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <div className="flex justify-center items-center h-screen">
          <div className="text-xl font-medium text-red-500">
            {error || "Product not found"}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2 p-4">
              <div className="h-96 overflow-hidden rounded-lg">
                <img
                  src={`http://localhost:6400/${product.imageUrl[0]}`}
                  alt={product.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              {/* Thumbnail images if there are multiple */}
              {product.imageUrl.length > 1 && (
                <div className="mt-4 flex space-x-2">
                  {product.imageUrl.map((img, index) => (
                    <div
                      key={index}
                      className="w-20 h-20 overflow-hidden rounded-md"
                    >
                      <img
                        src={`http://localhost:6400/${img}`}
                        alt={`${product.name} thumbnail ${index}`}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-2xl text-indigo-600 font-medium mb-6">
                ${product.price}
              </p>

              <div className="border-t border-gray-200 py-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Description
                </h3>
                <p className="text-gray-700 whitespace-pre-wrap">
                  {product.description}
                </p>
              </div>

              <div className="border-t border-gray-200 py-4">
                <div className="flex items-center mb-6">
                  <label
                    htmlFor="quantity"
                    className="mr-4 text-gray-700 font-medium"
                  >
                    Quantity:
                  </label>
                  <div className="flex items-center border border-gray-300 rounded overflow-hidden">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      value={quantity}
                      min="1"
                      onChange={handleQuantityChange}
                      className="w-12 px-2 py-1 text-center focus:outline-none"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-700"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150"
                >
                  Add to Cart
                </button>
              </div>

              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  Seller: {product.userEmail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
