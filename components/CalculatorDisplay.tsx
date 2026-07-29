import React from 'react';

interface CalculatorDisplayProps {
  value: string;
}

const CalculatorDisplay: React.FC<CalculatorDisplayProps> = ({ value }) => {
  return (
    <div className="calculator-display">
      {value}
    </div>
  );
};

export default CalculatorDisplay;