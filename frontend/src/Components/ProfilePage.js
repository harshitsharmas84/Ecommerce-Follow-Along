import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const userEmail = useSelector((state) => state.user.email); // Get email from Redux store

  useEffect(() => {
    if (!userEmail) {
      setRedirectToLogin(true);
      return;
    }

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:6400/api/users/profile/${userEmail}`
        );
        setUser(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch user profile");
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, [userEmail]);

  if (redirectToLogin) {
    return <Navigate to="/login" replace />;
  }

  if (loading) return <p className="text-center mt-8">Loading...</p>;
  if (error) return <p className="text-center mt-8 text-red-500">{error}</p>;

  return (
    <div>
      <Navigation />
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        {user && (
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-4">
              <div className="flex items-center">
                {user.profilePhoto && (
                  <img
                    src={`http://localhost:3001/${user.profilePhoto.replace(
                      /\\/g,
                      "/"
                    )}`}
                    alt={user.name}
                    className="w-20 h-20 object-cover rounded mr-4"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold">{user.name}</h3>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Addresses</h2>
              {user.addresses && user.addresses.length === 0 ? (
                <p className="text-gray-500">No address found</p>
              ) : (
                <ul>
                  {user.addresses &&
                    user.addresses.map((address, index) => (
                      <li key={index} className="mb-2">
                        {address}
                      </li>
                    ))}
                </ul>
              )}
              {/*<button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">*/}
              {/*    Add Address*/}
              {/*</button>*/}
              <div className="mt-4">
                <Link
                  to="/add-address"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Add New Address
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
