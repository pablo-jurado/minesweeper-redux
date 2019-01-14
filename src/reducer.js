import { createEmptyBoard, addMines } from "./helpers";
import { RIGHT_CLICK } from "./actions";

const appState = {
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

// boardItems: { isClicked: false, mine: false, flag: false, showMine: false }

appState.board = createEmptyBoard(appState.rowIndx, appState.colIndx);

appState.board = addMines(
  appState.minesNum,
  appState.board,
  appState.rowIndx,
  appState.colIndx
);

const rootReducer = (state = appState, action) => {
  if (action.type === RIGHT_CLICK) {
    const x = action.payload.x;
    const y = action.payload.y;

    const newBoard = state.board.slice(0);
    newBoard[x][y].isClicked = true;
    return {
      ...state,
      board: newBoard
    };
  }
  return state;
};

export default rootReducer;
