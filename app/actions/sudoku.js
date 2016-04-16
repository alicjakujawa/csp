import { SUDOKU } from '../constants/ActionTypes';
import Sudoku from '../components/Games/Sudoku';

export function init(solutions) {
  return {
    type: SUDOKU.INIT_GAME,
    solutions
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

export function clearGame() {
  return {
    type: SUDOKU.CLEAR
  };
}

export function initGame() {
  return (dispatch, getState) => {
    const { sudokuSize, difficulty } = getState().sudoku;
    const solutions = Sudoku.newGame(sudokuSize, difficulty);
    dispatch(init(solutions))
  };
}
