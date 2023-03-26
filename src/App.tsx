import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/home";
import Login from "./pages/Login/Login";
import RegisterPage from "./pages/Register/RegisterPage";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Analytics from "./components/Analytics/analytics";
import Schedule from "./pages/Schedule/Schedule";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/dashboard/" element={<Dashboard />}>
          <Route path="analytics" element={<Analytics />} />
          <Route path="schedules" element={<Schedule />} />
          {/* <Route path="" element={} />
          <Route path="" element={} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
