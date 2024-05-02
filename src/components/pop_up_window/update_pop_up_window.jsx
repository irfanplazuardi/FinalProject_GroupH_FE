import React, { useState } from "react";
import ButtonStyle from "../button";
import CustomInputUpdate from "../input_label/update_custom_input_label";

const PopUpWindowUpdate = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  fields,
  validationText,
  buttonLeft,
}) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit(formData);
    console.log("form submitted:", formData);
  };

  return (
    isOpen && (
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-slate-900 bg-opacity-50">
        <div className="bg-white p-10 rounded-lg shadow-md">
          <h2 className="text-3xl text-left font-semibold mb-10">{title}</h2>
          <form onSubmit={handleSubmit}>
            {Array.isArray(fields) &&
              fields.length > 0 &&
              fields.map((field) => (
                <div key={field.name} className="mb-4">
                  <label
                    htmlFor={field.name}
                    className="block text-lg font-bold mb-1"
                  >
                    {field.label}
                  </label>
                  {field.type === "file" ? (
                    <input
                      type="file"
                      id={field.name}
                      name={field.name}
                      onChange={handleFileChange}
                    />
                  ) : (
                    <CustomInputUpdate
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      heightOfInput="32"
                      value={formData[field.name] || ""}
                      onChange={handleChange}
                    />
                  )}
                </div>
              ))}
            <p className="text-center mx-7">{validationText}</p>
            <div className="flex justify-center mt-10 gap-10">
              <ButtonStyle widthButton="w-32" type="submit">
                {buttonLeft}
              </ButtonStyle>
              <ButtonStyle onClick={onClose} widthButton="w-32">
                Cancel
              </ButtonStyle>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default PopUpWindowUpdate;
