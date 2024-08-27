import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from 'shared/locales/en/translation.json';
import ru from 'shared/locales/ru/translation.json';

// TODO: add multiple files and parse types
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ru'],
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    resources: {
      en,
      ru,
    },
    defaultNS: 'common',
    interpolation: {
      escapeValue: false,
    },
  });

// eslint-disable-next-line no-restricted-exports
export default i18n;

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: typeof en;
  }
}
