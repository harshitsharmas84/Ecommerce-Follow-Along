// Create new file: SelectAddress.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navigation from "./Navigation";
import { useSelector } from "react-redux"; // Import useSelector

const SelectAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const userEmail = useSelector((state) => state.user.email); // Get email from Redux store

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `http://localhost:6400/api/users/addresses/${userEmail}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAddresses(response.data.addresses);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch addresses");
        setLoading(false);
      }
    };

    if (userEmail) {
      // Fetch only if userEmail is available
      fetchAddresses();
    }
  }, [userEmail]); // Add userEmail to dependency array

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
  };

  const handleContinue = () => {
    if (!selectedAddress) {
      alert("Please select a delivery address");
      return;
    }

    // Store selected address in localStorage for order processing
    localStorage.setItem("deliveryAddress", selectedAddress);

    // Navigate to payment or order confirmation page
    navigate("/order-confirmation");
  };

  const handleAddNewAddress = () => {
    navigate("/add-address");
  };

  if (loading) return <div>Loading addresses...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Navigation />
      <div className="max-w-2xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-6">Select Delivery Address</h2>

        {addresses.length === 0 ? (
          <div className="text-center p-4">
            <p className="mb-4">
              No addresses found. Please add an address to continue.
            </p>
            <button
              onClick={handleAddNewAddress}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Add New Address
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-4">
              {addresses.map((address, index) => (
                <div
                  key={index}
                  className={`border p-4 rounded cursor-pointer ${
                    selectedAddress === address
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200"
                  }`}
                  onClick={() => handleAddressSelect(address)}
                >
                  <p>{address}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={handleAddNewAddress}
                className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
              >
                Add New Address
              </button>

              <button
                onClick={handleContinue}
                className={`bg-green-600 text-white py-2 px-4 rounded ${
                  !selectedAddress
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-green-700"
                }`}
                disabled={!selectedAddress}
              >
                Continue
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SelectAddress;
