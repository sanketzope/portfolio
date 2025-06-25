import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react'; 
import App from './App';

test('renders portfolio header', async () => {
  await act(async () => {
    render(<App />);
  });

  expect(await screen.findByText(/My Portfolio/i)).toBeInTheDocument();
});

test('contact form sends message', async () => {
  await act(async () => {
    render(<App />);
  });

  const emailInput = await screen.findByPlaceholderText('Your Email');
  const messageInput = await screen.findByPlaceholderText('Your Message');

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(messageInput, { target: { value: 'Hello there!' } });

  fireEvent.click(screen.getByText('Send'));


  expect(await screen.findByText(/Message sent/i)).toBeInTheDocument();
});
