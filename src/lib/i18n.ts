import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './../locales/en/translation.json';
import translationIT from './../locales/it/translation.json';

const resources = {
  en: {
    translation: translationEN
  },
  it: {
    translation: translationIT
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'it',
    debug: true,
    interpolation: {
      escapeValue: false, 
    }
  });

export default i18n;