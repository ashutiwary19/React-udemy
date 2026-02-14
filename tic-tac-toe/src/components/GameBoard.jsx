import { useState } from 'react';

const initialBoardState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export function GameBoard() {
  const [boardState, setBoardState] = useState(initialBoardState);

  function handleGameStateChange(rowIndex, colIndex, symbol) {
    setBoardState((oldState) => {
      const newState = [...oldState];
      newState[rowIndex][colIndex] = symbol;
      return newState;
    });
  }

  return (
    <ol id="game-board">
      {initialBoardState.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((cell, cellIndex) => (
              <li
                key={cellIndex}
                className="cell"
              >
                <button
                  onClick={() =>
                    handleGameStateChange(rowIndex, cellIndex, 'X')
                  }
                >
                  {boardState[rowIndex][cellIndex]}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
