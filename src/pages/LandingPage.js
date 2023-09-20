import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const LandingPage = () => {
  return (
    <div className="wrapper">
      <div></div>
      <div className="main-wrapper">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <Link to="/signup">
          <Button label="Create Account" />
        </Link>
        <Link to="/login">
          <Button label="Already Registered? Login" />
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
