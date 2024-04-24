import React from "react";

const ButtonStyle = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonStyle;
