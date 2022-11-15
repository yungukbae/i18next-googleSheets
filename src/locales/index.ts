import i18next, { InitOptions } from "i18next";
import LanguageDetector, {
  DetectorOptions,
} from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import ko from "./default.ko.json";
import en from "./default.en.json";

type OptionTypes = InitOptions & DetectorOptions;

const detection = {
  order: ["querystring", "localStorage", "navigator"],
  lookupLocalStorage: "i18nextLng",
};

const options: OptionTypes = {
  debug: process.env.NODE_ENV !== "production",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  resources: {
    ko: {
      translations: ko,
    },
    en: {
      translations: en,
    },
  },
  fallbackLng: "ko",
  ns: ["translations"],
  defaultNS: "translations",
  supportedLngs: ["ko", "en"],
  detection: detection,
};

i18next.use(initReactI18next).use(LanguageDetector).init(options);

export default i18next;
