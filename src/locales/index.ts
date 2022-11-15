import i18next, { InitOptions } from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

const i18nextInit: InitOptions = {
  debug: process.env.NODE_ENV !== "production",
  fallbackLng: "en",
  load: "languageOnly",
};

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init(i18nextInit);

export default i18next;
