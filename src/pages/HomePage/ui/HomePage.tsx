import { useTranslation } from 'react-i18next';

import { Counter } from 'entities/Counter/public-api';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('homePage')}</h1>
      <Counter />
    </div>
  );
}

export { HomePage as default };
