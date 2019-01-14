import { createEmptyBoard, showEmptySquares } from "./helpers";
import { RIGHT_CLICK, LEFT_CLICK } from "./actions";

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

// boardItems: { isClicked: false, mine: false, flag: false, showMine: false, minesNum }

appState.board = createEmptyBoard(
  appState.rowIndx,
  appState.colIndx,
  appState.minesNum
);

const rootReducer = (state = appState, action) => {
  if (action.type === LEFT_CLICK) {
    const { x, y } = action.payload;

    let newBoard = state.board.slice();
    newBoard[x][y].isClicked = true;
    if (!newBoard[x][y].minesNum) {
      newBoard = showEmptySquares(x, y, state.colIndx, state.rowIndx, newBoard);
    }
    return {
      ...state,
      board: newBoard
    };
  }

  if (action.type === RIGHT_CLICK) {
    const { x, y } = action.payload;
    const flagValue = state.board[x][y].flag;
    const newBoard = state.board.slice();

    if (!flagValue) {
      if (state.flagNum - 1 >= 0) {
        state.flagNum--;
        newBoard[x][y].flag = true;
      }
    } else {
      if (state.flagNum + 1 <= state.minesNum) {
        state.flagNum++;
        newBoard[x][y].flag = false;
      }
    }

    return {
      ...state,
      board: newBoard
    };
  }

  return state;
};

export default rootReducer;
