import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("userEmail");
    setIsLoggedIn(!!token);
    setUserEmail(email || "");
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-indigo-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="text-white font-bold text-xl">E-Commerce</div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md font-medium"
            >
              Home
            </Link>

            {isLoggedIn ? (
              <>
                <Link
                  to="/my-products"
                  className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md font-medium"
                >
                  My Products
                </Link>
                <Link
                  to="/create-product"
                  className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md font-medium"
                >
                  Add Product
                </Link>
                <Link
                  to="/cart"
                  className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md font-medium"
                >
                  Cart
                </Link>
                <Link
                  to="/my-orders"
                  className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md font-medium"
                >
                  My Orders
                </Link>
                <Link
                  to="/profile"
                  className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md font-medium"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-white hover:bg-indigo-700 px-3 py-1 rounded border border-white ml-4"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="ml-4 flex items-center md:ml-6">
                <Link
                  to="/login"
                  className="text-white hover:bg-indigo-700 px-3 py-1 rounded border border-white"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="ml-2 text-indigo-600 bg-white hover:bg-gray-200 px-3 py-1 rounded"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-500 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md font-medium"
            onClick={toggleMenu}
          >
            Home
          </Link>

          {isLoggedIn ? (
            <>
              <Link
                to="/my-products"
                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md font-medium"
                onClick={toggleMenu}
              >
                My Products
              </Link>
              <Link
                to="/create-product"
                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md font-medium"
                onClick={toggleMenu}
              >
                Add Product
              </Link>
              <Link
                to="/cart"
                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md font-medium"
                onClick={toggleMenu}
              >
                Cart
              </Link>
              <Link
                to="/my-orders"
                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md font-medium"
                onClick={toggleMenu}
              >
                My Orders
              </Link>
              <Link
                to="/profile"
                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md font-medium"
                onClick={toggleMenu}
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md font-medium w-full text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="mt-3 space-y-1">
              <Link
                to="/login"
                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md font-medium"
                onClick={toggleMenu}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="text-white hover:bg-indigo-500 block px-3 py-2 rounded-md font-medium"
                onClick={toggleMenu}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
