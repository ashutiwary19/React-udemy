function isDraw(gameBoard) {
  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      if (!gameBoard[i][j]) {
        return false;
      }
    }
  }
  return true;
}

export const getWinner = (gameBoard) => {
  for (let i = 0; i < gameBoard.length; i++) {
    if (
      gameBoard[i][0] &&
      gameBoard[i][0] === gameBoard[i][1] &&
      gameBoard[i][1] === gameBoard[i][2]
    ) {
      return gameBoard[i][0];
    }
  }

  for (let j = 0; j < gameBoard[0].length; j++) {
    if (
      gameBoard[0][j] &&
      gameBoard[0][j] === gameBoard[1][j] &&
      gameBoard[1][j] === gameBoard[2][j]
    ) {
      return gameBoard[0][j];
    }
  }

  if (
    gameBoard[0][0] &&
    gameBoard[0][0] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][2]
  ) {
    return gameBoard[0][0];
  }

  if (
    gameBoard[0][2] &&
    gameBoard[0][2] === gameBoard[1][1] &&
    gameBoard[1][1] === gameBoard[2][0]
  ) {
    return gameBoard[0][2];
  }
  if (isDraw(gameBoard)) {
    return 'draw';
  }
  return null;
};

export const gameInitialState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const updateGameBoard = (turns) => {
  let gameBoard = getEmptyBoard();
  for (const turn of turns) {
    gameBoard[turn.square.row][turn.square.col] = turn.player;
  }
  return gameBoard;
};

function getEmptyBoard() {
  return structuredClone(gameInitialState);
}
