import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/Login/LoginPage";
import UserList from "./Components/UserList/UserList";
import SignUpPage from "./Components/SignUp/SignUp";
import HomePage from "./Components/HomePage/HomePage";
import ProductForm from "./Components/ProductForm";
import MyProducts from "./Components/MyProducts";
import EditProductForm from "./Components/EditProductForm";
import Cart from "./Components/Cart"; // Import Cart component

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/create-product" element={<ProductForm />} />
          <Route path="/my-products" element={<MyProducts />} />
          <Route path="/user/:email" element={<MyProducts />} />
          <Route path="/edit-product/:id" element={<EditProductForm />} />
          <Route path="/cart" element={<Cart />} /> {/* Add Cart route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
