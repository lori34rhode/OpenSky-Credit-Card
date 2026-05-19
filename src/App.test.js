import { render, screen } from '@testing-with-react';
import React from 'react';
import App from './App';

test('renders OpenSky Credit Card dashboard title', () => {
  render(<App />);
  const linkElement = screen.getByText(/OpenSky Credit Card Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
