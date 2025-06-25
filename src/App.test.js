import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders portfolio header', () => {
  render(<App />);
  expect(screen.getByText(/My Portfolio/i)).toBeInTheDocument();
});

test('sends contact form', async () => {
  render(<App />);
  const emailInput = await screen.findByPlaceholderText('Your Email');
  const msgInput = await screen.findByPlaceholderText('Your Message');
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(msgInput, { target: { value: 'Hello!' } });
  fireEvent.click(screen.getByText(/Send/i));
  expect(await screen.findByText(/Message sent!/i)).toBeInTheDocument();
});
