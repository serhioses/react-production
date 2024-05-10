import { useTranslation } from 'react-i18next';

import { Center, Text } from '@chakra-ui/react';

export function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <Center height="100%">
      <Text fontSize="4xl">{t('notFoundPage')}</Text>
    </Center>
  );
}
