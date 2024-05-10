import { initReactI18next } from 'react-i18next';

import i18n from 'i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',

  // have a common namespace used around the full app
  ns: ['translationsNS'],
  defaultNS: 'translationsNS',

  debug: false,

  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  resources: { en: { translationsNS: {} } },
});

export { i18n };
