import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

test('renders basic first step text', () => {
  render(<App />);
  const linkElement = screen.getByText('Welcome to the Scavenger Hunt, click continue to Start!');
  expect(linkElement).toBeInTheDocument();
});
