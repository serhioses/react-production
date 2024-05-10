import { ReactElement, ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import { render } from '@testing-library/react';

import { TMaybe } from 'shared/types/maybe';

import { i18n } from 'tests/i18n-for-tests';

type TProps = TMaybe<ReactNode | ReactElement>;

export function renderWithTranslation(children: TProps) {
  return render(<I18nextProvider i18n={i18n}>{children}</I18nextProvider>);
}
