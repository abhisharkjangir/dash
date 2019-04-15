import React from "react";
import "./button.scss";

const Button = ({ label, type, onClick, className, disabled }) => {
  return (
    <button  onClick={onClick} className={className} disabled={disabled}>
     {label}
    </button>
  );
};

export default Button;
