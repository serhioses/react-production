import { screen } from '@testing-library/react';

import { Navbar } from 'widgets/Navbar/ui/Navbar';

import { renderWithRouter } from 'tests/renderWithRouter';

describe('Navbar', () => {
  test('render', () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });
});
