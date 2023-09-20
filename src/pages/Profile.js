import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import marry from "../assets/Ellipse 114@2x.png";
import gallery from "../assets/Group 1585.svg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // getting user details from local storage
    const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");

    // getting user details from local storage based on their email
    const users = JSON.parse(localStorage.getItem("users"));

    // Finding the user with the matching email
    const loggedInUser = users.find((user) => user.email === loggedInUserEmail);

    if (loggedInUser) {
      // Update the user details in the component state
      setFullName(loggedInUser.fullName);
      setEmail(loggedInUser.email);
      setPhone(loggedInUser.phoneNumber);
    }
  }, []);

  // logout handeler
  const handleLogout = () => {
    localStorage.removeItem("loggedInUserEmail");
    toast.success("Logged out successfully");
    navigate("/");
  };
  return (
    <div className="wrapper-profile">
      <nav>
        <p className="text">Account Setting</p>
      </nav>
      <div className="profile-container">
        <div className="profile-image-container">
          <img src={marry} alt="Marry's Profile" className="profile-image" />
          <img src={gallery} alt="Gallery Icon" className="gallery-icon" />
        </div>
        <div className="info">
          <h2>{fullName}</h2>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
      <div className="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati velit
        ducimus sapiente odit corporis, deleniti quam accusantium nisi saepe
        enim dicta et non!
      </div>
      <Button className="btn" label="Logout" onClick={handleLogout} />
    </div>
  );
};

export default Profile;
