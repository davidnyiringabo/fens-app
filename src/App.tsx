import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/home";
import Login from "./pages/Login/Login";
import RegisterPage from "./pages/Register/RegisterPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
