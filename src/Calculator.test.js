import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from './components/Calculator';

test('renders correctly and handles button click', () => {
  const { container, getByText } = render(<Calculator />);

  fireEvent.click(getByText('1'));

  expect(container.firstChild).toMatchSnapshot();
});
