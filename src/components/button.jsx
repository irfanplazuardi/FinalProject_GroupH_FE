import React from "react";

const ButtonStyle = ({
  children,
  onClick,
  widthButton,
  paddingX,
  paddingY,
}) => {
  const DefaultWidthButton = widthButton || "full";
  const DefaultPaddingX = paddingX || "4";
  const DefaultPaddingY = paddingY || "2";
  return (
    <button
      onClick={onClick}
      className={`w-${DefaultWidthButton} bg-black text-white py-${DefaultPaddingY} px-${DefaultPaddingX} rounded-md hover:bg-gray-800`}
    >
      {children}
    </button>
  );
};

export default ButtonStyle;
