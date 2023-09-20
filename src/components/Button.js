import React from "react";
import "./Button.css";
const Button = ({ onClick, label }) => {
  const buttonClassName = label === "Create Account" ? "create-button" : "";
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
