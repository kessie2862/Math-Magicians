import React from 'react';
import { render } from '@testing-library/react';
import Home from './components/HomePage';

test('Correctly renders Home component', () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
