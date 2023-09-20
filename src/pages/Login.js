import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // input validations
    if (!email.trim() || !password.trim()) {
      toast.error("All the fields are mandatory");
      return;
    }

    // getting user details from local storage & finding based on their email
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email);

    // user not found edge case && login && incorrect pass
    if (!user) {
      toast.error("User not found. Please sign up.");
    } else if (user.password === password) {
      toast.success("Login successful!");
      localStorage.setItem("loggedInUserEmail", email);
      navigate("/profile");
    } else if (user.password !== password) {
      toast.error("Incorrect password. Please try again.");
    }
  };
  return (
    <div className="wrapper">
      <div className="main-wrapper">
        <h1>Signin to your</h1>
        <h1 className="heading2">PopX Account</h1>
        <p className="heading2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <form>
          <div class="input-wrapper">
            <label for="email" className="label-input">
              Email Address <span className="star">*</span>
            </label>
            <input
              placeholder="marry123@gmail.com"
              className="input login-inputs"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
          </div>
          <div class="input-wrapper">
            <label for="password" className="label-input">
              Password <span className="star">*</span>
            </label>
            <input
              placeholder="Marry@123"
              className="input login-inputs"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
          </div>
          <Button label="Login" onClick={handleLogin} />
        </form>
        <p className="link-tag">
          Not registered? <Link to="/signup">Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
