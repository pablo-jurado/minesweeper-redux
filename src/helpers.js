export function createEmptyBoard(rowIndx, colIndx) {
  let board = [];
  for (let i = 0; i < rowIndx; i++) {
    let col = [];
    for (let j = 0; j < colIndx; j++) {
      col.push({ isClicked: false, mine: false, flag: false, showMine: false });
    }
    board.push(col);
  }
  return board;
}

export function addMines(minesNum, board, rowIndx, colIndx) {
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

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
