import * as actionTypes from "../constants/ActionTypes";

export function initGame() {
  return {
    type: actionTypes.INIT_GAME
  };
}

export function setSize(sudokuSize) {
  return {
    type: actionTypes.SET_SIZE,
    sudokuSize
  };
}

export function setLevel(difficulty) {
  return {
    type: actionTypes.SET_DIFFICULTY,
    difficulty
  };
}
