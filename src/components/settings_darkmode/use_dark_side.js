import { useState, useEffect } from "react";

const UseDarkSide = () => {
  const [mode, setMode] = useState(localStorage.mode || "light");
  const colorMode = mode === "dark" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(colorMode);
    localStorage.setItem("mode", mode);
  }, [mode, colorMode]);

  return [colorMode, setMode];
};

export default UseDarkSide;
