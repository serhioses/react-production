import { FallbackProps } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

import { Alert, AlertDescription, AlertIcon, AlertTitle } from '@chakra-ui/react';

export function ErrorFallback({ error }: FallbackProps) {
  const { t } = useTranslation();

  return (
    <Alert
      status="error"
      sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
    >
      <AlertIcon />
      <AlertTitle>{t('errorFallbackTitle')}</AlertTitle>
      <AlertDescription>{error.message}</AlertDescription>
    </Alert>
  );
}
