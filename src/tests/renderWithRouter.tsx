import { PropsWithChildren } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

export function renderWithRouter(children: PropsWithChildren['children']) {
  return render(<MemoryRouter>{children}</MemoryRouter>);
}
