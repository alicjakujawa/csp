import { HETMANI } from '../constants/ActionTypes';

const initialState = {
  hetmaniSize: 3,
  hideSettings: false
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case HETMANI.INIT_GAME:
      return { ...state, solutions: action.solutions, hideSettings: true};
    case HETMANI.SET_SIZE:
      return { ...state, hetmaniSize: action.hetmaniSize};
    case HETMANI.CLEAR:
      return initialState;
    default:
      return state;
  }
}
