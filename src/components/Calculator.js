import React, { useState } from 'react';
import Button from './Button';
import Calculate from '../logic/Calculate';
import './Calculator.css';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = Calculate(calcData, buttonName);
    setCalcData(newData);

    if (newData.next !== null) {
      setDisplayValue(newData.next);
    } else if (newData.total !== null) {
      setDisplayValue(newData.total);
    } else {
      setDisplayValue('0');
    }
  };

  return (
    <div className="center">
      <div className="display">{displayValue}</div>
      <Button onButtonClick={handleButtonClick} />
    </div>
  );
}

export default Calculator;
