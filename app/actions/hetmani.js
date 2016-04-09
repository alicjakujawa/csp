import { HETMANI } from '../constants/ActionTypes';
import Hetmani from '../components/Games/Hetmani';

export function init(solutions) {
  return {
    type: HETMANI.INIT_GAME,
    solutions
  };
}

export function setSize(hetmaniSize) {
  return {
    type: HETMANI.SET_SIZE,
    hetmaniSize
  };
}

export function initGame() {
  return (dispatch, getState) => {
    const solutions = Hetmani.newGame(getState().hetmaniSize);
    console.log(solutions, "solutions")
    dispatch(init(solutions))
  };
}
