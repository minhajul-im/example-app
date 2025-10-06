import { bn } from "@/locales/bn";
import { en } from "@/locales/en";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: en,
    bn: bn,
  },
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
