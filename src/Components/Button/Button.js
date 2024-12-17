import React from "react";

const Button = ({ onClick, children, className, disabled = false }) => {
  return (
    <button
      onClick={(e) => onClick && onClick(e)}
      className={`bg-transparent border rounded-full font-AMedium ${className} ${
        disabled
          ? "cursor-not-allowed opacity-20"
          : "hover:text-primary hover:border-primary"
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
