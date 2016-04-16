import { SUDOKU } from '../constants/ActionTypes';

const initialState = {
  sudokuSize: 3,
  difficulty: 3,
  hideSettings: false
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case SUDOKU.INIT_GAME:
      return { ...state, solutions: action.solutions, hideSettings: true };
    case SUDOKU.SET_SIZE:
      return { ...state, sudokuSize: action.sudokuSize};
    case SUDOKU.SET_DIFFICULTY:
      return { ...state, difficulty: action.difficulty };
    case SUDOKU.CLEAR:
      return initialState;
    default:
      return state;
  }
}
