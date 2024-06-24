import { fireEvent, screen } from '@testing-library/react';

import { Counter } from 'entities/Counter/ui/Counter';

import { renderComponent } from 'tests/renderComponent';

describe('Counter', () => {
  test('render', () => {
    renderComponent(<Counter />, { preloadedState: { counter: { value: 10 } } });

    expect(screen.getByTestId('counter-value')).toBeInTheDocument();
    expect(screen.getByTestId('counter-value').textContent).toBe('10');
  });

  test('increment', () => {
    renderComponent(<Counter />);

    const incrementBtn = screen.getByTestId('counter-inc');

    fireEvent.click(incrementBtn);

    expect(screen.getByTestId('counter-value').textContent).toBe('1');
  });

  test('decrement', () => {
    renderComponent(<Counter />);

    const decrementBtn = screen.getByTestId('counter-dec');

    fireEvent.click(decrementBtn);

    expect(screen.getByTestId('counter-value').textContent).toBe('-1');
  });

  test('setValue', () => {
    renderComponent(<Counter />);

    jest.spyOn(window, 'prompt').mockImplementation(() => '5');

    const setValueBtn = screen.getByTestId('counter-setValue');

    fireEvent.click(setValueBtn);

    expect(screen.getByTestId('counter-value').textContent).toBe('5');
  });
});
