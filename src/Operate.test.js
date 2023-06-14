import operate from './logic/Operate';

describe('operate', () => {
  it('should return the correct result for addition', () => {
    const result = operate(2, 3, '+');
    expect(result).toBe('5');
  });

  it('should return the correct result for subtraction', () => {
    const result = operate(5, 3, '-');
    expect(result).toBe('2');
  });

  it('should return the correct result for multiplication', () => {
    const result = operate(2, 3, 'x');
    expect(result).toBe('6');
  });

  it('should return the correct result for division', () => {
    const result = operate(6, 2, '÷');
    expect(result).toBe('3');
  });
});
