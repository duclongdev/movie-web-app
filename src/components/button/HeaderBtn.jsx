import React from "react";
import { useTranslation } from "react-i18next";
import { historyIcon, userIcon } from "../../assets";

const HeaderBtn = ({ name, type }) => {
  const { t, i18n } = useTranslation();
  const action = () => {
    type == "Language" ? changeLang() : nothing;
  };
  const changeLang = () => {
    if (localStorage.getItem("language") === "vn")
      localStorage.setItem("language", "en");
    else localStorage.setItem("language", "vn");
    console.log(localStorage.getItem("language"));
    i18n.changeLanguage(localStorage.getItem("language"));
  };

  return (
    <div>
      <button className="btn-header" onClick={action}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={type === "History" ? historyIcon : userIcon}
          />
        </svg>
        <span className="text-xs">{name}</span>
      </button>
    </div>
  );
};

export default HeaderBtn;
