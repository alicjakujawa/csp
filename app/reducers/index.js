import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import sudoku from './sudoku';
import hetmani from './hetmani';

const rootReducer = combineReducers({
  counter,
  sudoku,
  hetmani,
  routing
});

export default rootReducer;
