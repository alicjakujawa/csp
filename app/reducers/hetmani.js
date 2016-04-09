import { HETMANI } from '../constants/ActionTypes';

const initialState = {
  hetmaniSize: 3,
  hideSettings: false
}

export default function counter(state = initialState, action) {
  switch (action.type) {
    case HETMANI.INIT_GAME:
      return { ...state, solutions: action.solutions, hideSettings: false};
    case HETMANI.SET_SIZE:
      return { ...state, hetmaniSize: action.hetmaniSize};
    default:
      return state;
  }
}
