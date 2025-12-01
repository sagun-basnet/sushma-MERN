import React from "react";

const Button = ({ text, color, textColor }) => {
  return (
    <button
      style={{ backgroundColor: color, color: textColor }}
      className={`p-2 px-4 rounded-md`}
    >
      {text}
    </button>
  );
};

export default Button;
