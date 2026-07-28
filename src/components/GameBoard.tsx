import React, { useState } from 'react';
import './GameBoard.css';

interface GameBoardProps {}

const GameBoard: React.FC<GameBoardProps> = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(''));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const handleClick = (index: number) => {
    if (board[index] !== '') return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  return (
    <div className="game-board">
      {board.map((cell, index) => (
        <div
          key={index}
          className="game-cell"
          onClick={() => handleClick(index)}
        >
          {cell}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
