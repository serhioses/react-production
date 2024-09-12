import { screen } from '@testing-library/react';

import { Navbar } from 'widgets/Navbar/ui/Navbar';

import { renderComponent } from 'tests/renderComponent';

describe('Navbar', () => {
  test('render', async () => {
    renderComponent(<Navbar />);
    expect(await screen.findByTestId('navbar')).toBeInTheDocument();
  });
});
