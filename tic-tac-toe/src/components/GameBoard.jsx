import { useState } from 'react';

const initialBoardState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function GameBoard({
  /* onSelectSquare,
  activePlayer, */
  gameStateChangeHandler,
  turns,
}) {
  /*const [boardState, setBoardState] = useState(initialBoardState);

  function handleGameStateChange(rowIndex, colIndex, symbol) {
    setBoardState((oldState) => {
      const newState = [...oldState];
      newState[rowIndex][colIndex] = symbol;
      return newState;
    });
    onSelectSquare();
  }*/

  let gameBoard = initialBoardState;
  for (const turn of turns) {
    gameBoard[turn.square.row][turn.square.col] = turn.player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => (
              <li
                key={cellIndex}
                className="cell"
              >
                <button
                  onClick={() => gameStateChangeHandler(rowIndex, cellIndex)}
                >
                  {gameBoard[rowIndex][cellIndex]}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
