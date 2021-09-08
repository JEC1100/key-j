import React from 'react';
import { render, screen } from '@testing-library/react';
import Searchbar from './Searchbar';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

test('click', () => {
  render(<Searchbar />);
  const input = screen.getByLabelText(/Song name/i);
  userEvent.type(input, 'Yellow submarine');

  expect(input).toHaveValue('Yellow submarine');
});
