import { GameBoard } from './components/GameBoard';
import { Log } from './components/Log';
import Player from './components/Player';
import { useState } from 'react';
import { getWinner, updateGameBoard } from './utils/GameUtil';
import GameOver from './components/GameOver';

function getCurrentActivePlayer(gameTurns) {
  return gameTurns.length > 0 && gameTurns[0].player === 'X' ? 'O' : 'X';
}

function App() {
  // const [activePlayer, setActivePlayer] = useState('X');
  const [players, setPlayers] = useState({
    X: 'Player 1',
    O: 'Player 2',
    draw: 'Draw',
  });
  const [gameTurns, setGameTurns] = useState([]);
  const currentPlayer = getCurrentActivePlayer(gameTurns);
  const gameBoard = updateGameBoard(gameTurns);
  const winner = getWinner(gameBoard);
  function resetGame() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(playerSymbol, newName) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [playerSymbol]: newName };
    });
  }

  function handleSelectSquare(rowindex, colIndex) {
    // setActivePlayer((oldPlayer) => (oldPlayer === 'X' ? 'O' : 'X'));
    setGameTurns((prevTurns) => {
      let currentPlayer = getCurrentActivePlayer(prevTurns);
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

  if (winner || winner === 'draw') {
    return (
      <main>
        <GameOver
          winner={players[winner]}
          rematchHandler={resetGame}
        />
      </main>
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol
          id="players"
          className="highlight-player"
        >
          <Player
            name={players.X}
            symbol="X"
            isActive={currentPlayer === 'X'}
            playerNameChangeHandler={handlePlayerNameChange}
          />
          <Player
            name={players.O}
            symbol="O"
            isActive={currentPlayer === 'O'}
            playerNameChangeHandler={handlePlayerNameChange}
          />
        </ol>
        <GameBoard
          /* onSelectSquare={handleSelectSquare}
          activePlayer={activePlayer} */
          gameStateChangeHandler={handleSelectSquare}
          gameBoard={gameBoard}
        />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
