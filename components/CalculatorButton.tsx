import React from 'react';

interface CalculatorButtonProps {
  label: string;
  onClick: () => void;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="calculator-button">
      {label}
    </button>
  );
};

export default CalculatorButton;
