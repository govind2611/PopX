import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { toast } from "react-toastify";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState("Yes");

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    //input validations
    if (
      !fullName.trim() ||
      !phoneNumber.trim() ||
      !email.trim() ||
      !password.trim() ||
      !companyName.trim()
    ) {
      toast.error("All the fields are mandatory");
      return;
    }

    // password validations
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    // password must contain one uppercase character
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must include at least one uppercase letter.");
      return;
    }

    // password must contain one special character
    if (!/[!@#$%^&*]/.test(password)) {
      toast.error("Password must include at least one special character.");
      return;
    }

    // Checking if localStorage already has user
    let users = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = users.some((user) => user.email === email);
    const phoneNumberExists = users.some(
      (user) => user.phoneNumber === phoneNumber
    );

    if (emailExists) {
      toast.error("Email already exists. Please use a different email.");
      return;
    }
    if (phoneNumberExists) {
      toast.error(
        "Phone number already exists. Please use a different phone number."
      );
      return;
    }

    // Creating a new object for user
    const newUser = {
      fullName,
      phoneNumber,
      email,
      password,
      companyName,
      isAgency,
    };

    users.push(newUser);

    // Update localStorage with the new user data
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUserEmail", email);

    toast.success("Account created successfully!");

    navigate("/login");

    // Resetting the form
    setFullName("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
    setCompanyName("");
    setIsAgency("Yes");
  };
  return (
    <div className="wrapper">
      <div className="main-wrapper">
        <h1>Create Your</h1>
        <h1 className="heading2">PopX account</h1>
        <form>
          <div class="input-wrapper">
            <label className="label-input" for="Full-Name">
              Full Name <span className="star">*</span>
            </label>
            <input
              className="input"
              placeholder="Marry Doe"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div class="input-wrapper">
            <label for="phone" className="label-input">
              Phone Number <span className="star">*</span>
            </label>
            <input
              className="input"
              placeholder="9876543210"
              type="number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div class="input-wrapper">
            <label for="email" className="label-input">
              Email Address <span className="star">*</span>
            </label>
            <input
              placeholder="marry123@gmail.com"
              className="input"
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
              className="input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />{" "}
          </div>

          <div class="input-wrapper">
            <label for="company" className="label-input">
              Company Name <span className="star">*</span>
            </label>
            <input
              placeholder="Marry Doe"
              className="input"
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />{" "}
          </div>
          <div className="input2">
            <p>Are you an Agency ? *</p>
            <label className="label2">
              <input
                type="radio"
                name="isAgency"
                value="Yes"
                checked={isAgency === "Yes"}
                onChange={() => setIsAgency("Yes")}
              />
              Yes
            </label>
            <label className="label2">
              <input
                type="radio"
                name="isAgency"
                value="No"
                checked={isAgency === "No"}
                onChange={() => setIsAgency("No")}
              />
              No
            </label>
          </div>
          <Button label="Create Account" onClick={handleSignup} />
        </form>
        <p className="link-tag">
          Already have an account?{" "}
          <Link className="link" to="/login">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
