import TicTacToe from '../src/gameLogic.js';

document.addEventListener('DOMContentLoaded', () => {
    const game = new TicTacToe();
    const boardElement = document.getElementById('board');
    const statusElement = document.getElementById('status');
    const resetButton = document.getElementById('resetButton');

    boardElement.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('cell')) {
            const index = parseInt(target.dataset.index, 10);
            game.makeMove(index);
            updateBoard();
            updateStatus();
        }
    });

    resetButton.addEventListener('click', () => {
        game.resetGame();
        updateBoard();
        updateStatus();
    });

    function updateBoard() {
        const cells = boardElement.querySelectorAll('.cell');
        cells.forEach((cell, index) => {
            cell.textContent = game.board[index];
        });
    }

    function updateStatus() {
        if (game.winner) {
            statusElement.textContent = game.winner === 'Draw' ? 'It\'s a draw!' : `${game.winner} wins!`;
        } else {
            statusElement.textContent = `Current Player: ${game.currentPlayer}`;
        }
    }

    updateBoard();
    updateStatus();
});