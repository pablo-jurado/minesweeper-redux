import React from "react";

const Board = ({ state }) => (
  <div className="board">
    <Row board={state.board} />
  </div>
);

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
    if (square.showMine) classVal = "square mine-off";

    if (square.isClicked) {
      // TODO: check for winner
      if (square.mine) classVal = "square mine";
      if (!square.mine) classVal = "square off";
    }

    const rightClick = () => {
      console.log("todo");
    };

    const leftClick = () => {
      console.log("todo");
    };
    return (
      <div
        onContextMenu={rightClick}
        onClick={leftClick}
        data-row={rowIndex}
        data-col={i}
        key={i}
        className={classVal}
      >
        {minesNumber}
      </div>
    );
  });
  return squaresCollection;
}

export default Board;
