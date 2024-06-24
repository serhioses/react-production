import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import { render } from '@testing-library/react';

import { i18n } from 'tests/i18n-for-tests';

export function renderWithTranslation(children: ReactNode) {
  return render(<I18nextProvider i18n={i18n}>{children}</I18nextProvider>);
}
