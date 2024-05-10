import { useTranslation } from 'react-i18next';

export function AboutPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('aboutPage')}</h1>
    </div>
  );
}

export { AboutPage as default };
