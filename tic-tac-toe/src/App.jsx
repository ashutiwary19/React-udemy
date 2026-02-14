import { GameBoard } from './components/GameBoard';
import { Log } from './components/Log';
import Player from './components/Player';
import { useState } from 'react';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowindex, colIndex) {
    setActivePlayer((oldPlayer) => (oldPlayer === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      let currentPlayer =
        prevTurns.length > 0 && prevTurns[0].player === 'X' ? 'O' : 'X';
      const updatedTurns = [
        {
          square: { row: rowindex, col: colIndex },
          player: currentPlayer,
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol
          id="players"
          className="highlight-player"
        >
          <Player
            name="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard
          /* onSelectSquare={handleSelectSquare}
          activePlayer={activePlayer} */
          gameStateChangeHandler={handleSelectSquare}
          turns={gameTurns}
        />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
