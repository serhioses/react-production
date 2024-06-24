import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

export function renderWithRouter(children: ReactNode) {
  return render(<MemoryRouter>{children}</MemoryRouter>);
}
