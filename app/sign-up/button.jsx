// Button.js
import React from 'react';

const Button = ({ 
  onClick, 
  children, 
  className = '', 
  disabled = false, 
  type = 'button', 
  variant = '' 
}) => {
  // Define the base styles with width set to full
  const baseStyles = "w-full px-4 py-2 rounded-xl focus:outline-none transition duration-200";
  
  // Define variant styles
  const variantStyles = {
    primary: "bg-[#1A362B] text-white ",
    secondary: "bg-[#BDC1C6] text-white",
    outline: "border border-blue-500 text-blue-500 hover:bg-[#1A362B] hover:text-white"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`} // Combine all styles
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
