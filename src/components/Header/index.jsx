import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HeaderBtn } from "../button";
import { LogoBtn } from "../button";
import { SwitchModeBtn } from "../button";
import ChangeLangBtn from "../button/ChangeLangBtn";
import Search from "../search";

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div
      className={`header-container ${
        isScrolled
          ? "bg-white dark:bg-slate-800"
          : "bg-gradient-to-b from-slate-800"
      }`}
    >
      <div className="flex flex-row">
        <LogoBtn />
        <SwitchModeBtn />
      </div>
      <Search />
      <div>
        <div className="flex flex-row">
          <ChangeLangBtn />
          <HeaderBtn name={t("History")} type="History" />
          <HeaderBtn name={t("Me")} type="Me" />
        </div>
      </div>
    </div>
  );
};

export default Header;
