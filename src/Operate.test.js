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

  it('should handle division by 0', () => {
    const result = operate(6, 0, '÷');
    expect(result).toBe("Can't divide by 0.");
  });

  it('should return the correct result for modulo', () => {
    const result = operate(7, 3, '%');
    expect(result).toBe('1');
  });

  it('should handle modulo with division by 0', () => {
    const result = operate(7, 0, '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operations', () => {
    expect(() => operate(2, 3, '^')).toThrow("Unknown operation '^'");
  });
});
