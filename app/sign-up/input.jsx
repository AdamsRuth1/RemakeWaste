import React from 'react';

const Input = ({ type = 'text', placeholder, className, options, ...props }) => {
  if (type === 'select') {
    return (
      <select className={`border-2 border-[#BDC1C6] p-4 rounded-xl w-full bg-[#FFF9B7] ${className}`} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
  type={type}
  placeholder={placeholder}
  className={`border-2 md:border-[#BDC1C6] border-[#1A362B] text-[#BDC1C6] w-full p-4 rounded-xl bg-white md:bg-[#FFF9B7] ${className}`}
  {...props}
/>

  );
};

export default Input;
