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
