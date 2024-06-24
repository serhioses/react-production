import '@testing-library/jest-dom';

jest.mock('react-i18next', () => {
  const reactI18next = jest.requireActual('react-i18next');

  return {
    ...reactI18next,
    // this mock makes sure any components using the translate hook can use it without a warning being shown
    useTranslation: () => {
      return {
        t: (str: string) => str,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
        },
      };
    },
    initReactI18next: {
      type: '3rdParty',
      init: () => {},
    },
  };
});
