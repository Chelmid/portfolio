import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import il8nEn from "../data/il8nEn.json";
import il8nFr from "../data/il8nFr.json";

i18next.use(initReactI18next).init({
  lng: "fr", // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: il8nEn,
    },
    fr: {
      translation: il8nFr,
    },
  },
  defaultNS: false,
});
