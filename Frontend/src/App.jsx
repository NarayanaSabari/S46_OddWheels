import dotenv from "dotenv";
import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css"; // Moved the CSS import to the top

import { Login } from "./component/Login";
import { Signin } from "./component/Signin";
import { Signup } from "./component/Signup";
import { Home } from "./component/Home";
import { Profilepage } from "./component/Profilepage";

// dotenv.config();

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profilepage />} />
      {/* <Route path="/" element={<Login />} />{" "} */}
      {/* Keep the catch-all route at the end */}
    </Routes>
  );
}

export default App;
