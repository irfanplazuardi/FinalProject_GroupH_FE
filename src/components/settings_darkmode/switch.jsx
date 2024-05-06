import React from "react";
import useDarkSide from "./use_dark_side";
import ButtonStyle from "../button";

const SwitcherMode = () => {
  const [colorMode, setMode] = useDarkSide();

  const toggleDarkMode = () => {
    setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
  };

  return (
    <ButtonStyle onClick={toggleDarkMode} className="darkMode" widthButton="24">
      {colorMode === "dark" ? "Light" : "Dark"}
    </ButtonStyle>
  );
};

export default SwitcherMode;
