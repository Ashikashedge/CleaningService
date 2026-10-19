import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders the SparkClean one-page sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /a cleaner space/i, level: 1 })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /cleaning that fits/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /request a free quote/i })).toBeInTheDocument();
  expect(screen.getByText(/sample testimonials are shown for layout preview only/i)).toBeInTheDocument();
});

test('opens and closes the responsive navigation after a section is chosen', () => {
  render(<App />);
  const menuButton = screen.getByRole('button', { name: /open navigation menu/i });
  fireEvent.click(menuButton);
  expect(menuButton).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(screen.getAllByRole('link', { name: 'Services' })[0]);
  expect(menuButton).toHaveAttribute('aria-expanded', 'false');
});

test('validates the enquiry form and explains when no API is configured', async () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /send enquiry/i }));
  expect(screen.getByText(/please enter your name/i)).toBeInTheDocument();
  expect(screen.getByText(/please enter your phone number/i)).toBeInTheDocument();
  expect(screen.getByText(/please enter your email address/i)).toBeInTheDocument();
  expect(screen.getByText(/please choose a cleaning service/i)).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Demo Customer' } });
  fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '+971 50 123 4567' } });
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'demo@example.com' } });
  fireEvent.change(screen.getByLabelText(/cleaning service/i), { target: { value: 'Home Cleaning' } });
  fireEvent.click(screen.getByRole('button', { name: /send enquiry/i }));

  expect(await screen.findByText(/not connected yet/i)).toBeInTheDocument();
  expect(screen.queryByText(/your enquiry has been sent/i)).not.toBeInTheDocument();
});
