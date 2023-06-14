import React from 'react';
import { render } from '@testing-library/react';
import RandomQuotes from './components/RandomQuotes';
import '@testing-library/jest-dom/extend-expect';

test('renders correctly', () => {
  const { asFragment } = render(<RandomQuotes />);
  expect(asFragment()).toMatchSnapshot();
});

test('displays loading state', () => {
  const { getByText } = render(<RandomQuotes />);
  expect(getByText('Loading...')).toBeInTheDocument();
});

test('displays error state', async () => {
  jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
    ok: false,
    json: () => Promise.resolve({}),
  }));

  const { findByText } = render(<RandomQuotes />);
  const errorElement = await findByText(/Error:/i);
  expect(errorElement).toBeInTheDocument();

  global.fetch.mockRestore();
});

test('displays fetched quote', async () => {
  const quote = 'Test quote';
  jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ quote }]),
  }));

  const { findByText } = render(<RandomQuotes />);
  const quoteElement = await findByText(quote);
  expect(quoteElement).toBeInTheDocument();

  global.fetch.mockRestore();
});
