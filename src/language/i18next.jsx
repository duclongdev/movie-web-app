import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import vn from "./vn.json";
import en from "./en.json";
i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources: {
    en:en,
    vn: vn
  },
  interpolation: {
    escapeValue: false,
  },
  lng: localStorage.getItem("language"),
  fallbackLng: "vn",
});
export default i18next;
