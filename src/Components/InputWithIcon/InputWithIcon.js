import React, { useState } from "react";
import { Input } from "../ui/input";

function InputWithIcon({
  icon,
  type,
  showCounter,
  limit,
  required,
  value,
  onChangeFunc,
  placeholder,
  disabled,
  step,
  min,
  max,
  className,
}) {
  const [count, setCount] = useState(0);

  return (
    <div
      className={`flex items-center w-full bg-background border-black border-b-2  pr-2 ${className}`}
    >
      <Input
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        min={min}
        max={max}
        step={step}
        type={type}
        className={`text-lg border-none focus-visible:ring-0 focus-visible:ring-offset-0 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:text-black`}
        onChange={(e) => {
          if (e.target.value.length > limit) {
            console.log(limit, e.target.value.length);
            e.target.value = e.target.value.slice(0, limit);
          }
          onChangeFunc && onChangeFunc(e);
          setCount(e.target.value.length);
        }}
        value={value}
      />
      {showCounter ? (
        <div className="opacity-40"> {count + "/" + limit}</div>
      ) : (
        icon
      )}
    </div>
  );
}

export default InputWithIcon;
