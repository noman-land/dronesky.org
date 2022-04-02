import { render, screen } from '@testing-library/react';

import { App } from './App';

test('renders a record', () => {
  render(<App />);
  const textElement = screen.getByText(/Drone Sky/i);
  expect(textElement).toBeInTheDocument();
});
