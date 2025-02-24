import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { email } = useParams(); // Get the email parameter from the URL

  useEffect(() => {
    fetch(`http://localhost:6400/api/products/user/${email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products", error));
  }, [email]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Products</h1>
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
        k
      </header>
      <main className="p-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
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

export default MyProducts;
