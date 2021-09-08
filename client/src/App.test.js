import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello world', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello world/i);
  // expect(linkElement).toEqual(<h1>Hello world</h1>);
  expect(linkElement).toBeTruthy();
});
