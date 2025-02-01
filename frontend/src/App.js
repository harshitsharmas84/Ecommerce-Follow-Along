import React from "react";
import "./App.css";
import LoginPage from "./Components/Login/LoginPage";
import UserList from "./Components/UserList/UserList";
function App() {
  return (
    <div className="App">
      <LoginPage />
      <UserList />
    </div>
  );
}

export default App;
