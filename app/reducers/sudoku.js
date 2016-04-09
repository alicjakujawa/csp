import { SUDOKU } from '../constants/ActionTypes';

const initialState = {
  sudokuSize: 3,
  difficulty: 3
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case SUDOKU.INIT_GAME:
      return { ...state, sudokuSize: state.sudokuSize, difficulty: state.difficulty };
    case SUDOKU.SET_SIZE:
      return { ...state, sudokuSize: action.sudokuSize};
    case SUDOKU.SET_DIFFICULTY:
      return { ...state, difficulty: action.difficulty };
    default:
      return state;
  }
}
