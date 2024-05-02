import React from "react";

const ButtonStyle = ({ children, onClick, widthButton }) => {
  const DefaultWidthButton = widthButton || "full";
  return (
    <button
      onClick={onClick}
      className={`w-${DefaultWidthButton} bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800`}
      style={{ minHeight: "2rem" }}
    >
      {children}
    </button>
  );
};

export default ButtonStyle;
