import React from "react";
import { useTranslation } from "react-i18next";
import { LangIcon } from "../../assets";
import Tippy from "@tippyjs/react/headless";
const ChangeLangBtn = () => {
  const { t, i18n } = useTranslation();
  const changeLang = (language) => {
    if (localStorage.getItem("language") !== language) {
      localStorage.setItem("language", language);
      i18n.changeLanguage(localStorage.getItem("language"));
    }
  };
  const GroupBtn = () => {
    return (
      <div className="flex flex-col p-4 rounded border border-green-500">
        <button
          className="hover:text-green-500"
          onClick={() => changeLang("vn")}
        >
          Việt Nam
        </button>
        <button
          className="hover:text-green-500"
          onClick={() => changeLang("en")}
        >
          English
        </button>
      </div>
    );
  };

  return (
    <div>
      <Tippy interactive={true} render={() => <GroupBtn />} arrow={true}>
        <button className="btn-header">
          <LangIcon />
          <span className="text-xs">{t("Language")}</span>
        </button>
      </Tippy>
    </div>
  );
};

export default ChangeLangBtn;
