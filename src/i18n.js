import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";

import translationRU from "./locales/ru/translation.json";
import translationSP from "./locales/sp/translation.json";
import translationDE from "./locales/de/translation.json";
import translationFR from "./locales/fr/translation.json";
import translationPR from "./locales/pr/translation.json";
import translationPL from "./locales/pl/translation.json";
import translationNL from "./locales/nl/translation.json";
import translationTK from "./locales/tk/translation.json";
import translationIT from "./locales/it/translation.json";
import translationCH from "./locales/ch/translation.json";
import translationSK from "./locales/sk/translation.json";
import translationJAP from "./locales/jap/translation.json";
import translationEN from "./locales/en/translation.json";


const resources = {
    ru: {
        translation: translationRU
    },
    sp: {
        translation: translationSP
    },
    de: {
        translation: translationDE
    },
    fr: {
        translation: translationFR
    },
    pr: {
        translation: translationPR
    },
    pl: {
        translation: translationPL
    },
    nl: {
        translation: translationNL
    },
    tk: {
        translation: translationTK
    },
    it: {
        translation: translationIT
    },
    ch: {
        translation: translationCH
    },
    sk: {
        translation: translationSK
    },
    jap: {
        translation: translationJAP
    },
    en: {
        translation: translationEN
    }
}
Object.entries(resources).map(([lang]) => lang);
i18n.use(LanguageDetector).use(initReactI18next).init({
    lng: localStorage.getItem("language") || "en",
    fallbackLng: "en",
    resources,
    detection: {
        caches: ['cookie']
    },
})

export default i18n;