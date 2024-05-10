import { fireEvent, render, screen } from '@testing-library/react';

import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';

describe('Sidebar', () => {
  test('render', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle sidebar', () => {
    render(<Sidebar />);

    const sidebar = screen.getByTestId('sidebar');
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    const expandedWidthBeforeToggle = parseFloat(getComputedStyle(sidebar).width);

    expect(sidebar).toBeInTheDocument();

    fireEvent.click(toggleBtn);

    const collapsedWidth = parseFloat(getComputedStyle(sidebar).width);
    expect(collapsedWidth).toBeLessThan(expandedWidthBeforeToggle);

    fireEvent.click(toggleBtn);

    const expandedWidthAfterToggle = parseFloat(getComputedStyle(sidebar).width);
    expect(expandedWidthAfterToggle).toEqual(expandedWidthBeforeToggle);
  });
});
