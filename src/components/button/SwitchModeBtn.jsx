import React from "react";
import { useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { moonIcon, sunIcon } from "../../assets";

const SwitchModeBtn = () => {
  const [mode, setMode] = useState();
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const changeMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
    toggleDarkMode(!isDarkMode);
    console.log(mode);
  };
  return (
    <button className="btn-header" onClick={changeMode}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 dark:fill-yellow-500 fill-slate-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={mode == "light" ? moonIcon : sunIcon}
        />
      </svg>
    </button>
  );
};

export default SwitchModeBtn;
