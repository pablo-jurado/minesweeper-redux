export function createEmptyBoard(rowIndx, colIndx, minesNum) {
  let board = [];
  for (let i = 0; i < rowIndx; i++) {
    let col = [];
    for (let j = 0; j < colIndx; j++) {
      col.push({
        isClicked: false,
        mine: false,
        flag: false,
        showMine: false,
        minesNum: null
      });
    }
    board.push(col);
  }
  const boardWithMines = addMines(minesNum, board);
  const boardWithNumbers = addMinesNumber(boardWithMines);
  return boardWithNumbers;
}

function addMines(minesNum, oldBoard) {
  const board = oldBoard.slice();
  const rowIndx = board.length;
  const colIndx = board[0].length;

  for (var i = 0; i < minesNum; i++) {
    const xRan = getRandom(0, rowIndx);
    const yRan = getRandom(0, colIndx);
    // already a mine in this position
    if (board[xRan][yRan].mine === true) {
      // try again
      i--;
    } else {
      board[xRan][yRan].mine = true;
    }
  }
  return board;
}

function addMinesNumber(oldBoard) {
  const board = oldBoard.slice();
  const rowIndx = board.length;
  const colIndx = board[0].length;

  for (let i = 0; i < rowIndx; i++) {
    for (let j = 0; j < colIndx; j++) {
      board[i][j].minesNum = getMineNumber(i, j, board);
    }
  }
  return board;
}

function getMineNumber(xNum, yNum, oldBoard) {
  const board = oldBoard.slice();
  const rowIndx = board.length;
  const colIndx = board[0].length;

  let values = [];

  for (var x = xNum - 1; x < xNum + 2; x++) {
    for (var y = yNum - 1; y < yNum + 2; y++) {
      if (x >= 0 && x < colIndx && y >= 0 && y < rowIndx) {
        values.push(board[x][y].mine);
      }
    }
  }

  const mines = values.filter((item) => {
    return item;
  });

  const minesNum = mines.length;

  if (minesNum) return minesNum;
  return undefined;
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export function showEmptySquares(xNum, yNum, oldBoard) {
  const board = oldBoard.slice();
  const rowIndx = board.length;
  const colIndx = board[0].length;

  for (var x = xNum - 1; x < xNum + 2; x++) {
    for (var y = yNum - 1; y < yNum + 2; y++) {
      if (x >= 0 && x < colIndx && y >= 0 && y < rowIndx) {
        if (!board[x][y].minesNum) board[x][y].isClicked = true;
      }
    }
  }
  return board;
}
