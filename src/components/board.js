import React from "react";

const Board = ({ state, rightClick, leftClick }) => {
  const handleLeftClick = (e) => {
    const position = e.target.dataset;
    if (position.row) {
      leftClick(position.row, position.col);
    }
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    const position = e.target.dataset;
    if (position.row) {
      rightClick(position.row, position.col);
    }
  };

  return (
    <div
      className="board"
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      <Row board={state.board} />
    </div>
  );
};

function Row({ board }) {
  let rowCollection = board.map((item, i) => {
    return (
      <div key={i} className="row">
        <Squares squares={item} rowIndex={i} />
      </div>
    );
  });
  return rowCollection;
}

function Squares({ squares, rowIndex }) {
  let squaresCollection = squares.map((square, i) => {
    let classVal = "square";
    let minesNumber = null;

    if (square.flag) classVal = "square flag";

    // TODO
    // if (square.showMine) classVal = "square mine-off";

    if (square.isClicked) {
      if (square.mine) classVal = "square mine";
      if (!square.mine) {
        minesNumber = square.minesNum;
        classVal = "square off";
      }
    }

    return (
      <div data-row={rowIndex} data-col={i} key={i} className={classVal}>
        {minesNumber}
      </div>
    );
  });
  return squaresCollection;
}

export default Board;
