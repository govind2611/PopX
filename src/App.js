import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import Profile from "./pages/Profile";



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} /> 
        <Route path="/profile" element={<Profile/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
