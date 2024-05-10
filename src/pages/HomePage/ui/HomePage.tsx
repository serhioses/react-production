import { useTranslation } from 'react-i18next';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('homePage')}</h1>
    </div>
  );
}

export { HomePage as default };
