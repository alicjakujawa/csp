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

export function clearGame() {
  return {
    type: HETMANI.CLEAR
  };
}

export function initGame() {
  return (dispatch, getState) => {
    const SIZE = getState().hetmani.hetmaniSize;
    const solutions = Hetmani.newGame(SIZE);
    let b = solutions[1];
    console.log(b);
    dispatch(init(solutions))
  };
}
