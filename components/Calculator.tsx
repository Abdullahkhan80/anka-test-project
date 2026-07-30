import React, { useState } from 'react';
import { create, all } from 'mathjs';

const math = create(all);

export const CalculatorButton: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => (
  <button onClick={onClick} className="calculator-button">
    {label}
  </button>
);

export const CalculatorDisplay: React.FC<{ value: string }> = ({ value }) => (
  <div className="calculator-display">
    {value}
  </div>
);

const isValidExpression = (expression: string): boolean => {
  // Validate expression to prevent invalid sequences, allowing spaces
  return /^-?\d+(\.\d+)?([+\-*/]\s*-?\d+(\.\d+)?)*$/.test(expression.trim());
};

const performOperation = (expression: string): number => {
  if (!isValidExpression(expression)) {
    throw new Error('Invalid expression');
  }
  const result = math.evaluate(expression);
  if (typeof result !== 'number' || !Number.isFinite(result)) {
    throw new Error('Division by zero or invalid result');
  }
  return result;
};

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (label: string) => {
    setDisplayValue((prev) => {
      if (prev === 'Error' && !isNaN(Number(label))) {
        return label;
      }
      if (label === 'C') {
        return '0';
      } else if (label === '=') {
        try {
          const result = performOperation(prev);
          return String(result);
        } catch (error) {
          console.error('Evaluation error:', error);
          return 'Error';
        }
      } else {
        if (prev === '0' && label !== '.') {
          return label;
        }
        if (label === '.' && prev.includes('.')) {
          return prev;
        }
        if (/[-+*/]$/.test(prev) && /[-+*/]/.test(label)) {
          return prev.slice(0, -1) + label;
        }
        return prev + label;
      }
    });
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
export { CalculatorButton, CalculatorDisplay };
