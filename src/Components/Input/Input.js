import React, { useState } from "react";
import Eye from "Assets/Images/eye.svg";
import { Link } from "react-router-dom";

const Input = ({
  placeholder,
  onChange,
  value,
  type = "text",
  password = false,
  className,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="relative w-full">
      <input
        placeholder={placeholder}
        className="bg-transparent border-b text-black font-ALight placeholder:font-ALight placeholder:text-black outline-0 text-sm w-full py-1.5 rounded-none"
        onChange={onChange}
        value={value}
        required
        type={
          type !== "password"
            ? type
            : password && !isPasswordVisible
            ? "password"
            : "text"
        }
      />
      {password && (
        <img
          src={Eye}
          alt="Toggle visibility"
          className="absolute bottom-8 right-1 cursor-pointer"
          onClick={togglePasswordVisibility}
        />
      )}
      {password && (
        <div className="w-full flex justify-end pt-1">
          <Link to="/forgot-password" className="text-[12px]">
            Forgot Password
          </Link>
        </div>
      )}
    </div>
  );
};

export default Input;
