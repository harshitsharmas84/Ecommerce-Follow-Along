import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./Components/Login/LoginPage";
import UserList from "./Components/UserList/UserList";
import SignUpPage from "./Components/SignUp/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
