import Resources from 'app/types/resources.generated';

type TKey = `errors.${keyof Resources['translation']['errors']}`;

export const buildErrorKey = (key: keyof Resources['translation']['errors']): TKey => {
  return `errors.${key}`;
};
