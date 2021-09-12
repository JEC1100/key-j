import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Searchbar from '../components/Searchbar';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

test('a user can input a song title and the value is received', () => {
  render(<Searchbar />);
  const input = screen.getByPlaceholderText(/Enter song/i);
  userEvent.type(input, 'Yellow submarine');
  expect(input).toHaveValue('Yellow submarine');
});

test('a user can click submit and a request is fired off', () => {
  const submitSongName = jest.fn();
  const { getByTestId } = render(<Searchbar submit={submitSongName} />);
  const input = screen.getByPlaceholderText(/Enter song/i);
  userEvent.type(input, 'Yellow submarine');
  fireEvent.submit(getByTestId('form'));
  expect(submitSongName).toHaveBeenCalled();
});
