import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    image:
      "https://cdn.pixabay.com/photo/2023/08/11/10/15/watch-8183268_1280.jpg",
    price: 29.99,
  },
  {
    id: 2,
    name: "Product 2",
    image:
      "https://cdn.pixabay.com/photo/2023/08/11/10/15/watch-8183268_1280.jpg",
    price: 39.99,
  },
  {
    id: 3,
    name: "Product 3",
    image:
      "https://cdn.pixabay.com/photo/2023/08/11/10/15/watch-8183268_1280.jpg",
    price: 49.99,
  },
  // Add more products as needed
];

const HomePage = () => {
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
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
