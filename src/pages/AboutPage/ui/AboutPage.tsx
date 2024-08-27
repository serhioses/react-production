import { useTranslation } from 'react-i18next';

export function AboutPage() {
  const { t } = useTranslation('aboutPage');

  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  );
}

export { AboutPage as default };
