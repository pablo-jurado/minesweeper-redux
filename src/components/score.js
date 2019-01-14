import React from "react";

const Score = ({ state }) => {
  let flagNum = addZero(state.flagNum);
  let time = addZero(state.seconds);
  let resetButton = <span>&#9786;</span>;
  if (state.isGameOver) resetButton = <span>&#9785;</span>;

  const reset = () => {
    console.log("todo");
  };

  return (
    <div className="score">
      <div className="mines-number">{flagNum}</div>
      <div onClick={reset} className="emoji">
        {resetButton}
      </div>
      <div className="timer">{time}</div>
    </div>
  );
};

function addZero(number) {
  let numLength = number.toString().length;
  if (numLength === 1) number = "00" + number;
  if (numLength === 2) number = "0" + number;
  return number;
}

export default Score;
