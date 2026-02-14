// import { useState } from 'react';
// import { gameInitialState } from '../utils/GameUtil';

export function GameBoard({
  /* onSelectSquare,
  activePlayer, */
  gameStateChangeHandler,
  // turns,
  gameBoard,
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
                  disabled={!!gameBoard[rowIndex][cellIndex]}
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
