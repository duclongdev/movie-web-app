import React from "react";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-orange-600">
      <h2>{t("Home")} </h2>
    </div>
  );
};

export default Home;
