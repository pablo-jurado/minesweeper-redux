import { createEmptyBoard } from "./helpers";

const initialState = {
  board: null,
  rowIndx: 10,
  colIndx: 10,
  minesNum: 10,
  flagNum: 10,
  isGameOver: false,
  startGame: false,
  seconds: 0,
  timer: null
};

initialState.board = createEmptyBoard(
  initialState.rowIndx,
  initialState.colIndx
);

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;
