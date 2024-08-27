import { useTranslation } from 'react-i18next';

import { Counter } from 'entities/Counter/public-api';

export function HomePage() {
  const { t } = useTranslation('homePage');

  return (
    <div>
      <h1>{t('title')}</h1>
      <Counter />
    </div>
  );
}

export { HomePage as default };
