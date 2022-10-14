import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Nav from "./components/Nav";

import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/SignUp" element={<Signup />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
