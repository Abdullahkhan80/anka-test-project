import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import CalculatorDisplay from './CalculatorDisplay';
import { evaluate } from 'mathjs';

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (label: string) => {
    if (label === 'C') {
      setDisplayValue('0');
    } else if (label === '=') {
      try {
        const result = evaluate(displayValue);
        setDisplayValue(String(result));
      } catch {
        setDisplayValue('Error');
      }
    } else {
      setDisplayValue((prev) => (prev === '0' ? label : prev + label));
    }
  };

  return (
    <div className="calculator">
      <CalculatorDisplay value={displayValue} />
      <div className="calculator-buttons">
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((label) => (
          <CalculatorButton key={label} label={label} onClick={() => handleButtonClick(label)} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
