import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from './components/Button';

describe('Button', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Button onButtonClick={() => {}} />);
    expect(container).toMatchSnapshot();
  });

  it('should call the onButtonClick handler with the correct value', () => {
    const onButtonClick = jest.fn();
    const { getByText } = render(<Button onButtonClick={onButtonClick} />);
    fireEvent.click(getByText('7'));
    expect(onButtonClick).toHaveBeenCalledWith('7');
  });
});
