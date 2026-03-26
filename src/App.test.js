import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Mark Castro name on the page', () => {
  render(<App />);
  const nameElement = screen.getByText('Mark Castro');
  expect(nameElement).toBeInTheDocument();
});

test('renders course name on the page', () => {
  render(<App />);
  const courseElement = screen.getByText('TECH2102 - Enterprise Computing');
  expect(courseElement).toBeInTheDocument();
});
