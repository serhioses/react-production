import { TFunction } from 'i18next';

export const getErrorMessage = (key: string, t: TFunction): string => {
  return t(key, { defaultValue: t('errors.genericError') });
};
