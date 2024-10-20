import React, { useState } from 'react';
import Input from './input';
const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  return (
    <div className="mt-[29px]">
      <div className="relative w-full">
        <Input
          type={isPasswordVisible ? 'text' : 'password'}
          placeholder="Password"
          className="w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? '👁️' : '👁️‍🗨️'}
        </span>
      </div>
      <div className="relative w-full mt-[29px] mb-[40px]">
        <Input
          type={isPasswordVisible ? 'text' : 'password'}
          placeholder="Confirm Password"
          className="w-full"
          value={confirmPassword}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? '👁️' : '👁️‍🗨️'}
        </span>
      </div>
    </div>
  );
};

export default PasswordInput;
