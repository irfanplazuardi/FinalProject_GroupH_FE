import React from "react";

const CustomInputUpdate = ({ label, heightOfInput, ...rest }) => {
  const DefaultHeightInputBox = heightOfInput || "18";
  return (
    <div className="relative">
      <label
        className="absolute top-0 left-0 transform translate-x-2 -translate-y-2/4 
                   bg-white px-1 text-gray-600 text-xs rounded-sm font-semibold"
      >
        {label}
      </label>
      <textarea
        className={`block w-full box-border h-${DefaultHeightInputBox} border border-gray-700 rounded-md py-2 px-4 mt-2 bg-transparent`}
        {...rest}
      />
    </div>
  );
};

export default CustomInputUpdate;
