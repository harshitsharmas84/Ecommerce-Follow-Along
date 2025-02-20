import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6400/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">E-Commerce</h1>
        <div>
          <Link
            to="/login"
            className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 mr-2"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
          >
            Sign Up
          </Link>
          <Link
            to="/create-product"
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Create Product
          </Link>
        </div>
      </header>
      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              image={`http://localhost:6400/${product.imageUrl[0]}`}
              price={product.price}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
