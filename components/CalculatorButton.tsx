import React from 'react';

interface CalculatorButtonProps {
  label: string;
  onClick: () => void;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ label, onClick }) => {
  return (
    <button className="calculator-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default CalculatorButton;