import { SUDOKU } from '../constants/ActionTypes';

export function initGame() {
  return {
    type: SUDOKU.INIT_GAME
  };
}

export function setSize(sudokuSize) {
  return {
    type: SUDOKU.SET_SIZE,
    sudokuSize
  };
}

export function setLevel(difficulty) {
  return {
    type: SUDOKU.SET_DIFFICULTY,
    difficulty
  };
}
